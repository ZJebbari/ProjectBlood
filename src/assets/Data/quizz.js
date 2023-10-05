const quizz= [
    {
      id: 1,
      question: "Quel âge avez-vous ?",
      choices: [
        {
          id: 1,
          reponse: "- de 18 ans",
          typereponse: "F",
          justification: "Pour donner son sang, il faut être majeur et consentant. Dès vos 18 ans, renseignez-vous dans votre école ou votre université : de nombreuses collectes y sont organisées. Un 1er don est une belle façon de fêter sa majorité : pensez-y ! En attendant, n’hésitez pas à parler du don de sang autour de vous ! "
        },
        {
            id: 2,
            reponse: "18 à 70 ans",
            typereponse: "T",
            justification: " "
          },
        {
            id: 3,
            reponse: "71 ans et +",
            typereponse: "F",
            justification: "Pour préserver votre santé, il n’est plus possible de faire un don de sang après 71 ans. Mais on compte sur vous pour devenir bénévole ou ambassadonneur pour la promotion du don de sang !"
          },
      ]
    },
    {
        id: 2,
        question: "Quel est votre poids ? ",
        choices: [
          {
            id: 1,
            reponse: "- de 50 Kg",
            typereponse: "F",
            justification: "Pour préserver votre santé, il n’est pas possible de donner son sang quand on pèse moins de 50kg. Ne soyez pas déçus vous avez mille autres façons de soutenir le don de sang."
          },
          {
              id: 2,
              reponse: "+ de 50 Kg",
              typereponse: "T",
              justification: " "
            },
        ]
      },
      {
        id: 3,
        question: "Votre dernier don date de moins de 8 semaines (sang) ou 4 semaines (plaquettes) ou 2 semaines (plasma) ?",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Votre dernier don est trop récent. Pour préserver votre santé et laisser le temps à votre organisme de récupérer totalement, vous ne pouvez pas donner votre sang pour le moment. A très vite dans nos maisons du don et lieux de collecte !"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: "Encore un peu de patience, vous ne pouvez pas donner votre sang pour l'instant. Mais vous pouvez en parler !"
            },
        ]
      },
      {
        id: 4,
        question: "Avez-vous été testé(e) positif pour le VIH (sida), ou VHB (hépatite B) ou VHC (hépatite C) ou la syphilis ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Pour éviter tout risque de contamination, vous ne pouvez pas donner votre sang car certaines maladies comme le VIH, les hépatites B et C ou la syphilis sont transmissibles par le sang. "
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 5,
        question: "Avez-vous eu un cancer au cours de votre vie ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "En vertu du principe de précaution vous ne pouvez pas donner votre sang. Dans le cas de certains cancers (in situ) du col de l’utérus et certains cancers superficiels de la peau, vous pouvez donner votre sang. Renseignez-vous auprès d’un médecin sur votre lieu de don"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 6,
        question: "Êtes-vous traité(e) pour une maladie chronique telle que : diabète (traité par insuline), maladie inflammatoire de l'intestin, maladie auto-immune...?",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "En vertu du principe de précaution vous ne pouvez pas donner votre sang. Dans le cas de certaines maladies auto-immunes ne touchant qu’un seul organe (thyroïdite d’Hashimoto par exemple) vous êtes autorisé.e à donner. Renseignez-vous auprès d’un médecin sur votre lieu de don "
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 7,
        question: "Avez-vous ressenti, dans les dernières semaines, une douleur thoracique ou un essoufflement anormal à la suite d’un effort ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "N’hésitez pas à consulter votre médecin ! En vertu du principe de précaution vous ne pouvez pas donner votre sang. Le don de sang n'est pas autorisé en cas de problèmes cardiaques ou d’antécédents d’accidents vasculaires (AVC) même transitoires et sans séquelles. Nous vous proposons mille autres façons de vous engager."
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 8,
        question: "Avez-vous déjà eu une transfusion de sang (globules rouges, plaquettes ou plasma) ou une greffe d’organe ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "En vertu du principe de précaution, vous ne pouvez pas donner votre sang, si vous avez déjà été transfusé.e ou greffée au cours de votre vie. Toutefois, vous avez mille autres façons de soutenir le don de sang ! Vous pouvez, par exemple, faire un don de sang à usage non-thérapeutique (pour enseignement et recherche médicale). Renseignez-vous sur un lieu de don"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 9,
        question: "Avez-vous déjà pris des drogues illicites et/ou substances dopantes par voie intraveineuse ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Pour préserver la santé des patients et éviter la transmission d’éventuelles maladies infectieuses, vous ne pouvez pas donner votre sang. Tout antécédent d'injection de produits stupéfiants en intraveineuse vous empêche définitivement de donner. Mais vous avez mille autres façons de soutenir le don de sang. "
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 10,
        question: "Avez-vous fait un tatouage ou un piercing (oreilles comprises) dans les 4 derniers mois ?",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Pour préserver la santé des patients et éviter tout risque de transmission d’infection liée à une éventuelle mauvaise stérilisation du matériel, il faut attendre 4 mois après votre tatouage ou piercing pour donner. Au plaisir de vous revoir très bientôt dans nos lieux de collecte !"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 11,
        question: "Êtes-vous enceinte ou avez-vous accouché depuis moins de 6 mois ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Il vous faudra patienter 6 mois après votre accouchement pour pouvoir donner à nouveau votre sang.C’est pour préserver votre santé et éviter tout risque de carence pour vous et votre bébé. Passé ce délai, vous pourrez à nouveau donner, même si vous allaitez votre enfant... Prenez soin de vous !"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 12,
        question: "Êtes-vous suivi(e) par votre médecin pour une anémie (baisse du taux d’hémoglobine) ou un manque de fer ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Pour préserver votre santé. Une fois que votre taux d’hémoglobine sera suffisant (12g/dl pour une femme ; 13g/dl pour un homme), vous pourrez à nouveau donner. À très vite !"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 13,
        question: "Avez-vous fait un examen de type « fibroscopie » gastrique, ORL, pulmonaire, fibroscopie, coloscopie dans les 4 derniers mois ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Pour préserver votre santé et celle des patients. Nos lieux de don vous accueilleront avec plaisir 4 mois après votre endoscopie."
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 14,
        question: "Avez-vous été opéré(e) dans les 4 derniers mois ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Selon la nature de l'opération et la durée de l'hospitalisation, certains dons ne sont pas autorisés. En cas d’intervention chirurgicale prochaine, le don de sang peut être déconseillé.  Bon rétablissement !"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 15,
        question: "Avez-vous eu de la fièvre* ou une infection (toux, diarrhée, infection urinaire, plaie cutanée…) dans les 2 dernières semaines ?",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Pour le moment, vous ne pouvez pas donner votre sang. Attendez 2 semaines après la disparition complète des symptômes et revenez nous voir. À très vite dans nos lieux de don !"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 16,
        question: "Avez-vous eu des soins dentaires depuis moins de 24 heures (carie, détartrage), un traitement de racine ou une extraction dentaire depuis moins d’une semaine ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Pour éviter tout risque de transmission d’éventuelles bactéries, attendez 1 jour après votre détartrage, votre traitement de carie ou 1 semaine après votre extraction dentaire ou un soin touchant la gencive (anesthésie locale comprise). Vous pourrez donner dans les prochains jours, prenez rendez-vous dès à présent. À très vite dans nos lieux de don !"
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      },
      {
        id: 17,
        question: "Prenez-vous des médicaments, même tous les jours ? ",
        choices: [
          {
            id: 1,
            reponse: "Oui",
            typereponse: "F",
            justification: "Vous pouvez donner à quelques exceptions près.La prise de médicaments est généralement compatible avec le don de sang. A noter : il faut attendre 7 jours après l’arrêt de la prise d’antibiotiques. "
          },
          {
              id: 2,
              reponse: "Non",
              typereponse: "T",
              justification: ""
            },
        ]
      }
  ];
    
    export default quizz;
  