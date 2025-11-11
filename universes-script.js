/* =========================================================
   IA360 – Universes Page Logic
   Dépendances : test-data.js (DIMENSIONS + matrice des poids)
                 universes-data.js (universesData)
   Stockage     : ia360_profile (profil 12 dims, max 16 par dim)
                 ia360_selected_universes (array d’IDs)
   ========================================================= */

/* ---------- Helpers LocalStorage ---------- */
const LS_KEYS = {
  PROFILE: "ia360_profile",
  SELECTED: "ia360_selected_universes"
};

function loadJSON(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota errors for now */
  }
}

/* ---------- DOM refs ---------- */
const listRoot = document.getElementById("universList");
const selectedCountLabel = document.getElementById("selectedCount");
const validateBtn = document.getElementById("validateSelection");
const backToTestBtn = document.getElementById("backToTest");
const backToHomeBtn = document.getElementById("backToHome");

/* ---------- Navigation ---------- */
if (backToTestBtn) {
  backToTestBtn.addEventListener("click", () => {
    window.location.href = "test.html";
  });
}
if (backToHomeBtn) {
  backToHomeBtn.addEventListener("click", () => {
    // page d’accueil : index.html par défaut
    window.location.href = "index.html";
  });
}

/* ---------- Données ---------- */
const profile = loadJSON(LS_KEYS.PROFILE, null);
/*
  profile attendu :
  {
    MO: number(0..16),
    PT: ...,
    ...
    RI: number(0..16)
  }
*/

if (!profile || typeof profile !== "object") {
  // Si aucun profil, on renvoie l’utilisateur faire le test
  if (listRoot) {
    listRoot.innerHTML = `
      <div class="empty-state">
        <p>⚠️ Aucun profil trouvé.</p>
        <button class="main-btn" onclick="window.location.href='test.html'">
          Faire le questionnaire
        </button>
      </div>
    `;
  }
  // On stoppe le script ici
} else {
  // Continuer : construire la liste d’univers scorés
  const scored = computeUniversScores(profile);
  renderUniversList(scored);
  restoreSelectionUI(); // restaure l’état des sélections et l’UI
}

/* =========================================================
   Calcul des scores d’univers
   ---------------------------------------------------------
   - On utilise l’ordre de DIMENSIONS pour associer les poids.
   - Chaque univers a un tableau de poids (0/1/3/6) aligné
     sur l’ordre de DIMENSIONS.
   - Score univers = Somme( score_dim * poids_dim )
   - Max univers = Somme( max_dim(=16) * poids_dim )
   - Pourcentage = round( score / max * 100 )
   ========================================================= */
function computeUniversScores(profileScores) {
  // Récupérer la matrice des poids depuis test-data.js
  // On ne suppose pas de variable globale "universes" ici ;
  // on calcule les poids à partir de la matrice des 21 univers
  // présente dans test-data.js OU, si absente, on fabrique depuis universesData
  // => Dans ton projet, la matrice des poids est dans test-data.js (const universes)
  //    On la préfère car elle correspond à l’algorithme établi.

  if (typeof universes === "undefined" || !Array.isArray(universes)) {
    // File de sécurité : s’il n’y a pas "universes" (matrice des poids),
    // on mappe simplement universesData sans calcul (rare)
    return (universesData || []).map(u => ({
      id: u.id,
      name: u.name,
      icon: u.icon || "🌍",
      pct: 0,
      data: u
    }));
  }

  // On calcule les pourcentages
  const result = universes.map(u => {
    let score = 0;
    let max = 0;

    u.weights.forEach((w, i) => {
      const dimCode = DIMENSIONS[i].code; // ordre garanti
      const dimScore = Number(profileScores[dimCode] || 0); // 0..16
      score += dimScore * w;
      max += 16 * w;
    });

    const pct = max > 0 ? Math.round((score / max) * 100) : 0;

    // Retrouver la fiche complète (sous-univers, description) depuis universesData
    const dataFull = (universesData || []).find(d => Number(d.id) === Number(u.id));
    return {
      id: u.id,
      name: (dataFull && dataFull.name) || u.name || `Univers #${u.id}`,
      icon: (dataFull && dataFull.icon) || u.icon || "🌍",
      description: dataFull ? dataFull.description : "",
      subUniverses: dataFull ? (dataFull.subUniverses || []) : [],
      pct
    };
  });

  // Tri décroissant par score
  result.sort((a, b) => b.pct - a.pct || a.name.localeCompare(b.name, "fr"));

  return result;
}

/* =========================================================
   Rendu liste des univers + accordéon + sélection
   ========================================================= */
function renderUniversList(items) {
  if (!listRoot) return;

  listRoot.innerHTML = items.map(u => renderUniverseCard(u)).join("");

  // Attach handlers
  listRoot.querySelectorAll(".uni-header").forEach(h => {
    h.addEventListener("click", (e) => {
      const card = e.currentTarget.closest(".uni-card");
      toggleAccordion(card);
    });
  });

  listRoot.querySelectorAll(".select-dot").forEach(dot => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation(); // ne pas ouvrir/fermer l’accordéon en cliquant sur le sélecteur
      const id = Number(dot.dataset.id);
      toggleSelection(id, dot);
    });
  });
}

