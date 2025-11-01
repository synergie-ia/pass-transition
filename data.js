// Liste des 14 intérêts (ordre fixe)
const INTERETS = [
  "Bouger, être actif physiquement",
  "Travailler avec tes mains",
  "Enquêter, observer, comprendre",
  "Explorer les sciences ou les technologies",
  "Utiliser des chiffres, calculer, raisonner logiquement",
  "Créer artistiquement, imaginer",
  "Concevoir, résoudre des problèmes, innover",
  "Aider, accompagner, prendre soin",
  "Enseigner, transmettre, expliquer",
  "Communiquer, écrire, t'exprimer",
  "Convaincre, vendre, négocier",
  "Organiser, décider, diriger",
  "Travailler en autonomie",
  "Suivre un cadre structuré"
];

// Matrice mère IA360 (valeurs 10/6/4/1) triée alphabétiquement par univers
const MATRICE_IA360 = {
  "🌾 Agriculture, Nature & Animaux": [10,10,6,10,4,1,6,10,4,6,1,6,10,4],
  "🎨 Arts, Design & Création": [4,10,6,1,1,10,10,4,6,10,6,6,10,4],
  "🛒 Commerce, Marketing & Vente": [4,4,6,1,10,6,6,1,4,10,10,10,6,6],
  "🎙️ Communication, Médias & Culture": [4,4,10,1,6,10,10,1,6,10,6,6,10,4],
  "🏗️ Construction, BTP & Habitat": [10,10,6,10,6,4,6,1,4,4,4,10,10,6],
  "⚖️ Droit, Administration & Politique Publique": [1,1,10,4,10,4,4,6,6,10,6,10,6,10],
  "🎓 Éducation, Formation & Apprentissage": [4,1,10,4,4,6,6,10,10,10,4,6,6,10],
  "🌍 Environnement, Climat & Énergies": [6,6,10,10,6,1,10,4,4,6,1,10,10,4],
  "💶 Gestion, Finance & Comptabilité": [1,1,10,4,10,1,6,1,4,6,6,10,6,10],
  "🍽️ Hôtellerie, Restauration & Tourisme": [10,10,4,4,6,6,4,6,4,10,10,10,6,6],
  "🏠 Immobilier & Patrimoine": [6,6,6,4,10,1,4,1,4,10,10,10,6,10],
  "⚙️ Industrie, Fabrication & Production": [4,10,10,10,6,1,10,1,4,6,4,6,6,10],
  "🚚 Logistique, Transport & Mobilité": [10,6,4,4,10,1,6,4,4,6,1,10,10,10],
  "💼 Management, Entrepreneuriat & Stratégie": [1,1,6,4,6,6,10,6,4,10,10,10,10,6],
  "💻 Numérique, Informatique & Data": [1,1,10,10,10,6,10,1,4,6,4,6,10,4],
  "⚕️ Santé, Bien-être & Médical": [6,10,10,10,6,1,4,10,4,6,1,6,4,10],
  "🔬 Sciences, Recherche & Innovation": [4,4,10,10,10,6,10,1,6,6,1,6,10,6],
  "🛡️ Sécurité, Défense & Urgence": [10,6,10,6,4,1,4,10,4,6,1,10,6,10],
  "❤️ Social, Aide & Solidarité": [6,6,10,4,4,1,4,10,10,10,1,6,10,6],
  "🏋️ Sport, Loisirs & Vie Active": [10,6,4,4,1,1,4,10,6,10,6,10,10,6],
  "🚀 Technologies Émergentes & Futur du Travail": [4,4,10,10,10,6,10,1,6,6,1,6,10,6]
};

// Calcul de compatibilité (profil 0-10 → %)
function calculerCompatibilite(profil){
  const out = {};
  for(const [univers, poids] of Object.entries(MATRICE_IA360)){
    let somme = 0, total = 0;
    for(let i=0;i<INTERETS.length;i++){
      somme += profil[i] * poids[i];
      total += poids[i];
    }
    out[univers] = Math.round((somme / (10*total)) * 1000) / 10; // % à 0.1
  }
  return Object.entries(out).sort((a,b)=>b[1]-a[1]);
}
