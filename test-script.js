/* ====== ÉTAT ====== */
const STORAGE_KEY = "reconversion360_scores_v2"; // propre, évite conflits
// responses[questionId][dimensionCode] = note (0..4)
let responses = {};
let shuffledQuestions = [];

/* ====== UTILS ====== */
function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function byCode(code){ return DIMENSIONS.find(d => d.code === code); }
function dimIndex(code){ return DIMENSIONS.findIndex(d => d.code === code); }
function fmtPct(v){ return Math.round(v) + "%"; }

/* ====== INIT ====== */
document.addEventListener("DOMContentLoaded", () => {
  loadSaved();
  shuffledQuestions = shuffleQuestions(QUESTIONS);
  renderQuestions(shuffledQuestions);
  hookButtons();
  updateProgress();
});

/* ====== SHUFFLE ====== */
function shuffleQuestions(arr){
  const a = clone(arr);
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

/* ====== STORAGE ====== */
function loadSaved(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    responses = raw ? JSON.parse(raw) : {};
  }catch(e){
    responses = {};
  }
}
function save(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
  }catch(e){}
}

/* ====== RENDER QUESTIONS ====== */
function renderQuestions(qs){
  const host = document.getElementById("questionsHost");
  if(!host){ console.error("questionsHost manquant"); return; }

  host.innerHTML = qs.map(q => {
    const optionsHTML = q.options.map((opt,optIdx) => {
      const val = getValue(q.id, opt.dim);
      const love = (val === 4) ? '<span class="love" aria-label="Très forte affinité">💚</span>' : '';
      return `
        <div class="option-row">
          <div class="option-text">${opt.text}</div>
          <div class="rating-group" data-q="${q.id}" data-dim="${opt.dim}">
            ${[0,1,2,3,4].map(v => `
              <button
                class="rating-btn ${val===v?'selected':''}"
                title="${LEVEL_LABELS[v]}"
                data-value="${v}"
                type="button"
                aria-pressed="${val===v?'true':'false'}"
              >${v}</button>
            `).join('')}
            ${love}
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="question-card" id="q-${q.id}">
        <div class="question-title">${q.title}</div>
        ${optionsHTML}
      </div>
    `;
  }).join("");

  // attach listeners
  document.querySelectorAll(".rating-group .rating-btn").forEach(btn => {
    btn.addEventListener("click", onRateClick);
  });
}

function getValue(qId, dim){
  return (responses[qId] && typeof responses[qId][dim] === "number")
    ? responses[qId][dim]
    : null;
}

function onRateClick(e){
  const btn = e.currentTarget;
  const group = btn.closest(".rating-group");
  const qId = parseInt(group.getAttribute("data-q"), 10);
  const dim = group.getAttribute("data-dim");
  const val = parseInt(btn.getAttribute("data-value"), 10);

  // init
  if(!responses[qId]) responses[qId] = {};
  responses[qId][dim] = val;
  save();

  // toggle UI in group
  group.querySelectorAll(".rating-btn").forEach(b => {
    b.classList.remove("selected");
    b.setAttribute("aria-pressed","false");
  });
  btn.classList.add("selected");
  btn.setAttribute("aria-pressed","true");

  // love heart
  const existingLove = group.querySelector(".love");
  if(existingLove) existingLove.remove();
  if(val === 4){
    const span = document.createElement("span");
    span.className = "love";
    span.textContent = "💚";
    span.setAttribute("aria-label","Très forte affinité");
    group.appendChild(span);
  }

  updateProgress();
}

/* ====== PROGRESS ====== */
function updateProgress(){
  // total items to answer = nb questions * 4 propositions
  const total = QUESTIONS.length * 4;
  let answered = 0;
  for(const q of QUESTIONS){
    const r = responses[q.id] || {};
    // count filled values (0..4 are valid, null = not answered)
    for(const opt of q.options){
      if(typeof r[opt.dim] === "number") answered++;
    }
  }
  const pct = total ? (answered/total)*100 : 0;
  const bar = document.getElementById("progressBar");
  if(bar){ bar.style.width = pct + "%"; }

  // Autoriser "Voir les univers" seulement après calcul profil
  const btnUni = document.getElementById("btnSeeUniverses");
  if(btnUni){
    // activé uniquement si un profil a été calculé (inféré en stockant dans session)
    btnUni.disabled = !window.__profileReady__;
  }
}

/* ====== PROFILE CALC ====== */
/*
  Algorithme :
  - scoreDimension[code] = somme des notes sur les 4 occurrences de la dimension (min 0, max 16)
  - pourcentageDimension = (score / 16) * 100
*/
function computeProfile(){
  const score = {}; // brut 0..16
  const maxPerDim = 4 * 4; // 4 questions * note max 4 = 16

  // init
  DIMENSIONS.forEach(d => score[d.code] = 0);

  // sommation
  for(const q of QUESTIONS){
    const r = responses[q.id] || {};
    for(const opt of q.options){
      const val = r[opt.dim];
      if(typeof val === "number") score[opt.dim] += val;
    }
  }

  // calcul pourcentage
  const profile = DIMENSIONS.map(d => {
    const val = Math.max(0, Math.min(score[d.code], maxPerDim));
    const pct = maxPerDim ? (val / maxPerDim) * 100 : 0;
    return { code:d.code, name:d.name, raw: val, pct };
  });

  // tri décroissant pour affichage lisible
  profile.sort((a,b) => b.pct - a.pct);

  return { score, profile, maxPerDim };
}

function renderProfile(){
  const { profile, maxPerDim } = computeProfile();
  const host = document.getElementById("profileSection");
  if(!host) return;

  // vérif complétude (toutes notes présentes)
  const total = QUESTIONS.length * 4;
  let answered = 0;
  for(const q of QUESTIONS){
    const r = responses[q.id] || {};
    for(const opt of q.options){
      if(typeof r[opt.dim] === "number") answered++;
    }
  }
  if(answered < total){
    alert("Veuillez renseigner toutes les lignes (0 à 4) avant de calculer votre profil.");
    return;
  }

  const bars = profile.map(p => `
    <div class="profile-row">
      <div class="profile-name">${p.name}</div>
      <div class="profile-bar"><div class="profile-fill" style="width:${p.pct}%;"></div></div>
      <div class="profile-val">${Math.round(p.pct)}%</div>
    </div>
  `).join("");

  host.innerHTML = `
    <h2>📊 Votre profil (12 dimensions)</h2>
    <p style="color:#555; margin:6px 0 10px;">Chaque score est calculé sur un maximum de ${maxPerDim} points par dimension (4 occurrences × note max 4).</p>
    <div class="profile-bars">${bars}</div>
  `;

  // Autorise le bouton "Voir les univers"
  window.__profileReady__ = true;
  updateProgress();
}

/* ====== UNIVERSES PROJECTION ====== */
/*
  Algorithme :
  - On convertit le profil dimensionnel en pourcentages (0..100) par dimension (déjà fait)
  - Pour chaque univers :
       score_univers = Σ ( pct_dim[i] * weight[i] )
       max_univers   = Σ ( 100 * weight[i] )
       pct_univers   = (score_univers / max_univers) * 100
*/
function computeUniverses(){
  const { profile } = computeProfile();
  const pctByCode = {};
  profile.forEach(p => pctByCode[p.code] = p.pct);

  const list = universes.map(u => {
    let s = 0, m = 0;
    u.weights.forEach((w, idx) => {
      const code = DIMENSIONS[idx].code;
      const pct = pctByCode[code] ?? 0;
      s += pct * w;
      m += 100 * w;
    });
    const upct = m>0 ? (s/m)*100 : 0;
    return { id:u.id, name:u.name, icon:u.icon, pct: upct };
  });

  list.sort((a,b) => b.pct - a.pct);
  return list;
}

function renderUniverses(){
  if(!window.__profileReady__){
    alert("Commence par calculer ton profil (bouton 'Calculer mon profil').");
    return;
  }
  const host = document.getElementById("universesSection");
  if(!host) return;

  const list = computeUniverses();
  const top5 = list.slice(0,5);
  const rest = list.slice(5);

  const card = (u, rank) => `
    <div class="universe-card">
      <div style="flex:1;">
        <div class="universe-title">${u.icon} #${rank} ${u.name}</div>
        <div class="u-bar"><div class="u-fill" style="width:${u.pct}%;"></div></div>
      </div>
      <div class="u-score">${Math.round(u.pct)}%</div>
    </div>
  `;

  let html = `<h2>🌍 Univers qui vous correspondent</h2>`;
  html += top5.map((u,i) => card(u, i+1)).join("");

  if(rest.length){
    html += `
      <button class="show-more" id="btnShowMore">👇 Voir les ${rest.length} univers restants</button>
      <div id="restUniverses" style="display:none;">
        ${rest.map((u,i)=>card(u, i+6)).join("")}
      </div>
    `;
  }

  host.innerHTML = html;

  const btn = document.getElementById("btnShowMore");
  if(btn){
    btn.addEventListener("click", () => {
      const div = document.getElementById("restUniverses");
      if(div){ div.style.display = "block"; btn.style.display = "none"; }
    });
  }

  // scroll dans la vue
  host.scrollIntoView({ behavior:"smooth", block:"start" });
}

/* ====== BUTTON HOOKS ====== */
function hookButtons(){
  const btnProfile = document.getElementById("btnCalcProfile");
  const btnUniverses = document.getElementById("btnSeeUniverses");
  if(btnProfile) btnProfile.addEventListener("click", renderProfile);
  if(btnUniverses) btnUniverses.addEventListener("click", renderUniverses);
}
