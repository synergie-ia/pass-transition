// ============================================
// SCRIPT PRINCIPAL IA360
// ============================================

let responses = new Array(14).fill(5);
let universResults = [];

// ===== FONCTIONS UTILITAIRES =====

function getEmoji(value) {
    if (value >= 0 && value <= 1) return '⚪';
    if (value >= 2 && value <= 3) return '🔴';
    if (value >= 4 && value <= 5) return '🟠';
    if (value >= 6 && value <= 7) return '🟡';
    if (value >= 8 && value <= 9) return '🟢';
    return '💚';
}

function getLabel(value) {
    if (value >= 0 && value <= 1) return 'Pas du tout';
    if (value >= 2 && value <= 3) return 'Très peu';
    if (value >= 4 && value <= 5) return 'Un peu / Moyen';
    if (value >= 6 && value <= 7) return 'Plutôt oui';
    if (value >= 8 && value <= 9) return 'Beaucoup';
    return 'Totalement';
}

// ===== CALCUL DU MATCHING =====

function calculerMatching(profilUtilisateur, matriceUnivers) {
    const results = [];
    
    for (const [univers, valeurs] of Object.entries(matriceUnivers)) {
        // Calcul du score brut
        let score = 0;
        let sommeCoefficients = 0;
        
        for (let i = 0; i < 14; i++) {
            score += profilUtilisateur[i] * valeurs[i];
            sommeCoefficients += valeurs[i];
        }
        
        // Normalisation sur 100
        const scoreMax = 10 * sommeCoefficients;
        const pourcentage = (score / scoreMax) * 100;
        
        results.push({
            nom: univers,
            nomComplet: universNoms[univers],
            pourcentage: Math.round(pourcentage * 10) / 10,
            sousUnivers: sousUnivers[univers]
        });
    }
    
    // Tri décroissant
    return results.sort((a, b) => b.pourcentage - a.pourcentage);
}

// ===== RENDU DES QUESTIONS =====

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    questions.forEach((q, index) => {
        const value = responses[index];
        const emoji = getEmoji(value);
        const label = getLabel(value);
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <div class="question-header">
                <span class="question-number">Question ${index + 1}/14</span>
                <h3 class="question-title">${q.title}</h3>
                <p class="question-description">${q.description}</p>
                <p class="question-examples">${q.examples}</p>
            </div>
            <div class="slider-container">
                <div class="slider-labels">
                    <span>⚪ Pas du tout</span>
                    <span>💚 Totalement</span>
                </div>
                <div class="slider-wrapper">
                    <input type="range" min="0" max="10" value="${value}" 
                           id="slider${index}" 
                           oninput="updateValue(${index}, this.value)">
                </div>
                <div class="value-display" id="display${index}">
                    <span class="emoji">${emoji}</span>
                    <span class="value">${value}/10</span>
                    <span class="label">${label}</span>
                </div>
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

function updateValue(index, value) {
    responses[index] = parseInt(value);
    const emoji = getEmoji(value);
    const label = getLabel(value);
    document.getElementById(`display${index}`).innerHTML = `
        <span class="emoji">${emoji}</span>
        <span class="value">${value}/10</span>
        <span class="label">${label}</span>
    `;
    updateProgress();
}

function updateProgress() {
    const percentage = 100;
    document.getElementById('progressFill').style.width = percentage + '%';
}

// ===== AFFICHAGE DES RÉSULTATS =====

function showResults() {
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('results').classList.add('active');
    
    // Calcul des résultats
    universResults = calculerMatching(responses, matricePrincipale);
    
    // Affichage du profil
    generateProfile();
    
    window.scrollTo(0, 0);
}

function generateProfile() {
    const profileList = document.getElementById('profile-list');
    profileList.innerHTML = '';

    questions.forEach((q, index) => {
        const value = responses[index];
        const emoji = getEmoji(value);

        const itemDiv = document.createElement('div');
        itemDiv.className = 'profile-item';
        itemDiv.innerHTML = `
            <div class="profile-item-left">
                <div class="profile-item-number">${index + 1}</div>
                <div class="profile-item-name">${q.title}</div>
            </div>
            <div class="profile-item-right">
                <div class="profile-item-value">${emoji} ${value}</div>
            </div>
        `;
        profileList.appendChild(itemDiv);
    });

    // Générer le texte d'export
    generateExportText();
}

function generateExportText() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR');
    
    let text = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 PROFIL D'ORIENTATION PROFESSIONNELLE IA360
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date : ${dateStr}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 MES 14 INTÉRÊTS PROFESSIONNELS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;

    questions.forEach((q, index) => {
        const value = responses[index];
        const emoji = getEmoji(value);
        const bars = '█'.repeat(value) + '░'.repeat(10 - value);
        text += `${index + 1}. ${q.title}\n   ${emoji} ${value}/10  ${bars}\n\n`;
    });

    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 PROFIL BRUT (pour l'IA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[${responses.join(',')}]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    document.getElementById('exportText').textContent = text;
}

function copyProfile() {
    const text = document.getElementById('exportText').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyBtnText');
        const originalText = btn.textContent;
        btn.textContent = '✅ Profil copié !';
        
        setTimeout(() => {
            btn.textContent = originalText;
        }, 3000);
    });
}

