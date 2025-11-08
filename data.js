// Les 12 int�r�ts - VERSION V3
const interests = [
    {
        id: 1, 
        icon: '??',
        title: 'M�thode & organisation', 
        description: "Structurer une activit� dans le temps : planifier, ordonner les t�ches, suivre des proc�dures, assurer une ex�cution coh�rente et stable"
    },
    {
        id: 2,
        icon: '??',
        title: 'Pratique & technique', 
        description: "Utiliser ses mains, des outils ou des machines : ajuster, manipuler, assembler, entretenir, r�p�ter des gestes ma�tris�s"
    },
    {
        id: 3,
        icon: '??',
        title: 'Analyse & logique', 
        description: "Observer et diagnostiquer des situations : comparer, interpr�ter des informations, rep�rer des anomalies, tirer des conclusions structur�es"
    },
    {
        id: 4,
        icon: '??',
        title: 'Sciences & innovation', 
        description: "Chercher, tester, mod�liser, exp�rimenter : comprendre des syst�mes complexes et concevoir des solutions nouvelles ou am�lior�es"
    },
    {
        id: 5,
        icon: '??',
        title: 'Conception & structuration d\'id�es', 
        description: "Imaginer, organiser ou architecturer une id�e, un projet ou une forme avant r�alisation : vision, cadrage, structuration"
    },
    {
        id: 6,
        icon: '??',
        title: 'Expression & cr�ation', 
        description: "Produire une forme personnelle (visuelle, sonore, corporelle ou narrative) exprimant une intention, une sensibilit� ou une identit�"
    },
    {
        id: 7,
        icon: '??',
        title: 'Mouvement & plein air', 
        description: "Travailler en mouvement, debout, en d�placement ou en ext�rieur, avec une implication corporelle visible"
    },
    {
        id: 8,
        icon: '??',
        title: 'Coordination & pilotage', 
        description: "Organiser l'action collective : r�partir les r�les, superviser, synchroniser les �tapes, assurer le lien entre acteurs"
    },
    {
        id: 9,
        icon: '??',
        title: 'Initiative & projet', 
        description: "Proposer, lancer ou transformer une id�e, un service ou une organisation ; �tre moteur dans le changement"
    },
    {
        id: 10,
        icon: '??',
        title: 'Attention & transmission', 
        description: "Accompagner, former, prendre soin ou transmettre : attention aux besoins d'autrui, p�dagogie, �coute active"
    },
    {
        id: 11,
        icon: '??',
        title: 'Travail de proximit�', 
        description: "�tre en contact direct, physique ou relationnel rapproch� avec des personnes ou des groupes dans une dimension de service ou d'accompagnement"
    },
    {
        id: 12,
        icon: '??',
        title: 'Relationnel & influence', 
        description: "Convaincre, n�gocier, cr�er du lien, influencer des d�cisions ou des comportements par la communication et l'interaction sociale"
    }
];

// Les 21 univers professionnels avec la MATRICE V3
// Ordre des poids: [MO, PT, AL, SI, CS, EC, MP, CP, IP, AT, TP, RI]
// Coefficients: 6 (Essentiel) / 3 (Important) / 1 (Utile) / 0 (Non d�terminant)
const universes = [
    {
        id: 1,
        icon: '??',
        name: 'Agriculture, Nature & Animaux', 
        weights: [0, 6, 3, 0, 0, 0, 6, 0, 0, 0, 1, 0]
    },
    {
        id: 2,
        icon: '??',
        name: 'Arts, Design & Cr�ation', 
        weights: [0, 3, 0, 0, 6, 6, 0, 0, 0, 0, 0, 1]
    },
    {
        id: 3,
        icon: '??',
        name: 'Commerce, Marketing & Vente', 
        weights: [0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 6, 6]
    },
    {
        id: 4,
        icon: '??',
        name: 'Communication, M�dias & Culture', 
        weights: [0, 0, 0, 0, 3, 6, 0, 0, 0, 0, 1, 6]
    },
    {
        id: 5,
        icon: '???',
        name: 'Construction, BTP & Habitat', 
        weights: [1, 6, 0, 0, 0, 0, 6, 3, 0, 0, 0, 0]
    },
    {
        id: 6,
        icon: '??',
        name: 'Droit, Administration & Politique Publique', 
        weights: [6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 3, 1]
    },
    {
        id: 7,
        icon: '??',
        name: '�ducation, Formation & Apprentissage', 
        weights: [0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 6, 3]
    },
    {
        id: 8,
        icon: '??',
        name: 'Environnement, Climat & �nergies', 
        weights: [0, 0, 6, 6, 1, 0, 3, 0, 0, 0, 0, 0]
    },
    {
        id: 9,
        icon: '??',
        name: 'Gestion, Finance & Comptabilit�', 
        weights: [6, 0, 6, 0, 0, 0, 0, 3, 0, 0, 0, 1]
    },
    {
        id: 10,
        icon: '??',
        name: 'H�tellerie, Restauration & Tourisme', 
        weights: [0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 6, 6]
    },
    {
        id: 11,
        icon: '??',
        name: 'Immobilier & Patrimoine', 
        weights: [1, 0, 3, 0, 0, 0, 0, 6, 0, 0, 0, 6]
    },
    {
        id: 12,
        icon: '??',
        name: 'Industrie, Fabrication & Production', 
        weights: [6, 6, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0]
    },
    {
        id: 13,
        icon: '??',
        name: 'Logistique, Transport & Mobilit�', 
        weights: [6, 3, 0, 0, 0, 0, 0, 6, 0, 1, 0, 0]
    },
    {
        id: 14,
        icon: '??',
        name: 'Management, Entrepreneuriat & Strat�gie', 
        weights: [0, 0, 3, 0, 0, 0, 0, 6, 6, 0, 0, 1]
    },
    {
        id: 15,
        icon: '??',
        name: 'Num�rique, Informatique & Data', 
        weights: [0, 1, 6, 3, 6, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        id: 16,
        icon: '??',
        name: 'Sant�, Bien-�tre & M�dical', 
        weights: [0, 0, 3, 0, 0, 0, 0, 0, 0, 6, 6, 1]
    },
    {
        id: 17,
        icon: '??',
        name: 'Sciences, Recherche & Innovation', 
        weights: [1, 0, 6, 6, 3, 0, 0, 0, 0, 0, 0, 0]
    },
    {
        id: 18,
        icon: '??',
        name: 'S�curit�, D�fense & Urgence', 
        weights: [1, 0, 0, 0, 0, 0, 6, 3, 0, 6, 0, 0]
    },
    {
        id: 19,
        icon: '??',
        name: 'Social, Aide & Solidarit�', 
        weights: [0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 6, 6]
    },
    {
        id: 20,
        icon: '?',
        name: 'Sport, Loisirs & Vie Active', 
        weights: [0, 0, 0, 0, 0, 3, 6, 0, 0, 0, 6, 1]
    },
    {
        id: 21,
        icon: '??',
        name: 'Technologies �mergentes & Futur du travail', 
        weights: [0, 0, 1, 6, 6, 0, 0, 0, 3, 0, 0, 0]
    }
];