/* ---------- Template d’une carte univers ---------- */
function renderUniverseCard(u) {
  const selected = isSelected(u.id);
  return `
    <div class="uni-card" data-id="${u.id}">
      <div class="uni-header" role="button" aria-expanded="false">
        <div class="uni-main">
          <div class="uni-icon">${u.icon}</div>
          <div class="uni-title">
            <div class="uni-name">${u.name}</div>
            <div class="uni-desc">${escapeHTML(u.description || "")}</div>
          </div>
        </div>
        <div class="uni-meta">
          <div class="uni-score" aria-label="Score ${u.pct}%">
            <div class="bar"><span style="width:${u.pct}%"></span></div>
            <div class="pct">${u.pct}%</div>
          </div>
          <button class="select-dot ${selected ? "on" : ""}" data-id="${u.id}" aria-pressed="${selected}">
            <span class="visually-hidden">${selected ? "Désélectionner" : "Sélectionner"}</span>
          </button>
        </div>
      </div>

      <div class="uni-body" hidden>
        ${renderSubUnivers(u.subUniverses)}
      </div>
    </div>
  `;
}

/* ---------- Sous-univers (accordéon) ---------- */
function renderSubUnivers(subs) {
  if (!subs || !subs.length) {
    return `<div class="sub-empty">Aucun sous-univers détaillé.</div>`;
  }
  return `
    <div class="sub-list">
      ${subs.map(su => `
        <div class="sub-item">
          <div class="sub-icon">${su.icon || "•"}</div>
          <div class="sub-texts">
            <div class="sub-name">${escapeHTML(su.name)}</div>
            <div class="sub-desc">${escapeHTML(su.description || "")}</div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

/* ---------- Accordéon ---------- */
function toggleAccordion(cardEl) {
  if (!cardEl) return;
  const body = cardEl.querySelector(".uni-body");
  const header = cardEl.querySelector(".uni-header");
  const expanded = header.getAttribute("aria-expanded") === "true";

  if (expanded) {
    header.setAttribute("aria-expanded", "false");
    body.hidden = true;
    body.style.maxHeight = null;
  } else {
    header.setAttribute("aria-expanded", "true");
    body.hidden = false;
    // slide doux
    requestAnimationFrame(() => {
      const h = body.scrollHeight;
      body.style.maxHeight = h + "px";
    });
  }
}

/* =========================================================
   Sélection des univers
   ========================================================= */
function getSelectedArray() {
  return loadJSON(LS_KEYS.SELECTED, []);
}
function isSelected(id) {
  const arr = getSelectedArray();
  return arr.includes(Number(id));
}
function setSelectedArray(arr) {
  saveJSON(LS_KEYS.SELECTED, arr.map(Number));
  updateSelectedCountUI();
}
function toggleSelection(id, dotBtnEl) {
  let arr = getSelectedArray();
  const idx = arr.indexOf(Number(id));
  if (idx >= 0) {
    arr.splice(idx, 1);
  } else {
    arr.push(Number(id));
  }
  setSelectedArray(arr);

  // UI : toggle état du bouton
  if (dotBtnEl) {
    const on = arr.includes(Number(id));
    dotBtnEl.classList.toggle("on", on);
    dotBtnEl.setAttribute("aria-pressed", on ? "true" : "false");
    const sr = dotBtnEl.querySelector(".visually-hidden");
    if (sr) sr.textContent = on ? "Désélectionner" : "Sélectionner";
  }
}

/* ---------- Compteur + bouton Valider ---------- */
function updateSelectedCountUI() {
  const arr = getSelectedArray();
  const n = arr.length;
  if (selectedCountLabel) {
    selectedCountLabel.textContent =
      n === 0 ? "Aucun univers sélectionné."
              : n === 1 ? "1 univers sélectionné."
                        : `${n} univers sélectionnés.`;
  }
  if (validateBtn) {
    const active = n > 0;
    validateBtn.disabled = !active;
    validateBtn.classList.toggle("disabled", !active);
  }
}
updateSelectedCountUI();

/* ---------- Restaurer l’UI des sélections (après render) ---------- */
function restoreSelectionUI() {
  updateSelectedCountUI();
  const selected = getSelectedArray();
  selected.forEach(id => {
    const btn = listRoot.querySelector(`.select-dot[data-id="${id}"]`);
    if (btn) {
      btn.classList.add("on");
      btn.setAttribute("aria-pressed", "true");
      const sr = btn.querySelector(".visually-hidden");
      if (sr) sr.textContent = "Désélectionner";
    }
  });
}

/* ---------- Utilitaires ---------- */
function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   Bonus : si le profil change dans un autre onglet (storage)
   on recalcule la page automatiquement.
   ========================================================= */
window.addEventListener("storage", (e) => {
  if (e.key === LS_KEYS.PROFILE) {
    const newProfile = loadJSON(LS_KEYS.PROFILE, null);
    if (newProfile) {
      const scored = computeUniversScores(newProfile);
      renderUniversList(scored);
      restoreSelectionUI();
      toast("Profil mis à jour. Liste des univers recalculée.");
    }
  }
});

/* ---------- Petit toast visuel ---------- */
function toast(msg) {
  let el = document.getElementById("ia360_toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "ia360_toast";
    el.style.position = "fixed";
    el.style.left = "50%";
    el.style.bottom = "24px";
    el.style.transform = "translateX(-50%)";
    el.style.padding = "10px 14px";
    el.style.background = "rgba(0,0,0,0.8)";
    el.style.color = "#fff";
    el.style.fontSize = "14px";
    el.style.borderRadius = "8px";
    el.style.zIndex = "9999";
    el.style.opacity = "0";
    el.style.transition = "opacity .25s ease";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.opacity = "1";
  setTimeout(() => { el.style.opacity = "0"; }, 1500);
}
