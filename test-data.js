// ==========================================================
// test-data.js — Données Reconversion 360 IA (Questions + Intérêts + Univers)
// ==========================================================

// 12 Dimensions d'intérêts (l'ordre DOIT correspondre aux weights des univers)
window.interests = [
  { id:1,  code:"MO", name:"Méthode & organisation",             title:"Méthode & organisation",             description:"Quand vous travaillez sur quelque chose d'important" },
  { id:2,  code:"PT", name:"Pratique & technique",                title:"Pratique & technique",               description:"Face à un problème concret" },
  { id:3,  code:"AL", name:"Analyse & logique",                   title:"Analyse & logique",                  description:"Quand un problème se présente" },
  { id:4,  code:"SI", name:"Sciences & innovation",               title:"Sciences & innovation",              description:"Face à l'inconnu ou à un défi technique" },
  { id:5,  code:"CS", name:"Conception & structuration d'idées",  title:"Conception & structuration d'idées", description:"Avant de passer à l'action" },
  { id:6,  code:"EC", name:"Expression & création",               title:"Expression & création",              description:"Dans vos productions (travaux, projets, créations)" },
  { id:7,  code:"MP", name:"Mouvement & plein air",               title:"Mouvement & plein air",              description:"Dans votre quotidien" },
  { id:8,  code:"CP", name:"Coordination & pilotage",             title:"Coordination & pilotage",            description:"Dans une dynamique de groupe" },
  { id:9,  code:"IP", name:"Initiative & projet",                 title:"Initiative & projet",                description:"Face à une situation établie" },
  { id:10, code:"AT", name:"Action & efficacité terrain",         title:"Action & efficacité terrain",        description:"Au travail, vous préférez" },
  { id:11, code:"AA", name:"Aide & Accompagnement",               title:"Aide & Accompagnement",              description:"Dans vos interactions avec les autres" },
  { id:12, code:"RI", name:"Relation & influence",                title:"Relation & influence",               description:"Dans vos échanges avec les autres" }
];

// 21 Univers avec matrices (ordre des poids = MO, PT, AL, SI, CS, EC, MP, CP, IP, AT, AA, RI)
window.universes = [
  { id: 1,  name:"Agriculture, nature & animaux", icon:"🌾", weights:[1,6,3,1,0,0,6,0,1,3,1,0] },
  { id: 2,  name:"Arts, design & création",       icon:"🎨", weights:[0,3,1,0,6,6,0,1,1,1,0,1] },
  { id: 3,  name:"Commerce, marketing & vente",   icon:"🛒", weights:[0,0,1,0,1,3,0,1,1,1,3,6] },
  { id: 4,  name:"Communication, médias & culture", icon:"📺", weights:[1,0,1,0,3,6,0,3,1,0,1,6] },
  { id: 5,  name:"Construction, BTP & habitat",   icon:"🏗️", weights:[3,6,1,0,1,0,3,6,1,3,0,1] },
  { id: 6,  name:"Droit, administration & politique publique", icon:"⚖️", weights:[6,0,6,0,0,1,0,0,1,0,1,3] },
  { id: 7,  name:"Éducation, formation & apprentissage", icon:"🎓", weights:[3,1,1,1,1,3,0,1,1,0,6,6] },
  { id: 8,  name:"Environnement, climat & énergies", icon:"🌍", weights:[1,3,6,6,1,0,1,1,3,1,0,1] },
  { id: 9,  name:"Gestion, finance & comptabilité", icon:"💰", weights:[6,0,6,0,0,0,0,1,0,1,0,3] },
  { id:10,  name:"Hôtellerie, restauration & tourisme", icon:"🏨", weights:[3,3,0,0,0,1,6,1,0,3,6,3] },
  { id:11,  name:"Immobilier & patrimoine",        icon:"🏠", weights:[1,3,6,0,1,1,0,1,1,1,1,6] },
  { id:12,  name:"Industrie, fabrication & production", icon:"⚙️", weights:[6,6,1,1,0,0,3,3,1,3,0,1] },
  { id:13,  name:"Logistique, transport & mobilité", icon:"🚚", weights:[6,3,1,0,0,0,3,6,1,3,1,1] },
  { id:14,  name:"Management, entrepreneuriat & stratégie", icon:"📊", weights:[3,0,3,1,1,1,0,6,6,1,3,3] },
  { id:15,  name:"Numérique, informatique & data", icon:"💻", weights:[1,3,6,6,1,1,0,1,3,3,0,1] },
  { id:16,  name:"Santé, bien-être & médical",     icon:"⚕️", weights:[1,6,3,1,0,1,3,1,1,3,6,3] },
  { id:17,  name:"Sciences, recherche & innovation", icon:"🔬", weights:[3,1,6,6,3,1,0,1,3,1,0,1] },
  { id:18,  name:"Sécurité, défense & urgence",    icon:"🚨", weights:[3,3,1,0,0,0,6,6,1,3,3,1] },
  { id:19,  name:"Social, aide & solidarité",      icon:"❤️", weights:[1,1,1,0,0,3,0,3,1,1,6,6] },
  { id:20,  name:"Sport, loisirs & vie active",    icon:"⚽", weights:[1,3,0,0,1,3,6,3,1,1,3,6] },
  { id:21,  name:"Technologies émergentes & futur du travail", icon:"🚀", weights:[1,1,3,6,3,1,0,1,6,1,1,3] }
];

