/* 
  Script pour le formulaire de situation
*/

document.addEventListener('DOMContentLoaded', function() {
  
  const form = document.getElementById('situationForm');
  
  // Charger les données sauvegardées
  loadSituationData();
  
  // Soumettre le formulaire
  form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const formData = {};
    
    // Récupérer toutes les valeurs
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      formData[input.name] = input.value;
    });
    
    // Sauvegarder dans localStorage
    localStorage.setItem('situation_data', JSON.stringify(formData));
    
    // Feedback visuel
    const btn = form.querySelector('.main-btn');
    const originalText = btn.textContent;
    btn.textContent = '✓ Bilan enregistré !';
    btn.style.background = '#22c55e';
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      
      // Rediriger vers l'accueil
      if(confirm('Votre bilan a été enregistré. Souhaitez-vous retourner à l\'accueil ?')){
        window.location.href = 'index.html';
      }
    }, 2000);
  });
  
});

function loadSituationData(){
  const saved = localStorage.getItem('situation_data');
  if(saved){
    try {
      const data = JSON.parse(saved);
      
      Object.keys(data).forEach(key => {
        const input = document.querySelector(`[name="${key}"]`);
        if(input) input.value = data[key];
      });
      
    } catch(e){
      console.error('Erreur chargement situation:', e);
    }
  }
}
