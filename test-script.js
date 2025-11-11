/* ========= Configuration ========= */

/** Échelle incrémentale demandée : 0,1,4,9,16 */
const SCORE_MAP = { 0:0, 1:1, 2:4, 3:9, 4:16 };

/** Clés localStorage */
const LS_ANSWERS_KEY = "ia360_answers_v1";
const LS_PROFILE_DONE = "ia360_profile_done_v1";

/* ========= État ========= */
let answers = {}; // indexé par `${q.id}-${dim}` -> 0..4
let hasCalculatedOnce = false;

/* ========= Utils ========= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const saveLS = () => {
  localStorage.setItem(LS_ANSWERS_KEY, JSON.stringify(answers));
  localStorage.setItem(LS_PROFILE_DONE, hasCalculatedOnce ? "1" : "0");
};
const loadLS = () => {
  try{
    const raw = localStorage.getItem(LS_ANSWERS_KEY);
    if(raw){ answers = JSON.parse(raw) || {}; }
    hasCalculatedOnce = localStorage.getItem(LS_PROFILE_DONE) === "1";
  }catch(e){ answers = {}; hasCalculatedOnce = false; }
};

/* ========= Rendu questionnaire ========= */
function renderQuestions(){
  const root = $("#questionnaire");
  root.innerHTML = QUESTIONS.map(q => `
    <div class="question-block">
      <div class="question-title">${q.title}</div>
      ${q.options.map((opt) => {
        const key = `${q.id}-${opt.dim}`;
        const val = (answers[key] ?? null);
        return `
          <div class="option-row">
            <div class="option-text">${opt.text}</div>
            <div class="rating-buttons">
              ${[0,1,2,3,4].map(v=>{
                const selected = (val === v) ? 'selected' : '';
                return `<div class="rate-btn ${selected}" data-q="${q.id}" data-dim="${opt.dim}" data-value="${v}">${v}</div>`;
              }).join("")}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `).join("");

  // Écoutes de clic
  $$(".rate-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const q = btn.dataset.q;
      const dim = btn.dataset.dim;
      const v = Number(btn.dataset.value);
      const key = `${q}-${dim}`;

      // MàJ état
      answers[key] = v;
      saveLS();

      // MàJ visuelle pour la ligne concernée
      $$(`.rate-btn[data-q='${q}'][data-dim='${dim}']`).forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected");

      // Si un calcul a déjà eu lieu, passer en "Recalculer" et montrer l'indication
      if(hasCalculatedOnce){
        const calcBtn = $("#btn-calc-profile");
        calcBtn.textContent = "🔄 Recalculer mon profil";
        $("#change-hint").classList.remove("hidden");
      }
    });
  });
}

/* ========= Calcul profil ========= */
function calcProfileRaw(){
  // Somme des scores (échelle non linéaire) par dimension
  const scores = Object.fromEntries(DIMENSIONS.map(d=>[d.code,0]));
  Object.keys(answers).forEach(key=>{
    const dim = key.split("-")[1];
    const val = Number(answers[key]);           // 0..4
    const mapped = SCORE_MAP[val] ?? 0;         // 0,1,4,9,16
    scores[dim] += mapped;
  });
  return scores;
}

function showProfile(){
  const root = $("#profile-results");
  const scores = calcProfileRaw();

  // Max par dimension = 4 propositions * max 16 = 64
  const MAX_DIM = 64;

  root.innerHTML = DIMENSIONS.map(dim=>{
    const raw = scores[dim.code] || 0;
    const pct = Math.round((raw / MAX_DIM) * 100);
    return `
      <div class="profile-row">
        <div class="profile-label">${dim.name}</div>
        <div class="profile-bar"><div class="profile-fill" style="width:${pct}%"></div></div>
        <div class="profile-pct"><strong>${pct}%</strong></div>
      </div>
    `;
  }).join("");

  $("#profile-section").classList.remove("hidden");

  // Activer bouton univers
  const btnUnivers = $("#btn-calc-univers");
  btnUnivers.disabled = false;

  // Basculer libellé calc
  const btnCalc = $("#btn-calc-profile");
  btnCalc.textContent = "🔄 Recalculer mon profil";
  $("#change-hint").classList.add("hidden");

  hasCalculatedOnce = true;
  saveLS();
}

/* ========= Calcul univers ========= */
function calcUniversList(){
  const dimScores = calcProfileRaw(); // sur échelle 0..64 par dimension
  // Pour la matrice univers, on conserve les poids bruts 0/1/3/6
  // Score univers = Σ (score_dim * poids) ; Max univers = Σ (64 * poids)
  const list = universes.map(u=>{
    let score = 0, max = 0;
    u.weights.forEach((w, i)=>{
      const code = DIMENSIONS[i].code;
      score += (dimScores[code] || 0) * w;
      max   += 64 * w;
    });
    const pct = max>0 ? Math.round((score / max) * 100) : 0;
    return { ...u, pct };
  }).sort((a,b)=>b.pct - a.pct);
  return list;
}

function showTopUnivers(){
  const list = calcUniversList();
  const root = $("#univers-results");

  const top5 = list.slice(0,5);
  const others = list.slice(5);

  root.innerHTML = top5.map(u=>`
    <div class="univers-card">
      <div class="title"><span>${u.icon}</span><span>${u.name}</span></div>
      <div class="pct">${u.pct}%</div>
    </div>
  `).join("");

  const btnShowAll = $("#btn-show-all");
  if(others.length){
    btnShowAll.classList.remove("hidden");
    btnShowAll.onclick = ()=>{
      root.insertAdjacentHTML("beforeend",
        others.map(u=>`
          <div class="univers-card">
            <div class="title"><span>${u.icon}</span><span>${u.name}</span></div>
            <div class="pct">${u.pct}%</div>
          </div>
        `).join("")
      );
      btnShowAll.classList.add("hidden");
    };
  } else {
    btnShowAll.classList.add("hidden");
  }

  $("#univers-section").classList.remove("hidden");
  // petit scroll doux
  $("#univers-section").scrollIntoView({behavior:"smooth", block:"start"});
}

/* ========= Events ========= */
document.addEventListener("DOMContentLoaded", ()=>{
  loadLS();
  renderQuestions();

  // Si on a des réponses en LS et qu'un calcul a déjà eu lieu : ajuster bouton
  if(Object.keys(answers).length && hasCalculatedOnce){
    $("#btn-calc-profile").textContent = "🔄 Recalculer mon profil";
  }

  // Bouton calcul / recalcul
  $("#btn-calc-profile").addEventListener("click", showProfile);

  // Retour vers questionnaire (haut et bas)
  $("#btn-back-to-questions-top").addEventListener("click", ()=>{
    window.scrollTo({top:0, behavior:"smooth"});
  });
  $("#btn-back-to-questions-bottom").addEventListener("click", ()=>{
    $("#questionnaire").scrollIntoView({behavior:"smooth", block:"start"});
  });

  // Calcul univers (nécessite profil calculé)
  $("#btn-calc-univers").addEventListener("click", showTopUnivers);
});
