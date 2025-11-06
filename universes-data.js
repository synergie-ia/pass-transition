// Donn�es compl�tes des 21 univers avec leurs sous-univers
const universesData = [
    {
        id: 1,
        icon: '??',
        name: 'Agriculture, nature & animaux',
        description: 'Cultivez, �levez, prot�gez la nature et travaillez avec les animaux dans des m�tiers en plein air.',
        subUniverses: [
            { icon: '??', name: 'Agroalimentaire industriel', description: 'Transformation et production � grande �chelle des produits agricoles.' },
            { icon: '??', name: 'Production biologique & circuits courts', description: 'Cultures et �levages respectueux de l\'environnement, vente locale.' },
            { icon: '??', name: 'Agronomie & recherche appliqu�e', description: '�tudes scientifiques pour am�liorer les rendements et la durabilit�.' },
            { icon: '??', name: 'Cultures c�r�ali�res & grandes exploitations', description: 'Gestion de grandes surfaces agricoles m�canis�es.' },
            { icon: '??', name: 'Viticulture & �nologie', description: 'Culture de la vigne et production du vin.' },
            { icon: '??', name: 'Mara�chage & production mara�ch�re', description: 'Culture de l�gumes et fruits de saison.' },
            { icon: '??', name: 'Horticulture & p�pini�re', description: 'Production de plantes ornementales et d\'arbustes.' },
            { icon: '??', name: 'Paysagisme & am�nagement v�g�tal', description: 'Cr�ation et entretien d\'espaces verts.' },
            { icon: '??', name: 'For�t & sylviculture durable', description: 'Gestion et exploitation raisonn�e des for�ts.' },
            { icon: '??', name: '�levage bovin / ovin / porcin / avicole', description: 'Production animale pour la viande, le lait ou les �ufs.' },
            { icon: '??', name: 'Aquaculture & p�che durable', description: '�levage de poissons et gestion responsable des ressources marines.' },
            { icon: '??', name: 'Apiculture & insectes utiles', description: '�levage d\'abeilles et valorisation des insectes pollinisateurs.' },
            { icon: '??', name: 'Gestion de l\'eau, irrigation & bassins versants', description: 'Ma�trise des ressources hydriques pour l\'agriculture.' },
            { icon: '??', name: 'Valorisation & transformation des produits agricoles', description: 'Fabrication de produits finis � partir des mati�res premi�res.' }
        ]
    },
    {
        id: 2,
        icon: '??',
        name: 'Arts, design & cr�ation',
        description: 'Cr�ez, dessinez, designez et exprimez votre cr�ativit� dans l\'art visuel, graphique ou appliqu�.',
        subUniverses: [
            { icon: '???', name: 'Arts visuels & peinture', description: 'Cr�ation artistique sur support visuel.' },
            { icon: '??', name: 'Sculpture & installations', description: 'Conception d\'�uvres tridimensionnelles.' },
            { icon: '??', name: 'Design graphique & communication visuelle', description: 'Cr�ation d\'images et supports de communication.' },
            { icon: '??', name: 'Design produit & industriel', description: 'Conception d\'objets et produits manufactur�s.' },
            { icon: '??', name: 'Architecture int�rieure & d�coration', description: 'Am�nagement esth�tique et fonctionnel des espaces.' },
            { icon: '??', name: 'Photographie & image num�rique', description: 'Prise de vue, retouche et diffusion d\'images.' },
            { icon: '??', name: 'Cin�ma, audiovisuel & animation', description: 'Production de films et contenus visuels.' },
            { icon: '??', name: 'Mode, stylisme & textile', description: 'Conception de v�tements et accessoires.' },
            { icon: '??', name: 'Artisanat d\'art traditionnel', description: 'Cr�ation manuelle de pi�ces uniques.' },
            { icon: '??', name: 'Sc�nographie & design d\'espace', description: 'Mise en sc�ne d\'expositions ou de spectacles.' },
            { icon: '??', name: 'Illustration & bande dessin�e', description: 'Narration visuelle et cr�ation d\'univers graphiques.' },
            { icon: '???', name: 'Patrimoine, mus�ographie & restauration d\'art', description: 'Conservation et mise en valeur d\'�uvres anciennes.' },
            { icon: '??', name: 'Spectacle vivant & arts de la sc�ne', description: 'Interpr�tation et production th��trale ou musicale.' },
            { icon: '??', name: 'M�tiers du luxe & savoir-faire d\'exception', description: 'Cr�ation haut de gamme m�lant tradition et innovation.' },
            { icon: '???', name: 'R�gie & technique du spectacle', description: 'Gestion des aspects techniques d\'�v�nements artistiques.' }
        ]
    },
    {
        id: 3,
        icon: '??',
        name: 'Commerce, marketing & vente',
        description: 'Vendez, n�gociez, d�veloppez des strat�gies commerciales et fid�lisez les clients.',
        subUniverses: [
            { icon: '??', name: 'Commerce de d�tail & retail', description: 'Vente directe aux consommateurs.' },
            { icon: '??', name: 'E-commerce & marketplaces', description: 'Vente en ligne et gestion de plateformes num�riques.' },
            { icon: '??', name: 'Vente B2B & n�gociation commerciale', description: 'Relations commerciales entre entreprises.' },
            { icon: '??', name: 'Repr�sentation & prospection', description: 'D�veloppement de client�le sur le terrain.' },
            { icon: '???', name: 'Merchandising & mise en valeur produits', description: 'Optimisation de la pr�sentation des produits.' },
            { icon: '??', name: 'Marketing strat�gique', description: '�tude de march� et positionnement des offres.' },
            { icon: '??', name: 'Marketing digital & r�seaux sociaux', description: 'Promotion via les outils num�riques.' },
            { icon: '??', name: 'Communication commerciale & influence', description: 'Strat�gies de persuasion et fid�lisation.' },
            { icon: '??', name: 'Achats & approvisionnement', description: 'S�lection et n�gociation avec les fournisseurs.' },
            { icon: '??', name: 'Gestion de rayon & management de point de vente', description: 'Pilotage op�rationnel des �quipes et stocks.' },
            { icon: '??', name: 'Immobilier commercial', description: 'Vente et location d\'espaces professionnels.' },
            { icon: '??', name: 'Banque & assurance commerciale', description: 'Vente de produits financiers et d\'assurance.' },
            { icon: '??', name: 'Service client & relation apr�s-vente', description: 'Suivi et satisfaction des clients.' },
            { icon: '??', name: 'Commerce du luxe & client�le premium', description: 'Vente haut de gamme et exp�rience exclusive.' },
            { icon: '??', name: 'Vente en ligne & marketplaces sp�cialis�es', description: 'Plateformes cibl�es sur des niches de produits.' }
        ]
    },
    {
        id: 4,
        icon: '???',
        name: 'Communication, m�dias & culture',
        description: 'Informez, divertissez, communiquez � travers les m�dias, la culture et l\'�v�nementiel.',
        subUniverses: [
            { icon: '??', name: 'Journalisme & presse �crite', description: 'Recherche, r�daction et diffusion d\'informations v�rifi�es.' },
            { icon: '??', name: 'Audiovisuel & production radio/TV', description: 'R�alisation et diffusion d\'�missions ou reportages.' },
            { icon: '??', name: 'Relations publiques & �v�nementiel', description: 'Gestion de l\'image d\'une organisation et organisation d\'�v�nements.' },
            { icon: '??', name: 'Communication d\'entreprise', description: 'Promotion interne et externe d\'une marque ou institution.' },
            { icon: '???', name: 'Communication publique & politique', description: 'Information et influence dans le secteur public.' },
            { icon: '??', name: '�dition & correction', description: 'Relecture, mise en page et diffusion d\'ouvrages.' },
            { icon: '??', name: 'Cr�ation de contenus num�riques', description: 'Production de vid�os, posts, podcasts ou blogs.' },
            { icon: '??', name: 'Publicit� & strat�gie de marque', description: 'Cr�ation de campagnes pour valoriser des produits ou services.' },
            { icon: '??', name: 'Influence, r�seaux & storytelling', description: 'Construction d\'une image de marque par la narration et les m�dias sociaux.' },
            { icon: '??', name: 'Traduction & interpr�tation', description: 'Passage fid�le d\'un message d\'une langue � une autre.' },
            { icon: '??', name: 'M�diation culturelle & animation de projets', description: 'Transmission de la culture au grand public.' },
            { icon: '???', name: 'Podcasting & cr�ation audio', description: 'Production de formats audio ind�pendants.' }
        ]
    },
    {
        id: 5,
        icon: '???',
        name: 'Construction, BTP & habitat',
        description: 'Construisez, r�novez, am�nagez des b�timents et infrastructures pour fa�onner nos villes.',
        subUniverses: [
            { icon: '???', name: 'Architecture & conception', description: 'Cr�ation de b�timents et espaces de vie.' },
            { icon: '??', name: 'Gros �uvre & ma�onnerie', description: 'Construction des structures principales.' },
            { icon: '??', name: 'Second �uvre & finitions', description: 'Travaux de finition int�rieure et ext�rieure.' },
            { icon: '??', name: 'Menuiserie & charpente bois', description: 'Fabrication et pose d\'�l�ments en bois.' },
            { icon: '??', name: 'Plomberie, chauffage & climatisation', description: 'Installation et entretien des r�seaux techniques.' },
            { icon: '?', name: '�lectricit� & domotique', description: 'R�seaux �lectriques et automatismes du b�timent.' },
            { icon: '???', name: 'Travaux publics & voirie', description: 'Infrastructures routi�res, ponts, r�seaux.' },
            { icon: '??', name: 'G�nie civil & infrastructures', description: 'Conception et r�alisation d\'ouvrages complexes.' },
            { icon: '??', name: 'R�novation �nerg�tique & �co-b�timent', description: 'Travaux visant la performance �nerg�tique.' },
            { icon: '??', name: '�tudes techniques & dessin b�timent', description: 'Plans, mod�lisation et conception technique.' },
            { icon: '??', name: 'Coordination & conduite de chantier', description: 'Organisation et suivi des travaux.' },
            { icon: '??', name: 'Gestion immobili�re & copropri�t�s', description: 'Suivi administratif et technique des biens.' },
            { icon: '???', name: 'Am�nagement urbain & espaces publics', description: 'Planification et mise en valeur des villes.' }
        ]
    },
    {
        id: 6,
        icon: '??',
        name: 'Droit, administration & politique publique',
        description: 'D�fendez, r�gulez, administrez dans les domaines juridique et des services publics.',
        subUniverses: [
            { icon: '?????', name: 'Droit priv� & judiciaire', description: 'D�fense des droits des particuliers.' },
            { icon: '??', name: 'Droit des affaires & fiscalit�', description: 'Conseil juridique aux entreprises.' },
            { icon: '??', name: 'Droit social & du travail', description: 'Relations employeurs-salari�s et protection sociale.' },
            { icon: '???', name: 'Droit public & institutions', description: 'Encadrement des collectivit�s et politiques publiques.' },
            { icon: '??', name: 'Administration publique', description: 'Gestion courante des services de l\'�tat.' },
            { icon: '??', name: 'Ressources humaines & m�diation', description: 'Recrutement, dialogue social et accompagnement.' },
            { icon: '???', name: 'Gouvernance territoriale & collectivit�s locales', description: 'Gestion des politiques locales.' },
            { icon: '??', name: 'Diplomatie & relations internationales', description: 'Repr�sentation et n�gociation entre �tats.' },
            { icon: '??', name: 'Gestion des march�s publics', description: 'Commandes et appels d\'offres publics.' },
            { icon: '??', name: 'Intelligence juridique & conformit�', description: 'Veille r�glementaire et pr�vention des risques.' },
            { icon: '??', name: 'Notariat & professions r�glement�es', description: 'S�curisation des actes et transactions.' }
        ]
    },
    {
        id: 7,
        icon: '??',
        name: '�ducation, formation & apprentissage',
        description: 'Enseignez, formez, transmettez vos connaissances et accompagnez l\'apprentissage.',
        subUniverses: [
            { icon: '??', name: 'Enseignement primaire', description: 'Transmission des savoirs fondamentaux.' },
            { icon: '??', name: 'Enseignement secondaire', description: 'Encadrement des adolescents et pr�paration aux examens.' },
            { icon: '??', name: 'Enseignement sup�rieur', description: 'Formation et recherche � l\'universit� ou en �cole.' },
            { icon: '??', name: 'Formation professionnelle & continue', description: 'Apprentissage pour adultes et salari�s.' },
            { icon: '??', name: 'Orientation & accompagnement', description: 'Aide � la construction de parcours individuels.' },
            { icon: '??', name: 'Coaching & d�veloppement personnel', description: 'Accompagnement du changement et de la motivation.' },
            { icon: '??', name: 'Ing�nierie p�dagogique', description: 'Conception de programmes et supports de formation.' },
            { icon: '??', name: '�ducation sp�cialis�e & m�diation �ducative', description: 'Soutien aux publics fragiles.' },
            { icon: '??', name: 'Recherche en sciences de l\'�ducation', description: '�tudes sur les m�thodes d\'apprentissage.' },
            { icon: '??', name: 'Animation socioculturelle', description: 'Activit�s �ducatives et sociales collectives.' }
        ]
    },
    {
        id: 8,
        icon: '??',
        name: 'Environnement, climat & �nergies',
        description: 'Prot�gez la plan�te, d�veloppez les �nergies renouvelables et luttez contre le changement climatique.',
        subUniverses: [
            { icon: '??', name: 'Gestion des d�chets & recyclage', description: 'Valorisation des mati�res us�es.' },
            { icon: '??', name: 'Traitement de l\'eau & d�pollution', description: 'Purification et gestion des eaux us�es.' },
            { icon: '??', name: '�nergies renouvelables', description: 'Production d\'�nergie verte (solaire, �olien�).' },
            { icon: '?', name: 'Hydrog�ne & stockage d\'�nergie', description: 'D�veloppement des nouvelles fili�res �nerg�tiques.' },
            { icon: '??', name: '�nergie nucl�aire & s�ret�', description: 'Production d\'�lectricit� et s�curit� des installations.' },
            { icon: '???', name: 'G�nie climatique & efficacit� �nerg�tique', description: 'Optimisation de la consommation d\'�nergie.' },
            { icon: '??', name: 'Adaptation au changement climatique', description: 'Strat�gies pour limiter les impacts climatiques.' },
            { icon: '??', name: 'Bilan carbone & comptabilit� environnementale', description: 'Mesure et r�duction des �missions.' },
            { icon: '??', name: '�coconception & �conomie circulaire', description: 'Conception durable des produits.' },
            { icon: '???', name: 'Am�nagement durable des territoires', description: 'Urbanisme �coresponsable.' },
            { icon: '??', name: 'Ing�nierie environnementale', description: '�tudes techniques et solutions �cologiques.' },
            { icon: '??', name: 'Protection de la biodiversit� & conservation', description: 'Sauvegarde des �cosyst�mes.' },
            { icon: '??', name: 'Restauration �cologique & gestion des milieux naturels', description: 'R�habilitation d\'espaces d�grad�s.' },
            { icon: '??', name: 'Mobilit� durable & transports propres', description: 'Solutions de d�placement bas carbone.' },
            { icon: '??', name: 'Agriculture r�g�n�ratrice & sols vivants', description: 'Pratiques agricoles restauratrices.' },
            { icon: '??', name: 'Gestion des risques naturels & r�silience', description: 'Pr�vention et pr�paration face aux al�as.' }
        ]
    },
    {
        id: 9,
        icon: '??',
        name: 'Gestion, finance & comptabilit�',
        description: 'G�rez, analysez, optimisez les ressources financi�res et comptables des organisations.',
        subUniverses: [
            { icon: '??', name: 'Comptabilit� & fiscalit�', description: 'Suivi des comptes et d�clarations fiscales.' },
            { icon: '??', name: 'Audit & contr�le de gestion', description: 'V�rification de la performance financi�re.' },
            { icon: '??', name: 'Tr�sorerie & financement', description: 'Gestion des flux et besoins de liquidit�s.' },
            { icon: '??', name: 'Banque & assurance', description: 'Services financiers aux particuliers et entreprises.' },
            { icon: '??', name: 'Conseil en gestion de patrimoine', description: 'Optimisation de l\'�pargne et des placements.' },
            { icon: '??', name: 'Gestion d\'entreprise & administration', description: 'Pilotage global d\'une organisation.' },
            { icon: '??', name: 'Finance durable & investissement responsable', description: 'Financement �thique et vert.' },
            { icon: '??', name: 'Gestion de projets financiers', description: 'Conception et suivi d\'op�rations budg�taires.' },
            { icon: '??', name: 'Fintech & services financiers num�riques', description: 'Innovation dans les paiements et cr�dits.' },
            { icon: '???', name: 'Gestion budg�taire publique', description: 'Comptabilit� et contr�le des finances de l\'�tat.' },
            { icon: '?', name: 'Contr�le interne & conformit�', description: 'S�curit� et fiabilit� des proc�dures financi�res.' }
        ]
    },
    {
        id: 10,
        icon: '???',
        name: 'H�tellerie, restauration & tourisme',
        description: 'Accueillez, servez, cuisinez et faites d�couvrir des destinations dans l\'hospitalit�.',
        subUniverses: [
            { icon: '?????', name: 'Cuisine gastronomique', description: 'Cr�ation culinaire haut de gamme.' },
            { icon: '??', name: 'Restauration collective', description: 'Pr�paration de repas pour groupes.' },
            { icon: '??', name: 'Service & sommellerie', description: 'Accueil et conseil en salle.' },
            { icon: '??', name: 'H�tellerie & h�bergement', description: 'Gestion de s�jours et services associ�s.' },
            { icon: '???', name: 'Accueil & r�ception', description: 'Premier contact et assistance clients.' },
            { icon: '???', name: 'Tourisme local & culturel', description: 'Valorisation du patrimoine et des territoires.' },
            { icon: '??', name: 'Tourisme international', description: 'Accueil et accompagnement de visiteurs �trangers.' },
            { icon: '??', name: '�v�nementiel & congr�s', description: 'Organisation d\'�v�nements professionnels.' },
            { icon: '??', name: 'Management h�telier', description: 'Pilotage d\'�tablissements touristiques.' },
            { icon: '??', name: '�notourisme & terroir', description: 'D�couverte du vin et de la gastronomie locale.' },
            { icon: '??', name: 'Gestion durable du tourisme', description: 'Tourisme responsable et respectueux des ressources.' }
        ]
    },
    {
        id: 11,
        icon: '??',
        name: 'Immobilier & patrimoine',
        description: 'Conseillez, g�rez, valorisez les biens immobiliers et le patrimoine.',
        subUniverses: [
            { icon: '??', name: 'Transaction immobili�re r�sidentielle', description: 'Achat et vente de logements.' },
            { icon: '??', name: 'Transaction immobili�re d\'entreprise & commerces', description: 'N�gociation de biens professionnels.' },
            { icon: '???', name: 'Promotion & d�veloppement immobilier', description: 'Construction et valorisation de projets.' },
            { icon: '??', name: 'Gestion locative & syndic de copropri�t�', description: 'Administration de biens et copropri�t�s.' },
            { icon: '??', name: 'Expertise & �valuation immobili�re', description: 'Analyse de la valeur d\'un bien.' },
            { icon: '??', name: 'Investissement & conseil patrimonial immobilier', description: 'Strat�gies d\'achat et de placement.' },
            { icon: '???', name: 'Am�nagement foncier & urbanisme op�rationnel', description: 'Planification et gestion du sol.' },
            { icon: '???', name: 'Immobilier social & logement accompagn�', description: 'Gestion de l\'habitat pour publics fragiles.' },
            { icon: '???', name: 'Facility management & gestion technique', description: 'Maintenance et services aux b�timents.' },
            { icon: '??', name: 'Immobilier de luxe & biens d\'exception', description: 'Gestion d\'actifs haut de gamme.' }
        ]
    },
    {
        id: 12,
        icon: '??',
        name: 'Industrie, fabrication & production',
        description: 'Produisez, assemblez, automatisez dans les usines et cha�nes de production modernes.',
        subUniverses: [
            { icon: '??', name: 'Production industrielle', description: 'Fabrication en s�rie de biens et produits finis.' },
            { icon: '??', name: 'Maintenance & SAV', description: 'Entretien et r�paration des �quipements.' },
            { icon: '??', name: 'M�canique & usinage', description: 'Conception et transformation de pi�ces m�talliques.' },
            { icon: '?', name: '�lectrotechnique & automatisme', description: 'Commande et automatisation des syst�mes �lectriques.' },
            { icon: '??', name: 'Robotique & cobotique', description: 'Collaboration homme-machine dans la production.' },
            { icon: '??', name: 'Chimie & mat�riaux', description: 'Transformation de la mati�re et cr�ation de compos�s.' },
            { icon: '??', name: 'A�ronautique & spatial', description: 'Conception et maintenance d\'a�ronefs et satellites.' },
            { icon: '??', name: 'M�tallurgie & sid�rurgie', description: 'Transformation des m�taux et alliages.' },
            { icon: '??', name: 'Industrie pharmaceutique', description: 'Fabrication de m�dicaments et vaccins.' },
            { icon: '??', name: 'Plasturgie & composites', description: 'Conception d\'objets en polym�res et mat�riaux innovants.' },
            { icon: '?', name: 'Qualit�, s�curit� & environnement industriel', description: 'Contr�le des normes et pr�vention des risques.' },
            { icon: '??', name: 'Supply chain industrielle', description: 'Coordination logistique de la production.' },
            { icon: '???', name: 'Fabrication additive & impression 3D', description: 'Production par couches successives.' },
            { icon: '??', name: 'Industrie textile & habillement', description: 'Confection et transformation des tissus.' },
            { icon: '??', name: 'Micro-�lectronique & semi-conducteurs', description: 'Production de circuits et composants �lectroniques.' },
            { icon: '??', name: 'Industries extractives & carri�res', description: 'Exploitation des ressources naturelles.' },
            { icon: '??', name: 'Construction & maintenance navale', description: 'B�timent et entretien de navires.' }
        ]
    },
    {
        id: 13,
        icon: '??',
        name: 'Logistique, transport & mobilit�',
        description: 'Transportez, organisez, g�rez les flux de marchandises et les d�placements.',
        subUniverses: [
            { icon: '??', name: 'Logistique & entreposage', description: 'Gestion des flux et stockage des marchandises.' },
            { icon: '??', name: 'Supply chain management', description: 'Pilotage global des cha�nes d\'approvisionnement.' },
            { icon: '??', name: 'Douanes & commerce international', description: 'Gestion des �changes transfrontaliers.' },
            { icon: '??', name: 'Transport routier & livraison', description: 'Acheminement terrestre de marchandises.' },
            { icon: '??', name: 'Transport ferroviaire', description: 'Exploitation et maintenance des r�seaux de trains.' },
            { icon: '??', name: 'Transport a�rien', description: 'Exploitation et organisation du trafic a�rien.' },
            { icon: '??', name: 'Transport maritime & fluvial', description: 'Navigation commerciale et logistique portuaire.' },
            { icon: '??', name: 'Mobilit� urbaine & transports publics', description: 'D�placements collectifs en ville.' },
            { icon: '??', name: 'Gestion de flotte & maintenance', description: 'Suivi et entretien de v�hicules.' },
            { icon: '??', name: 'Logistique urbaine & dernier kilom�tre', description: 'Livraison locale et circuits courts.' },
            { icon: '?', name: 'Activit�s portuaires & maritimes', description: 'Gestion et exploitation des infrastructures portuaires.' },
            { icon: '??', name: 'Mobilit� autonome & v�hicules intelligents', description: 'Conception et exploitation de transports automatis�s.' }
        ]
    },
    {
        id: 14,
        icon: '??',
        name: 'Management, entrepreneuriat & strat�gie',
        description: 'Dirigez, entreprenez, �laborez des strat�gies et pilotez des �quipes vers le succ�s.',
        subUniverses: [
            { icon: '??', name: 'Cr�ation d\'entreprise & start-up', description: 'Lancement et d�veloppement d\'activit�s innovantes.' },
            { icon: '??', name: 'Gestion de projets', description: 'Organisation et suivi d\'objectifs collectifs.' },
            { icon: '??', name: 'Innovation & transformation digitale', description: 'Int�gration de nouvelles technologies.' },
            { icon: '??', name: 'Management d\'�quipe', description: 'Encadrement et motivation des collaborateurs.' },
            { icon: '??', name: 'RSE & d�veloppement durable', description: 'Int�gration des enjeux sociaux et environnementaux.' },
            { icon: '??', name: 'Strat�gie d\'entreprise', description: 'Planification des orientations � long terme.' },
            { icon: '??', name: 'Pilotage de structures publiques ou priv�es', description: 'Gouvernance et performance organisationnelle.' },
            { icon: '??', name: 'Management interculturel', description: 'Coordination d\'�quipes internationales.' },
            { icon: '??', name: 'Conseil & accompagnement strat�gique', description: 'Analyse et recommandation pour les dirigeants.' },
            { icon: '??', name: 'Gouvernance & leadership �thique', description: 'Prise de d�cision responsable et inspirante.' }
        ]
    },
    {
        id: 15,
        icon: '??',
        name: 'Num�rique, informatique & data',
        description: 'Codez, d�veloppez, analysez les donn�es et cr�ez les technologies de demain.',
        subUniverses: [
            { icon: '??', name: 'D�veloppement web & mobile', description: 'Cr�ation d\'applications et de sites internet.' },
            { icon: '??', name: 'DevOps & cloud computing', description: 'Automatisation et h�bergement de syst�mes informatiques.' },
            { icon: '??', name: 'Cybers�curit�', description: 'Protection des r�seaux et donn�es.' },
            { icon: '??', name: 'R�seaux & syst�mes', description: 'Installation et maintenance des infrastructures informatiques.' },
            { icon: '??', name: 'Intelligence artificielle & machine learning', description: 'Conception d\'algorithmes d\'apprentissage.' },
            { icon: '??', name: 'Data science & big data', description: 'Analyse et valorisation de grandes bases de donn�es.' },
            { icon: '??', name: 'R�alit� augment�e & m�tavers', description: 'Exp�riences num�riques immersives.' },
            { icon: '??', name: 'UX/UI design', description: 'Conception d\'interfaces centr�es sur l\'utilisateur.' },
            { icon: '??', name: 'Informatique industrielle & IoT', description: 'Objets connect�s et automatisation des processus.' },
            { icon: '??', name: 'Logiciels m�tiers & ERP', description: 'Outils de gestion pour entreprises.' },
            { icon: '?', name: 'No-code & automation', description: 'Cr�ation d\'applications sans programmation.' },
            { icon: '??', name: 'Design num�rique & multim�dia', description: 'Graphisme et cr�ation d\'environnements digitaux.' },
            { icon: '??', name: 'Blockchain & web3', description: 'Technologies d�centralis�es et s�curis�es.' },
            { icon: '??', name: 'Informatique durable & sobri�t� num�rique', description: 'R�duction de l\'empreinte �cologique du num�rique.' },
            { icon: '??', name: 'Gaming, jeux vid�o & d�veloppement ludique', description: 'Conception de jeux interactifs.' },
            { icon: '??', name: 'E-sport, streaming & cr�ation de contenu gaming', description: 'Comp�tition et diffusion de jeux vid�o.' }
        ]
    },
    {
        id: 16,
        icon: '??',
        name: 'Sant�, bien-�tre & m�dical',
        description: 'Soignez, accompagnez, pr�venez dans les m�tiers de la sant� et du bien-�tre.',
        subUniverses: [
            { icon: '??', name: 'M�decine g�n�rale', description: 'Soins courants et pr�vention.' },
            { icon: '??', name: 'Chirurgie & sp�cialit�s hospitali�res', description: 'Interventions et soins techniques.' },
            { icon: '??', name: 'Radiologie & imagerie m�dicale', description: 'Diagnostic par l\'image.' },
            { icon: '??', name: 'Biologie & analyses m�dicales', description: '�tudes de pr�l�vements biologiques.' },
            { icon: '??', name: 'Pharmacie & biotechnologies', description: 'D�veloppement et distribution de traitements.' },
            { icon: '?????', name: 'Infirmier & soins param�dicaux', description: 'Accompagnement des patients au quotidien.' },
            { icon: '??', name: 'R��ducation & kin�sith�rapie', description: 'Restauration des capacit�s physiques.' },
            { icon: '??', name: 'Sant� mentale & psychologie', description: 'Prise en charge des troubles psychiques.' },
            { icon: '??', name: 'Nutrition & di�t�tique', description: '�quilibre alimentaire et sant�.' },
            { icon: '???', name: 'Sant� publique & pr�vention', description: 'Promotion du bien-�tre collectif.' },
            { icon: '??', name: 'Accompagnement des personnes �g�es', description: 'Soins et assistance en g�rontologie.' },
            { icon: '?', name: 'M�decine du sport', description: 'Pr�vention et suivi des sportifs.' },
            { icon: '??', name: 'M�decine connect�e & t�l�sant�', description: 'Soins � distance et outils num�riques.' }
        ]
    },
    {
        id: 17,
        icon: '??',
        name: 'Sciences, recherche & innovation',
        description: 'Cherchez, exp�rimentez, innovez pour faire avancer les connaissances scientifiques.',
        subUniverses: [
            { icon: '??', name: 'Physique & astrophysique', description: '�tude des lois de l\'univers et de la mati�re.' },
            { icon: '??', name: 'Math�matiques & statistiques', description: 'Mod�lisation et analyse quantitative.' },
            { icon: '??', name: 'Chimie & mat�riaux', description: 'Recherche sur les r�actions et nouveaux mat�riaux.' },
            { icon: '??', name: 'Biotechnologies', description: 'Innovation � partir du vivant.' },
            { icon: '??', name: 'G�osciences & climatologie', description: '�tude de la Terre et des ph�nom�nes climatiques.' },
            { icon: '??', name: 'Neurosciences & cognition', description: 'Exploration du cerveau et du comportement.' },
            { icon: '??', name: 'Sciences humaines & sociales', description: 'Analyse des soci�t�s et comportements humains.' },
            { icon: '??', name: 'Recherche en �ducation', description: '�tude des processus d\'apprentissage.' },
            { icon: '??', name: 'Recherche appliqu�e & transfert technologique', description: 'Passage de la science au produit.' },
            { icon: '??', name: 'R&D en entreprise', description: 'Innovation int�gr�e � la production.' },
            { icon: '??', name: '�tudes et consulting scientifique', description: 'Expertise et accompagnement de projets techniques.' }
        ]
    },
    {
        id: 18,
        icon: '???',
        name: 'S�curit�, d�fense & urgence',
        description: 'Prot�gez, intervenez, s�curisez les personnes et les biens au quotidien.',
        subUniverses: [
            { icon: '??', name: 'Police & gendarmerie', description: 'Maintien de l\'ordre et protection des citoyens.' },
            { icon: '??', name: 'Pompiers & secours', description: 'Interventions d\'urgence et sauvetage.' },
            { icon: '??', name: 'S�curit� priv�e & surveillance', description: 'Protection des biens et des personnes.' },
            { icon: '??', name: 'Protection civile', description: 'Organisation des secours en cas de catastrophe.' },
            { icon: '??', name: 'D�fense & arm�e', description: 'S�curit� nationale et op�rations ext�rieures.' },
            { icon: '???', name: 'Renseignement & s�curit� strat�gique', description: 'Collecte et analyse d\'informations sensibles.' },
            { icon: '??', name: 'S�curit� informatique & cyberd�fense', description: 'Pr�vention des attaques num�riques.' },
            { icon: '?', name: 'S�curit� des infrastructures critiques', description: 'Protection des r�seaux essentiels (�nergie, transport�).' },
            { icon: '??', name: 'Gestion de crise & r�silience territoriale', description: 'Coordination des r�ponses aux urgences.' },
            { icon: '??', name: 'Pr�vention des risques & s�ret� publique', description: 'Surveillance et �valuation des menaces.' },
            { icon: '??', name: 'Industrie de d�fense & armement', description: 'Conception d\'�quipements militaires.' }
        ]
    },
    {
        id: 19,
        icon: '??',
        name: 'Social, aide & solidarit�',
        description: 'Aidez, accompagnez, soutenez les personnes en difficult� ou en situation de vuln�rabilit�.',
        subUniverses: [
            { icon: '??', name: 'Aide � domicile', description: 'Soutien aux personnes d�pendantes.' },
            { icon: '??', name: 'Travail social & insertion', description: 'Accompagnement vers l\'autonomie et l\'emploi.' },
            { icon: '??', name: 'Enfance & jeunesse', description: 'Protection et �ducation des jeunes publics.' },
            { icon: '?', name: 'Handicap & inclusion', description: 'Soutien � la participation sociale des personnes handicap�es.' },
            { icon: '??', name: 'Sant� mentale & accompagnement', description: 'Suivi social et psychologique.' },
            { icon: '??', name: 'Animation & m�diation sociale', description: 'Cr�ation de lien et d\'activit�s collectives.' },
            { icon: '???', name: 'Protection de l\'enfance', description: 'D�fense des droits et s�curit� des mineurs.' },
            { icon: '??', name: '�conomie sociale & solidaire', description: 'Entreprises � finalit� sociale et collective.' },
            { icon: '??', name: 'B�n�volat & engagement citoyen', description: 'Actions solidaires et collectives.' },
            { icon: '??', name: 'Gestion d\'�tablissements m�dico-sociaux', description: 'Pilotage de structures d\'accueil.' },
            { icon: '????????', name: 'M�diation familiale', description: 'R�solution de conflits familiaux.' },
            { icon: '??', name: 'Services � la personne & assistance familiale', description: 'Soutien � domicile et accompagnement quotidien.' },
            { icon: '???', name: 'Accompagnement fun�raire & thanatologie', description: 'Soutien aux familles et organisation des rites.' }
        ]
    },
    {
        id: 20,
        icon: '?',
        name: 'Sport, loisirs & vie active',
        description: 'Entra�nez, animez, organisez des activit�s sportives et de loisirs pour tous.',
        subUniverses: [
            { icon: '???', name: 'Coaching sportif', description: 'Entra�nement personnalis� et motivation.' },
            { icon: '??', name: 'Animation & loisirs', description: 'Encadrement d\'activit�s de d�tente.' },
            { icon: '??', name: '�ducation physique & enseignement du sport', description: 'Formation sportive en milieu scolaire.' },
            { icon: '?', name: 'Encadrement sportif & f�d�rations', description: 'Organisation et arbitrage des pratiques.' },
            { icon: '???', name: 'Gestion d\'�quipements sportifs', description: 'Direction d\'installations ou clubs.' },
            { icon: '??', name: 'M�diation par le sport', description: 'Utilisation du sport � des fins sociales ou �ducatives.' },
            { icon: '??', name: 'Nutrition & bien-�tre', description: '�quilibre alimentaire et hygi�ne de vie.' },
            { icon: '??', name: 'Sport sant� & r�athl�tisation', description: 'Activit� physique adapt�e � la sant�.' },
            { icon: '??', name: 'Organisation d\'�v�nements sportifs', description: 'Planification et logistique de comp�titions.' },
            { icon: '???', name: 'Tourisme sportif', description: 'Voyages et s�jours autour du sport.' },
            { icon: '??', name: 'E-sport & comp�tition num�rique', description: 'Comp�tition professionnelle de jeux vid�o.' }
        ]
    },
    {
        id: 21,
        icon: '??',
        name: 'Technologies �mergentes & futur du travail',
        description: 'Explorez l\'IA, la robotique, le m�tavers et les nouvelles formes de travail.',
        subUniverses: [
            { icon: '??', name: 'Robotique humano�de avanc�e', description: 'Conception de robots capables d\'interagir naturellement.' },
            { icon: '??', name: 'Technologies immersives nouvelle g�n�ration (XR, haptique)', description: 'Interfaces sensorielles et r�alit�s augment�es.' },
            { icon: '??', name: 'Biotechnologies avanc�es & bio-ing�nierie', description: 'Innovation � l\'�chelle du vivant.' },
            { icon: '??', name: 'AgroTech & FoodTech', description: 'Nouvelles technologies pour l\'agriculture et l\'alimentation.' },
            { icon: '??', name: 'CleanTech & GreenTech', description: 'Solutions technologiques pour r�duire l\'impact �cologique.' },
            { icon: '??', name: 'HealthTech & MedTech', description: 'Dispositifs connect�s et innovations m�dicales.' },
            { icon: '??', name: 'SpaceTech & exploration spatiale', description: 'Technologies d�di�es � l\'espace et aux satellites.' },
            { icon: '??', name: '�conomie cr�ative & travail num�rique ind�pendant', description: 'Nouvelles formes de m�tiers autonomes et digitaux.' }
        ]
    }
];
