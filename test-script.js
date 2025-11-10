// 12 Dimensions d'intérêts professionnels (Questionnaire adulte)
const interestDimensions = [
  {
    id: 1,
    code: "MO",
    name: "Méthode & organisation",
    questions: [
      { q: "On vous propose de rejoindre une nouvelle équipe, vous choisissez :", a: "Organiser le planning et structurer les tâches" },
      { q: "Pour progresser, vous choisissez d'apprendre à :", a: "Mieux planifier et suivre l'avancement des projets" },
      { q: "On vous confie une mission, vous choisissez de :", a: "Mettre en place des procédures claires" },
      { q: "Vous souhaitez développer vos compétences en :", a: "Organisation et gestion du temps" }
    ]
  },
  {
    id: 2,
    code: "PT",
    name: "Pratique & technique",
    questions: [
      { q: "On vous propose de rejoindre une nouvelle équipe, vous choisissez :", a: "Utiliser des outils techniques et équipements" },
      { q: "Pour progresser, vous choisissez d'apprendre à :", a: "Maîtriser de nouvelles techniques manuelles" },
      { q: "On vous confie une mission, vous choisissez de :", a: "Réparer, assembler ou fabriquer quelque chose" },
      { q: "Vous souhaitez développer vos compétences en :", a: "Savoir-faire technique et pratique" }
    ]
  },
  {
    id: 3,
    code: "AL",
    name: "Analyse & logique",
    questions: [
      { q: "On vous propose de rejoindre une nouvelle équipe, vous choisissez :", a: "Analyser les données et faire des bilans" },
      { q: "Pour progresser, vous choisissez d'apprendre à :", a: "Résoudre des problèmes complexes par l'analyse" },
      { q: "On vous confie une mission, vous choisissez de :", a: "Examiner la situation et établir un diagnostic" },
      { q: "Vous souhaitez développer vos compétences en :", a: "Raisonnement logique et synthèse" }
    ]
  },
  {
    id: 4,
    code: "SI",
    name: "Sciences & innovation",
    questions: [
      { q: "On vous propose de rejoindre une nouvelle équipe, vous choisissez :", a: "Tester de nouvelles méthodes et expérimenter" },
      { q: "Pour progresser, vous choisissez d'apprendre à :", a: "Comprendre les dernières avancées scientifiques" },
      { q: "On vous confie une mission, vous choisissez de :", a: "Explorer des solutions innovantes" },
      { q: "Vous souhaitez développer vos compétences en :", a: "Recherche et découverte de nouvelles connaissances" }
    ]
  },
  {
    id: 5,
    code: "CS",
    name: "Conception & structuration d'idées",
    questions: [
      { q: "Dans un projet créatif, vous préférez :", a: "Concevoir la structure et l'organisation générale" },
      { q: "Dans un nouveau projet, vous préférez :", a: "Définir le concept et l'architecture d'ensemble" },
      { q: "Dans un projet culturel, vous préférez :", a: "Structurer le contenu et le scénario" },
      { q: "Dans une équipe créative, vous aimez :", a: "Concevoir la stratégie globale" }
    ]
  },
  {
    id: 6,
    code: "EC",
    name: "Expression & création",
    questions: [
      { q: "Dans un projet créatif, vous préférez :", a: "Créer les éléments visuels ou artistiques" },
      { q: "Dans un nouveau projet, vous préférez :", a: "Créer l'identité visuelle et l'ambiance" },
      { q: "Dans un projet culturel, vous préférez :", a: "Créer l'univers sonore ou visuel" },
      { q: "Dans une équipe créative, vous aimez :", a: "Produire les créations artistiques" }
    ]
  },
  {
    id: 7,
    code: "MP",
    name: "Mouvement & plein air",
    questions: [
      { q: "Au travail, vous préférez :", a: "Être en mouvement et travailler dehors" },
      { q: "Votre journée idéale inclut :", a: "Bouger, vous déplacer et être en extérieur" },
      { q: "Dans une association, vous choisissez de :", a: "Partir en mission dans des lieux variés" },
      { q: "Vous êtes attiré(e) par des activités de :", a: "Animation sportive en plein air" }
    ]
  },
  {
    id: 8,
    code: "CP",
    name: "Coordination & pilotage",
    questions: [
      { q: "Dans un projet créatif, vous préférez :", a: "Coordonner l'équipe et répartir les rôles" },
      { q: "Dans un nouveau projet, vous préférez :", a: "Superviser l'avancement et gérer les priorités" },
      { q: "Dans un projet culturel, vous préférez :", a: "Organiser la production et les équipes" },
      { q: "Dans une équipe créative, vous aimez :", a: "Piloter le projet et coordonner" }
    ]
  },
  {
    id: 9,
    code: "IP",
    name: "Initiative & projet",
    questions: [
      { q: "Dans un projet créatif, vous préférez :", a: "Proposer des idées nouvelles et lancer des pistes" },
      { q: "Dans un nouveau projet, vous préférez :", a: "Lancer de nouvelles initiatives sans attendre" },
      { q: "Dans un projet culturel, vous préférez :", a: "Inventer de nouveaux formats d'expression" },
      { q: "Dans une équipe créative, vous aimez :", a: "Proposer des approches originales" }
    ]
  },
  {
    id: 10,
    code: "AT",
    name: "Action & efficacité terrain",
    questions: [
      { q: "Au travail, vous préférez :", a: "Agir rapidement pour régler des situations urgentes" },
      { q: "Votre journée idéale inclut :", a: "Intervenir sur le terrain avec des résultats directs" },
      { q: "Dans une association, vous choisissez de :", a: "Répondre aux urgences et situations critiques" },
      { q: "Vous êtes attiré(e) par des activités de :", a: "Intervention rapide en situation d'urgence" }
    ]
  },
  {
    id: 11,
    code: "AA",
    name: "Aide & Accompagnement",
    questions: [
      { q: "Au travail, vous préférez :", a: "Écouter et aider les personnes en difficulté" },
      { q: "Votre journée idéale inclut :", a: "Accompagner des personnes individuellement" },
      { q: "Dans une association, vous choisissez de :", a: "Soutenir et conseiller les bénéficiaires" },
      { q: "Vous êtes attiré(e) par des activités de :", a: "Écoute et médiation avec les personnes" }
    ]
  },
  {
    id: 12,
    code: "RI",
    name: "Relationnel & influence",
    questions: [
      { q: "Au travail, vous préférez :", a: "Convaincre et faire changer d'avis" },
      { q: "Votre journée idéale inclut :", a: "Négocier et défendre des positions" },
      { q: "Dans une association, vous choisissez de :", a: "Représenter l'association et mobiliser des partenaires" },
      { q: "Vous êtes attiré(e) par des activités de :", a: "Persuasion et influence dans les discussions" }
    ]
  }
];

