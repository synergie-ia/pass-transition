// ============================================
// SCRIPT IA360 - Calcul avec exposants
// ============================================

let responses = new Array(14).fill(5);
let universResults = [];

// Exposant progressif selon intensité
function powerFor(value) {
  if (value <= 3) return 1;
  if (value <= 7) return 1.05;
  return 1.1;
}

// === Calcul principal ===
function calculerMatching(profilUtilisateur, matriceUnivers) {
  const results = [];
  for (const [univers, valeurs] of Object.entries(matriceUnivers)) {
    let score = 0;
    let somme = 0;
    for (let i = 0; i < 14; i++) {
      const expo = powerFor(valeurs[i]);
      score += Math.pow(profilUtilisateur[i], expo);
      somme += Math.pow(10, expo);
    }
    const pourcentage = (score / somme) * 100;
    results.push({
      nom: univers,
      nomComplet: universNoms[univers],
      pourcentage: Math.round(pourcentage),
      sousUnivers: sousUnivers[univers]
    });
  }
  return results.sort((a, b) => b.pourcentage - a.pourcentage);
}

// === Interface ===
function renderQuestions() {
  const c = document.getElementById('questions-container');
  c.innerHTML = '';
  questions.forEach((q, i) => {
    c.innerHTML += `
      <div class="question">
        <h3>${i + 1}. ${q.title}</h3>
        <p>${q.description}</p>
        <p><i>${q.examples}</i></p>
        <input type="range" min="0" max="10" value="${responses[i]}" oninput="updateValue(${i},this.value)">
        <div class="value-display" id="val${i}">${responses[i]}/10</div>
      </div>`;
  });
}

function updateValue(i, val) {
  responses[i] = Number(val);
  document.getElementById(`val${i}`).textContent = `${val}/10`;
}

function showResults() {
  document.getElementById('questionnaire').style.display = 'none';
  document.getElementById('results').classList.add('active');
  universResults = calculerMatching(responses, matricePrincipale);
  renderProfile();
}

function renderProfile() {
  const p = document.getElementById('profile-list');
  p.innerHTML = '';
  questions.forEach((q, i) => {
    p.innerHTML += `<div>${i + 1}. ${q.title} : ${responses[i]}/10</div>`;
  });
}

function showUnivers() {
  document.getElementById('results').classList.remove('active');
  const u = document.getElementById('univers');
  u.classList.add('active');
  const c = document.getElementById('univers-container');
  c.innerHTML = '';
  universResults.forEach((uRes, i) => {
    c.innerHTML += `
      <div class="univers-card">
        <h3>#${i + 1} ${uRes.nomComplet}</h3>
        <p><b>${uRes.pourcentage}%</b> de compatibilité</p>
        <ul>${uRes.sousUnivers.map(su => `<li>${su}</li>`).join('')}</ul>
      </div>`;
  });
}

function backToProfile() {
  document.getElementById('univers').classList.remove('active');
  document.getElementById('results').classList.add('active');
}

document.addEventListener('DOMContentLoaded', renderQuestions);
