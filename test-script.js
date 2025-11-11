let answers = {}; // { "Q-DIM" : value }

/* Rendu du questionnaire */
function renderQuestions() {
  const root = document.getElementById("questionnaire");

  root.innerHTML = QUESTIONS.map(q => `
    <div class="question-block">
      <div class="question-title">${q.title}</div>
      ${q.options.map(opt => `
        <div class="option-row">
          <div class="option-text">${opt.text}</div>
          <div class="rating-buttons">
            ${[0,1,2,3,4].map(v => `
              <div class="rate-btn" data-q="${q.id}" data-dim="${opt.dim}" data-value="${v}">${v}</div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");

  document.querySelectorAll(".rate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.dataset.q, dim = btn.dataset.dim, v = Number(btn.dataset.value);
      answers[q+"-"+dim] = v;

      document.querySelectorAll(`.rate-btn[data-q='${q}'][data-dim='${dim}']`)
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });
}
renderQuestions();

/* Score des 12 Dimensions */
function calcProfile() {
  let scores = Object.fromEntries(DIMENSIONS.map(d => [d.code,0]));
  Object.keys(answers).forEach(key => scores[key.split("-")[1]] += answers[key]);
  return scores;
}

/* Affichage du profil */
document.getElementById("btn-calc-profile").addEventListener("click", () => {
  const scores = calcProfile();
  const root = document.getElementById("profile-results");

  root.innerHTML = DIMENSIONS.map(dim => {
    const val = scores[dim.code];
    const pct = Math.round((val / 16) * 100);
    return `
      <div class="profile-row">
        <div class="profile-label">${dim.name}</div>
        <div class="profile-bar"><div class="profile-fill" style="width:${pct}%"></div></div>
        <div>${pct}%</div>
      </div>`;
  }).join("");

  document.getElementById("profile-section").classList.remove("hidden");
});

/* Calcul des univers */
function calcUnivers() {
  const scores = calcProfile();
  return universes.map(u => {
    let score = 0, max = 0;
    u.weights.forEach((w,i) => {
      score += scores[DIMENSIONS[i].code] * w;
      max += 16 * w;
    });
    return {...u,pct:Math.round((score/max)*100)};
  }).sort((a,b)=>b.pct-a.pct);
}

/* Affichage univers */
document.getElementById("btn-calc-univers").addEventListener("click", () => {
  const list = calcUnivers();
  const root = document.getElementById("univers-results");

  const top5 = list.slice(0,5), others = list.slice(5);

  root.innerHTML = top5.map(u => `
    <div class="univers-card"><div>${u.icon} ${u.name}</div><div><strong>${u.pct}%</strong></div></div>
  `).join("");

  const btnShow = document.getElementById("btn-show-all");
  btnShow.classList.remove("hidden");
  btnShow.onclick = () => {
    root.innerHTML += others.map(u => `
      <div class="univers-card"><div>${u.icon} ${u.name}</div><div><strong>${u.pct}%</strong></div></div>
    `).join("");
    btnShow.classList.add("hidden");
  };

  document.getElementById("univers-section").classList.remove("hidden");
});
