
  function Citation(debut, milieu, fin)  {
    this.debut = debut;
    this.milieu = milieu;
    this.fin = fin;

    this.getRandomInt = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    this.generate = function() {
        var randomDebut = this.debut[this.getRandomInt(this.debut.length)];
        var randomMilieu = this.milieu[this.getRandomInt(this.milieu.length)];
        var randomFin = this.fin[this.getRandomInt(this.fin.length)];
        return randomDebut + '\n' + randomMilieu + '\n' + randomFin;
    }

  };

  var debutHaiku = [
    "En confinement,",
    "En me baladant,",
    "En réfléchissant,",
    "En te dessinant,",
    "En arrivant "
  ];
  var milieuHaiku = [
    "entre les murs silencieux ",
    "dans mon lit tout embrumé ",
    "le long des chemins d'automne ",
    "à la fin d'un jour trop gris ",
    "quand l'aurore se dessine "
  ];
  var finHaiku = [
    "j'arrive à rêver",
    "un silence passe",
    "mon chat me regarde",
    "la lune souris",
    "une étoile surgit"
  ];


  var haiku = new Citation(debutHaiku, milieuHaiku, finHaiku);
  var haiku_generated = haiku.generate();
  console.log(haiku_generated);
  
  
  
//   bullshit : {
//     var sujet = ["Où que tu sois,",
//                  "si tu te perds,",
//                  "Si tu as des doutes,",
//                  "Tu es en retard,",
//                  "Si tu fatigues "];
  
//     var verbe = ["appelle ta mère",
//                  "commande un uber ",
//                  "prends un chemin ",
//                  "ouvre ta voie ",
//                  "regarde devant toi "];
//     var complement = ["et reposes-toi.",
//                       "c'est un bon choix",
//                       "et abstiens-toi",
//                       "et reviens chez moi",
//                       "et ne t'arrêtes pas"];
//   };
  
//   var citation = randomSujet + randomVerbe + randomComplement;
//   var haiku = haiku[randomSujet] + haiku[randomVerbe] + haiku[randomComplement];
  
  // window.alert(citation);
  // console.log(citation);
  
  // var content = element.getElementByClassName('content');
  // document.content.innerHTML = citation;

  
  // Si l'input est égal à haiku, on retourne l'objet haiku, c'est ) dire une citation construite par la concaténation de trois parties générée aléatoirement grâce au randIndex)
  // input = choix;
  // if choix = haiku
  // --> return(haiku);
  // else:
  // return(bullshit);
  