// Questionnaire 12 questions (A/B/C/D → code intérêt)
window.questions = [
  {
    title: "Question 1",
    text: "On vous propose de rejoindre une nouvelle équipe, vous choisissez :",
    choices: [
      { key:"A", text:"Organiser le planning et structurer les tâches", code:"MO" },
      { key:"B", text:"Utiliser des outils techniques et équipements",   code:"PT" },
      { key:"C", text:"Analyser les données et faire des bilans",        code:"AL" },
      { key:"D", text:"Tester de nouvelles méthodes et expérimenter",    code:"SI" }
    ]
  },
  {
    title: "Question 2",
    text: "Dans un projet créatif, vous préférez :",
    choices: [
      { key:"A", text:"Concevoir la structure et l’organisation générale", code:"CS" },
      { key:"B", text:"Créer les éléments visuels ou artistiques",         code:"EC" },
      { key:"C", text:"Coordonner l’équipe et répartir les rôles",         code:"CP" },
      { key:"D", text:"Proposer des idées nouvelles et lancer des pistes", code:"IP" }
    ]
  },
  {
    title: "Question 3",
    text: "Au travail, vous préférez :",
    choices: [
      { key:"A", text:"Être en mouvement et travailler dehors",        code:"MP" },
      { key:"B", text:"Agir rapidement pour régler des situations urgentes", code:"AT" },
      { key:"C", text:"Écouter et aider les personnes en difficulté",  code:"AA" },
      { key:"D", text:"Convaincre et faire changer d’avis",            code:"RI" }
    ]
  },
  {
    title: "Question 4",
    text: "Pour progresser, vous choisissez d’apprendre à :",
    choices: [
      { key:"A", text:"Mieux planifier et suivre l’avancement des projets", code:"MO" },
      { key:"B", text:"Maîtriser de nouvelles techniques manuelles",       code:"PT" },
      { key:"C", text:"Résoudre des problèmes complexes par l’analyse",    code:"AL" },
      { key:"D", text:"Comprendre les dernières avancées scientifiques",   code:"SI" }
    ]
  },
  {
    title: "Question 5",
    text: "Dans un nouveau projet, vous préférez :",
    choices: [
      { key:"A", text:"Définir le concept et l’architecture d’ensemble", code:"CS" },
      { key:"B", text:"Créer l’identité visuelle et l’ambiance",         code:"EC" },
      { key:"C", text:"Superviser l’avancement et gérer les priorités",  code:"CP" },
      { key:"D", text:"Lancer de nouvelles initiatives sans attendre",   code:"IP" }
    ]
  },
  {
    title: "Question 6",
    text: "Votre journée idéale inclut :",
    choices: [
      { key:"A", text:"Bouger, vous déplacer et être en extérieur",      code:"MP" },
      { key:"B", text:"Intervenir sur le terrain avec des résultats directs", code:"AT" },
      { key:"C", text:"Accompagner des personnes individuellement",      code:"AA" },
      { key:"D", text:"Négocier et défendre des positions",              code:"RI" }
    ]
  },
  {
    title: "Question 7",
    text: "On vous confie une mission, vous choisissez de :",
    choices: [
      { key:"A", text:"Mettre en place des procédures claires", code:"MO" },
      { key:"B", text:"Réparer, assembler ou fabriquer quelque chose", code:"PT" },
      { key:"C", text:"Examiner la situation et établir un diagnostic", code:"AL" },
      { key:"D", text:"Explorer des solutions innovantes", code:"SI" }
    ]
  },
  {
    title: "Question 8",
    text: "Dans un projet culturel, vous préférez :",
    choices: [
      { key:"A", text:"Structurer le contenu et le scénario", code:"CS" },
      { key:"B", text:"Créer l’univers sonore ou visuel", code:"EC" },
      { key:"C", text:"Organiser la production et les équipes", code:"CP" },
      { key:"D", text:"Inventer de nouveaux formats d’expression", code:"IP" }
    ]
  },
  {
    title: "Question 9",
    text: "Dans une association, vous choisissez de :",
    choices: [
      { key:"A", text:"Partir en mission dans des lieux variés", code:"MP" },
      { key:"B", text:"Répondre aux urgences et situations critiques", code:"AT" },
      { key:"C", text:"Soutenir et conseiller les bénéficiaires", code:"AA" },
      { key:"D", text:"Représenter l’association et mobiliser des partenaires", code:"RI" }
    ]
  },
  {
    title: "Question 10",
    text: "Vous souhaitez développer vos compétences en :",
    choices: [
      { key:"A", text:"Organisation et gestion du temps", code:"MO" },
      { key:"B", text:"Savoir-faire technique et pratique", code:"PT" },
      { key:"C", text:"Raisonnement logique et synthèse", code:"AL" },
      { key:"D", text:"Recherche et découverte de nouvelles connaissances", code:"SI" }
    ]
  },
  {
    title: "Question 11",
    text: "Dans une équipe créative, vous aimez :",
    choices: [
      { key:"A", text:"Concevoir la stratégie globale", code:"CS" },
      { key:"B", text:"Produire les créations artistiques", code:"EC" },
      { key:"C", text:"Piloter le projet et coordonner", code:"CP" },
      { key:"D", text:"Proposer des approches originales", code:"IP" }
    ]
  },
  {
    title: "Question 12",
    text: "Vous êtes attiré(e) par des activités de :",
    choices: [
      { key:"A", text:"Animation sportive en plein air", code:"MP" },
      { key:"B", text:"Intervention rapide en situation d’urgence", code:"AT" },
      { key:"C", text:"Écoute et médiation avec les personnes", code:"AA" },
      { key:"D", text:"Persuasion et influence dans les discussions", code:"RI" }
    ]
  }
];

// Clé de stockage local
window.R360_ABCD_KEY = 'reconversion360_abcd';