// 21 Univers avec leurs matrices de corrélation (coefficients 0, 1, 3, 6)
// Ordre: MO, PT, AL, SI, CS, EC, MP, CP, IP, AT, AA, RI
const professionalUniverses = [
  { id: 1, name: "Agriculture, nature & animaux", icon: "🌾", 
    weights: [1, 6, 3, 1, 0, 0, 6, 0, 1, 3, 1, 0] },
  { id: 2, name: "Arts, design & création", icon: "🎨", 
    weights: [0, 3, 1, 0, 6, 6, 0, 1, 1, 1, 0, 1] },
  { id: 3, name: "Commerce, marketing & vente", icon: "🛒", 
    weights: [0, 0, 1, 0, 1, 3, 0, 1, 1, 1, 3, 6] },
  { id: 4, name: "Communication, médias & culture", icon: "📺", 
    weights: [1, 0, 1, 0, 3, 6, 0, 3, 1, 0, 1, 6] },
  { id: 5, name: "Construction, BTP & habitat", icon: "🏗️", 
    weights: [3, 6, 1, 0, 1, 0, 3, 6, 1, 3, 0, 1] },
  { id: 6, name: "Droit, administration & politique publique", icon: "⚖️", 
    weights: [6, 0, 6, 0, 0, 1, 0, 0, 1, 0, 1, 3] },
  { id: 7, name: "Éducation, formation & apprentissage", icon: "🎓", 
    weights: [3, 1, 1, 1, 1, 3, 0, 1, 1, 0, 6, 6] },
  { id: 8, name: "Environnement, climat & énergies", icon: "🌍", 
    weights: [1, 3, 6, 6, 1, 0, 1, 1, 3, 1, 0, 1] },
  { id: 9, name: "Gestion, finance & comptabilité", icon: "💰", 
    weights: [6, 0, 6, 0, 0, 0, 0, 1, 0, 1, 0, 3] },
  { id: 10, name: "Hôtellerie, restauration & tourisme", icon: "🏨", 
    weights: [3, 3, 0, 0, 0, 1, 6, 1, 0, 3, 6, 3] },
  { id: 11, name: "Immobilier & patrimoine", icon: "🏠", 
    weights: [1, 3, 6, 0, 1, 1, 0, 1, 1, 1, 1, 6] },
  { id: 12, name: "Industrie, fabrication & production", icon: "⚙️", 
    weights: [6, 6, 1, 1, 0, 0, 3, 3, 1, 3, 0, 1] },
  { id: 13, name: "Logistique, transport & mobilité", icon: "🚚", 
    weights: [6, 3, 1, 0, 0, 0, 3, 6, 1, 3, 1, 1] },
  { id: 14, name: "Management, entrepreneuriat & stratégie", icon: "📊", 
    weights: [3, 0, 3, 1, 1, 1, 0, 6, 6, 1, 3, 3] },
  { id: 15, name: "Numérique, informatique & data", icon: "💻", 
    weights: [1, 3, 6, 6, 1, 1, 0, 1, 3, 3, 0, 1] },
  { id: 16, name: "Santé, bien-être & médical", icon: "⚕️", 
    weights: [1, 6, 3, 1, 0, 1, 3, 1, 1, 3, 6, 3] },
  { id: 17, name: "Sciences, recherche & innovation", icon: "🔬", 
    weights: [3, 1, 6, 6, 3, 1, 0, 1, 3, 1, 0, 1] },
  { id: 18, name: "Sécurité, défense & urgence", icon: "🚨", 
    weights: [3, 3, 1, 0, 0, 0, 6, 6, 1, 3, 3, 1] },
  { id: 19, name: "Social, aide & solidarité", icon: "❤️", 
    weights: [1, 1, 1, 0, 0, 3, 0, 3, 1, 1, 6, 6] },
  { id: 20, name: "Sport, loisirs & vie active", icon: "⚽", 
    weights: [1, 3, 0, 0, 1, 3, 6, 3, 1, 1, 3, 6] },
  { id: 21, name: "Technologies émergentes & futur du travail", icon: "🚀", 
    weights: [1, 1, 3, 6, 3, 1, 0, 1, 6, 1, 1, 3] }
];

// Export pour utilisation dans d'autres fichiers si nécessaire
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { interestDimensions, professionalUniverses };
}
