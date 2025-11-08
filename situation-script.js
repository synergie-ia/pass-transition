// Gestion du formulaire
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('situationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Vérifier que toutes les questions obligatoires sont remplies
        const requiredFields = form.querySelectorAll('[required]');
        let allFilled = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFilled = false;
                field.style.borderColor = '#e74c3c';
            } else {
                field.style.borderColor = '#27ae60';
            }
        });
        
        // Vérifier qu'au moins une checkbox "contrat" est cochée
        const contratCheckboxes = form.querySelectorAll('input[name="contrat"]:checked');
        if (contratCheckboxes.length === 0) {
            allFilled = false;
            alert('Veuillez sélectionner au moins un type de contrat recherché.');
            return;
        }
        
        if (!allFilled) {
            alert('Veuillez remplir tous les champs obligatoires (marqués d\'un *)');
            return;
        }
        
        // Générer le PDF
        generatePDF();
    });
});

function generatePDF() {
    if (typeof window.jspdf === 'undefined') {
        alert('La bibliothèque PDF n\'est pas chargée. Veuillez réessayer.');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const form = document.getElementById('situationForm');
    const formData = new FormData(form);
    const date = new Date().toLocaleDateString('fr-FR');
    
    let yPos = 20;
    
    // Titre
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('Orientation 360 IA', 105, yPos, { align: 'center' });
    
    yPos += 10;
    doc.setFontSize(14);
    doc.text('Bilan de Situation Personnelle', 105, yPos, { align: 'center' });
    
    yPos += 5;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('Date : ' + date, 105, yPos, { align: 'center' });
    
    yPos += 15;
    
    // Fonction pour ajouter une section
    function addSection(title, yPosition) {
        if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
        }
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text(title, 20, yPosition);
        return yPosition + 8;
    }
    
    // Fonction pour ajouter un champ
    function addField(label, value, yPosition) {
        if (yPosition > 275) {
            doc.addPage();
            yPosition = 20;
        }
        doc.setFontSize(10);
        doc.setFont(undefined, 'bold');
        doc.text(label + ' :', 20, yPosition);
        yPosition += 5;
        doc.setFont(undefined, 'normal');
        if (value && value.trim()) {
            const lines = doc.splitTextToSize(value, 170);
            doc.text(lines, 20, yPosition);
            yPosition += lines.length * 5 + 3;
        } else {
            doc.text('Non renseigne', 20, yPosition);
            yPosition += 8;
        }
        return yPosition;
    }
    
    // Informations générales
    yPos = addSection('INFORMATIONS GENERALES', yPos);
    yPos = addField('Age', formData.get('age'), yPos);
    yPos = addField('Situation actuelle', formData.get('situation'), yPos);
    yPos += 5;
    
    // Parcours et expérience
    yPos = addSection('PARCOURS ET EXPERIENCE', yPos);
    yPos = addField('Niveau d\'etudes', formData.get('niveau_etudes'), yPos);
    yPos = addField('Domaine de formation', formData.get('domaine_formation'), yPos);
    yPos = addField('Annees d\'experience', formData.get('experience'), yPos);
    yPos = addField('Secteurs d\'activite', formData.get('secteurs'), yPos);
    yPos += 5;
    
    // Projet professionnel
    yPos = addSection('PROJET PROFESSIONNEL', yPos);
    yPos = addField('Type de projet', formData.get('type_projet'), yPos);
    yPos = addField('Echeance', formData.get('echeance'), yPos);
    yPos = addField('Description du projet', formData.get('description_projet'), yPos);
    yPos += 5;
    
    // Contraintes et préférences
    yPos = addSection('CONTRAINTES ET PREFERENCES', yPos);
    yPos = addField('Mobilite geographique', formData.get('mobilite'), yPos);
    
    // Type de contrat
    const contratsChecked = Array.from(document.querySelectorAll('input[name="contrat"]:checked'))
        .map(cb => cb.value).join(', ');
    yPos = addField('Type de contrat recherche', contratsChecked, yPos);
    
    yPos = addField('Temps de travail', formData.get('temps_travail'), yPos);
    yPos = addField('Contraintes personnelles', formData.get('contraintes'), yPos);
    yPos += 5;
    
    // Compétences et atouts
    yPos = addSection('COMPETENCES ET ATOUTS', yPos);
    yPos = addField('Competences techniques', formData.get('competences_techniques'), yPos);
    yPos = addField('Qualites personnelles', formData.get('qualites'), yPos);
    yPos = addField('Langues', formData.get('langues'), yPos);
    
    // Permis
    const permisChecked = Array.from(document.querySelectorAll('input[name="permis"]:checked'))
        .map(cb => cb.value).join(', ');
    yPos = addField('Permis et habilitations', permisChecked || 'Aucun', yPos);
    yPos += 5;
    
    // Motivations
    yPos = addSection('MOTIVATIONS', yPos);
    yPos = addField('Ce qui est important pour vous', formData.get('motivations'), yPos);
    yPos = addField('Freins et inquietudes', formData.get('freins'), yPos);
    
    // Note finale
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }
    
    yPos += 10;
    doc.setFontSize(9);
    doc.setFont(undefined, 'italic');
    doc.text('---', 105, yPos, { align: 'center' });
    yPos += 5;
    doc.text('Document genere par Orientation 360 IA', 105, yPos, { align: 'center' });
    yPos += 4;
    doc.text('Ces informations seront utilisees par votre coach virtuel', 105, yPos, { align: 'center' });
    yPos += 4;
    doc.text('pour personnaliser ses recommandations de metiers et de formations', 105, yPos, { align: 'center' });
    
    // Sauvegarde
    doc.save('Orientation360IA_Bilan_Situation_' + date.replace(/\//g, '-') + '.pdf');
    
    // Notification de succès
    showNotification('PDF téléchargé avec succès ! Conservez ce document pour votre accompagnement.');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: bold;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Ajout des animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
