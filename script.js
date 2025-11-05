// Variables globales
let currentQuestion = 0;
let responses = [];
let currentResults = [];

// Nouvelle échelle à 5 niveaux
const ratingScale = [
    { value: 0, label: "Pas du tout" },
    { value: 1, label: "Un peu" },
    { value: 2, label: "Moyennement" },
    { value: 3, label: "Plutôt" },
    { value: 4, label: "Totalement" }
];

// Charger les réponses sauvegardées
function loadSavedResponses() {
    const saved = localStorage.getItem('orientation360_responses');
    if (saved) {
        responses = JSON.parse(saved);
        return true;
    }
    return false;
}

// Sauvegarder les réponses
function saveResponses() {
    localStorage.setItem('orientation360_responses', JSON.stringify(responses));
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si on a des résultats à afficher
    if (loadSavedResponses() && responses.length === 12) {
        displayResults();
    } else {
        startTest();
    }
});

// Démarrer le test
function startTest() {
    responses = [];
    currentQuestion = 0;
    saveResponses();
    displayQuestion();
}

// Afficher une question
function displayQuestion() {
    const container = document.getElementById('questionContainer');
    const progressBar = document.getElementById('progressBar');
    const questionNumber = document.getElementById('questionNumber');
    
    if (currentQuestion >= interestsData.length) {
        calculateResults();
        return;
    }
    
    const interest = interestsData[currentQuestion];
    
    // Mise à jour de la progression
    const progress = ((currentQuestion + 1) / interestsData.length) * 100;
    progressBar.style.width = progress + '%';
    questionNumber.textContent = `Question ${currentQuestion + 1}/${interestsData.length}`;
    
    // Affichage de la question
    container.innerHTML = `
        <div class="question-card">
            <div class="verb-highlight">${interest.verb}</div>
            <div class="question-text">${interest.question}</div>
            <div class="rating-container">
                ${ratingScale.map((rating, index) => `
                    <button class="rating-btn" onclick="selectRating(${rating.value})">
                        <div class="rating-value">${rating.label}</div>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// Sélectionner une réponse
function selectRating(value) {
    responses[currentQuestion] = value;
    saveResponses();
    currentQuestion++;
    displayQuestion();
}

// Calculer les résultats
function calculateResults() {
    const results = universesData.map(universe => {
        let score = 0;
        let maxScore = 0;
        
        universe.interests.forEach((weight, index) => {
            if (weight > 0) {
                score += responses[index] * weight;
                maxScore += 4 * weight; // 4 = valeur max de l'échelle
            }
        });
        
        const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
        
        return {
            id: universe.id,
            name: universe.name,
            icon: universe.icon,
            score: score,
            maxScore: maxScore,
            percentage: percentage
        };
    });
    
    // Trier par pourcentage décroissant
    results.sort((a, b) => b.percentage - a.percentage);
    currentResults = results;
    
    displayResults();
}

// Afficher les résultats
function displayResults() {
    const container = document.getElementById('questionContainer');
    const progressContainer = document.querySelector('.progress-container');
    
    progressContainer.style.display = 'none';
    
    // Top 5
    const top5HTML = currentResults.slice(0, 5).map((result, index) => `
        <div class="result-item">
            <div class="result-rank">#${index + 1}</div>
            <div class="result-icon">${result.icon}</div>
            <div class="result-info">
                <div class="result-name">${result.name.replace(result.icon, '').trim()}</div>
                <div class="result-score">Compatibilité : ${Math.round(result.percentage)}%</div>
            </div>
            <button class="explore-btn" onclick="exploreUniverse(${result.id})">🔍</button>
        </div>
    `).join('');
    
    // Autres univers
    const othersHTML = currentResults.length > 5 ? `
        <div id="otherResults" style="display: none;">
            ${currentResults.slice(5).map((result, index) => `
                <div class="result-item">
                    <div class="result-rank">#${index + 6}</div>
                    <div class="result-icon">${result.icon}</div>
                    <div class="result-info">
                        <div class="result-name">${result.name.replace(result.icon, '').trim()}</div>
                        <div class="result-score">Compatibilité : ${Math.round(result.percentage)}%</div>
                    </div>
                    <button class="explore-btn" onclick="exploreUniverse(${result.id})">🔍</button>
                </div>
            `).join('')}
        </div>
        <button class="show-more-btn" onclick="toggleOtherResults()">
            <span id="showMoreText">Voir les ${currentResults.length - 5} univers restants</span>
        </button>
    ` : '';
    
    container.innerHTML = `
        <div class="results-header">
            <h2>🎯 Vos résultats</h2>
            <p>Voici les univers professionnels les plus compatibles avec votre profil</p>
        </div>
        
        <div class="top-actions">
            <button class="action-icon-btn pdf-btn" onclick="downloadPDF()">
                📄
            </button>
            <button class="action-icon-btn copy-btn" onclick="copyResults()">
                📋
            </button>
        </div>
        
        <div class="results-list">
            <h3>🏆 Top 5 des univers</h3>
            ${top5HTML}
        </div>
        
        ${othersHTML}
        
        <div class="actions-container">
            <button class="restart-btn" onclick="restartTest()">🔄 Recommencer le test</button>
            <button class="home-btn" onclick="goHome()">🏠 Retour à l'accueil</button>
        </div>
    `;
}

// Afficher/masquer les autres résultats
function toggleOtherResults() {
    const otherResults = document.getElementById('otherResults');
    const showMoreText = document.getElementById('showMoreText');
    const btn = event.target.closest('.show-more-btn');
    
    if (otherResults.style.display === 'none') {
        otherResults.style.display = 'block';
        showMoreText.textContent = 'Masquer';
    } else {
        otherResults.style.display = 'none';
        showMoreText.textContent = `Voir les ${currentResults.length - 5} univers restants`;
    }
}

// Explorer un univers
function exploreUniverse(universeId) {
    window.location.href = `universes.html?id=${universeId}&from=results`;
}

// Télécharger en PDF
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const date = new Date().toLocaleDateString('fr-FR');
    
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('ORIENTATION 360 IA', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text('Resultats du test d\'orientation', 105, 28, { align: 'center' });
    doc.text('Date : ' + date, 105, 35, { align: 'center' });
    
    let yPos = 50;
    
    // Profil
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('VOTRE PROFIL', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    interestsData.forEach((interest, index) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }
        const rating = responses[index];
        const ratingLabels = ['Pas du tout', 'Un peu', 'Moyennement', 'Plutot', 'Totalement'];
        doc.text(interest.title, 20, yPos);
        yPos += 5;
        doc.text('   ' + ratingLabels[rating], 20, yPos);
        yPos += 8;
    });
    
    yPos += 10;
    
    // Top 5
    if (yPos > 200) {
        doc.addPage();
        yPos = 20;
    }
    
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('TOP 5 DES UNIVERS COMPATIBLES', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    
    currentResults.slice(0, 5).forEach((result, index) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }
        const cleanName = result.name.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
        doc.setFont(undefined, 'bold');
        doc.text('#' + (index + 1) + ' ' + cleanName, 20, yPos);
        yPos += 5;
        doc.setFont(undefined, 'normal');
        doc.text('   Compatibilite : ' + Math.round(result.percentage) + '%', 20, yPos);
        yPos += 8;
    });
    
    // Autres univers
    if (currentResults.length > 5) {
        yPos += 5;
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('AUTRES UNIVERS', 20, yPos);
        yPos += 8;
        
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        
        currentResults.slice(5).forEach((result, index) => {
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
            const cleanName = result.name.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
            doc.text('#' + (index + 6) + ' ' + cleanName + ' - ' + Math.round(result.percentage) + '%', 20, yPos);
            yPos += 6;
        });
    }
    
    doc.save('Orientation360IA_Resultats_' + date.replace(/\//g, '-') + '.pdf');
    showNotification('✅ PDF téléchargé avec succès !');
}

// Copier les résultats
function copyResults() {
    if (currentResults.length === 0) {
        alert('⚠️ Aucun résultat à copier.');
        return;
    }
    
    const date = new Date().toLocaleDateString('fr-FR');
    
    let text = '🎯 ORIENTATION 360 IA - RÉSULTATS\n';
    text += '═══════════════════════════════════\n\n';
    text += `Date : ${date}\n\n`;
    
    text += '📊 VOTRE PROFIL\n';
    text += '─────────────────────────────────\n';
    interestsData.forEach((interest, index) => {
        const rating = responses[index];
        const ratingLabels = ['Pas du tout', 'Un peu', 'Moyennement', 'Plutôt', 'Totalement'];
        text += `${interest.title} : ${ratingLabels[rating]}\n`;
    });
    
    text += '\n🏆 TOP 5 DES UNIVERS\n';
    text += '─────────────────────────────────\n';
    currentResults.slice(0, 5).forEach((result, index) => {
        const cleanName = result.name.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
        text += `#${index + 1} ${cleanName} - ${Math.round(result.percentage)}%\n`;
    });
    
    if (currentResults.length > 5) {
        text += '\n📋 AUTRES UNIVERS\n';
        text += '─────────────────────────────────\n';
        currentResults.slice(5).forEach((result, index) => {
            const cleanName = result.name.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
            text += `#${index + 6} ${cleanName} - ${Math.round(result.percentage)}%\n`;
        });
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('✅ Résultats copiés dans le presse-papier !');
    }).catch(() => {
        alert('❌ Erreur lors de la copie');
    });
}

// Notification
function showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('show'), 100);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Recommencer le test
function restartTest() {
    if (confirm('⚠️ Êtes-vous sûr de vouloir recommencer le test ? Vos réponses actuelles seront effacées.')) {
        localStorage.removeItem('orientation360_responses');
        location.reload();
    }
}

// Retour à l'accueil
function goHome() {
    window.location.href = 'index.html';
}
