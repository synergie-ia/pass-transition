// ==========================================================
// test-script.js — Logique du Test d’Intérêts Reconversion 360 IA
// ==========================================================

// Stockage des réponses de l'utilisateur
let ratings = {};
let currentResults = [];

// Charger les réponses sauvegardées au démarrage
function loadSavedRatings() {
  try {
    const saved = localStorage.getItem(window.R360_STORAGE_KEY);
    ratings = saved ? JSON.parse(saved) : {};
  } catch (e) {
    console.warn("Impossible de charger les données sauvegardées:", e);
    ratings = {};
  }
}

// Sauvegarder les réponses
function saveRatings() {
  try {
    localStorage.setItem(window.R360_STORAGE_KEY, JSON.stringify(ratings));
  } catch (e) {
    console.warn("Impossible de sauvegarder les données:", e);
  }
}

// Affichage des questions
function renderInterests() {
  const container = document.getElementById('interestsList');

  if (!container) return;

  const interestsArr = window.interests || [];

  if (!interestsArr.length) {
    container.innerHTML = `<p style="color:red;padding:20px;">❌ Les questions n'ont pas été chargées.<br>Vérifie test-data.js</p>`;
    return;
  }

  container.innerHTML = interestsArr.map(interest => `
    <div class="interest-card" data-id="${interest.id}">
      <div class="interest-question">
        <strong>${interest.title || interest.name}</strong><br>
        ${interest.description}
      </div>
      <div class="rating-buttons">
        ${[0,1,2,3,4].map(v => `
          <button class="rating-btn ${ratings[interest.id] === v ? 'selected' : ''}" 
            data-interest="${interest.id}" data-value="${v}">
            ${v}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Clic sur les boutons
  document.querySelectorAll('.rating-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const interestId = Number(this.dataset.interest);
      const value = Number(this.dataset.value);

      ratings[interestId] = value;
      saveRatings();

      const parent = this.closest('.rating-buttons');
      parent.querySelectorAll('.rating-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');

      updateProgress();
    });
  });

  updateProgress();
}

// Mettre à jour la barre de progression
function updateProgress() {
  const answered = Object.keys(ratings).length;
  const total = (window.interests || []).length;
  const percent = (answered / total) * 100;

  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = percent + "%";
}

// Calcul des résultats
function calculateResults() {
  const interestsArr = window.interests || [];
  const universesArr = window.universes || [];

  if (Object.keys(ratings).length < interestsArr.length) {
    alert("Réponds à toutes les questions avant de continuer.");
    return;
  }

  const results = universesArr.map(universe => {
    let score = 0;
    let maxScore = 0;

    universe.weights.forEach((weight, idx) => {
      const userValue = ratings[idx + 1] || 0;
      score += userValue * weight;
      maxScore += weight * 4;
    });

    return {
      ...universe,
      score,
      percentage: maxScore ? (score / maxScore) * 100 : 0
    };
  }).sort((a, b) => b.percentage - a.percentage);

  currentResults = results;
  displayResults();
}

// Affichage des résultats
function displayResults() {
  const container = document.getElementById('resultsList');
  const section = document.getElementById('results');

  if (!container || !section) return;

  const top = currentResults.slice(0, 5);
  const more = currentResults.slice(5);

  container.innerHTML = `
    <h2 style="text-align:center;margin-bottom:30px;">🎯 Vos résultats</h2>
    ${top.map((r,i)=>`
      <div class="result-card">
        <div class="result-info">
          <div class="result-title">${r.icon} #${i+1} ${r.name}</div>
          <div class="progress-bar"><div class="progress-fill" style="width:${r.percentage}%"></div></div>
        </div>
        <div class="result-actions"><div class="result-score">${Math.round(r.percentage)}%</div></div>
      </div>
    `).join('')}
    ${more.length ? `
      <button class="show-more-btn" id="showMoreBtn">👇 Voir les ${more.length} autres univers</button>
      <div id="remainingUniverses" style="display:none;">
      ${more.map((r,i)=>`
        <div class="result-card">
          <div class="result-info">
            <div class="result-title">${r.icon} #${i+6} ${r.name}</div>
            <div class="progress-bar"><div class="progress-fill" style="width:${r.percentage}%"></div></div>
          </div>
          <div class="result-actions"><div class="result-score">${Math.round(r.percentage)}%</div></div>
        </div>
      `).join('')}
      </div>
    ` : "" }
  `;

  section.classList.add('show');

  const btn = document.getElementById('showMoreBtn');
  if (btn) btn.onclick = () => {
    document.getElementById('remainingUniverses').style.display = 'block';
    btn.style.display = 'none';
  };
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  loadSavedRatings();
  renderInterests();
  document.getElementById('calculateBtn').addEventListener('click', calculateResults);
});