// ===== AFFICHAGE DES UNIVERS =====

function showUnivers() {
    document.getElementById('results').classList.remove('active');
    document.getElementById('univers-section').classList.add('active');
    
    // Animation progressive des cartes univers
    const container = document.getElementById('univers-container');
    container.innerHTML = '<div class="univers-intro"><h2>🎯 Tes univers professionnels</h2><p>Classés par ordre de compatibilité avec ton profil</p></div>';
    
    universResults.forEach((univers, index) => {
        setTimeout(() => {
            const card = createUniversCard(univers, index + 1);
            container.appendChild(card);
            setTimeout(() => card.classList.add('show'), 50);
        }, index * 300); // 300ms entre chaque carte
    });
}

function createUniversCard(univers, rank) {
    const card = document.createElement('div');
    card.className = 'univers-card';
    
    const color = getPourcentageColor(univers.pourcentage);
    
    card.innerHTML = `
        <div class="univers-rank">#${rank}</div>
        <div class="univers-header">
            <h3 class="univers-nom">${univers.nomComplet}</h3>
            <div class="univers-score" style="background: ${color}">
                ${univers.pourcentage}%
            </div>
        </div>
        <div class="univers-sous" id="sous-${univers.nom}">
            <p class="sous-titre">📍 Sous-univers</p>
            <ul class="sous-liste">
                ${univers.sousUnivers.map(su => `<li>${su}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return card;
}

function getPourcentageColor(percentage) {
    if (percentage >= 80) return 'linear-gradient(135deg, #4CAF50, #8BC34A)';
    if (percentage >= 60) return 'linear-gradient(135deg, #FFC107, #FFD54F)';
    if (percentage >= 40) return 'linear-gradient(135deg, #FF9800, #FFB74D)';
    return 'linear-gradient(135deg, #9E9E9E, #BDBDBD)';
}

function copyUniversList() {
    let text = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 MES UNIVERS PROFESSIONNELS IA360
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;

    universResults.forEach((univers, index) => {
        text += `${index + 1}. ${univers.nomComplet}\n   Compatibilité : ${univers.pourcentage}%\n\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('copyUniversBtn');
        const originalText = btn.textContent;
        btn.textContent = '✅ Liste copiée !';
        
        setTimeout(() => {
            btn.textContent = originalText;
        }, 3000);
    });
}

// ===== NAVIGATION =====

function backToQuestions() {
    document.getElementById('questionnaire').style.display = 'block';
    document.getElementById('results').classList.remove('active');
    document.getElementById('univers-section').classList.remove('active');
    window.scrollTo(0, 0);
}

function backToProfile() {
    document.getElementById('univers-section').classList.remove('active');
    document.getElementById('results').classList.add('active');
    window.scrollTo(0, 0);
}

function resetForm() {
    if (confirm('Es-tu sûr de vouloir recommencer ? Toutes tes réponses seront effacées.')) {
        responses = new Array(14).fill(5);
        renderQuestions();
        updateProgress();
        document.getElementById('univers-section').classList.remove('active');
        document.getElementById('results').classList.remove('active');
        document.getElementById('questionnaire').style.display = 'block';
        window.scrollTo(0, 0);
    }
}

function goToIA() {
    window.open('https://claude.ai', '_blank');
}

// ===== INITIALISATION =====

document.addEventListener('DOMContentLoaded', function() {
    renderQuestions();
    updateProgress();
});
