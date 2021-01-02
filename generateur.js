// function Generate(){
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max))
//   },
//    x = null (où x contiendra l'un des array de citation)

// for x ..z (on applique cette fonction pour les trois array : sujet, verbe, complement)
//   function RandPart(x){
//   return x[getRandomInt(x.length)]);
//   };
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  var sujet = [
    "En confinement,",
    "En me baladant,",
    "En réfléchissant,",
    "En te dessinant,",
    "En arrivant "
  ];
  var verbe = [
    "entre les murs silencieux ",
    "dans mon lit tout embrumé ",
    "le long des chemins d'automne ",
    "à la fin d'un jour trop gris ",
    "quand l'aurore se dessine "
  ];
  var complement = [
    "j'arrive à rêver",
    "un silence passe",
    "mon chat me regarde",
    "la lune souris",
    "une étoile surgit"
  ];
  
  var randomSujet = sujet[getRandomInt(sujet.length)];
  var randomVerbe = verbe[getRandomInt(verbe.length)];
  var randomComplement = complement[getRandomInt(complement.length)];
  
  var citation = randomSujet + randomVerbe + randomComplement;
  
  // var haiku = haiku[randomSujet] + haiku[randomVerbe] + haiku[randomComplement];
  
  window.alert(citation);
  
  // haiku : {
  //   var sujet = ["En confinement,","En me baladant,","En réfléchissant,","En te dessinant,","En arrivant "];
  //   var verbe = ["entre les murs silencieux ", "dans mon lit tout embrumé ", "le long des chemins d'automne ", "à la fin d'un jour trop gris ", "quand l'aurore se dessine "];
  //   var complement = ["j'arrive à rêver", "un silence passe", "mon chat me regarde", "la lune souris", "une étoile surgit"];
  // }
  
  // var haiku = {
  //   sujet : ["En confinement,",
  //            "En me baladant,",
  //            "En réfléchissant,",
  //            "En te dessinant,",
  //            "En arrivant "],
  
  //   verbe : ["entre les murs silencieux ",
  //            "dans mon lit tout embrumé ",
  //            "le long des chemins d'automne ",
  //            "à la fin d'un jour trop gris ",
  //            "quand l'aurore se  dessine "],
  
  //   complement : ["j'arrive à rêver",
  //                 "un silence passe",
  //                 "mon chat me regarde",
  //                 "la lune souris",
  //                 "une étoile surgit"],
  // };
  
  // haiku.part1 = sujet[randomSujet];
  // haiku.part2 = verbe[randomVerbe];
  // haiku.part3 = complement[randomComplement];
  
  // haiku.generate = function (){
  //     return (haiku.part1 + haiku.part2 + haiku.part3);
  //   };
  
  // haiku.generate();
  
  // // On créé un objet citation, qui contient les array contenant les différentes parties, ainsi qu'une fonction permettant de générer une concaténation de trois parties choisi aléatoirement dans les array correspondant au début, au milieu et à la fin de la citation, grâce à la fonction random index.
  
  // // var choix = {
  // //     choix.part1 = randomSujet;
  // //     choix.part2 = randomVerbe;
  // //     choix.part3 = randomComplement;
  // //     function generate(part1, part2, part3);
  // //     function generate(part1, part2, part3){
  // //
  // // };
  
  // // Si l'input est égal à haiku, on retourne l'objet haiku, c'est ) dire une citation construite par la concaténation de trois parties générée aléatoirement grâce au randIndex)
  // // input = choix;
  // // if choix = haiku
  // // --> return(haiku);
  // // else:
  // // return(bullshit);
  
  // bullshit : {
  //   var sujet = ["Où que tu sois,",
  //                "si tu te perds,",
  //                "Si tu as des doutes,",
  //                "Tu es en retard,",
  //                "Si tu fatigues "];
  
  //   var verbe = ["appelle ta mère",
  //                "commande un uber ",
  //                "prends un chemin ",
  //                "ouvre ta voie ",
  //                "regarde devant toi "];
  //   var complement = ["et reposes-toi.",
  //                     "c'est un bon choix",
  //                     "et abstiens-toi",
  //                     "et reviens chez moi",
  //                     "et ne t'arrêtes pas"];
  // };
  
  // var citation = randomSujet + randomVerbe + randomComplement;
  // var haiku = haiku[randomSujet] + haiku[randomVerbe] + haiku[randomComplement];
  
  // // window.alert(citation);
  // // console.log(citation);
  
  // // var content = element.getElementByClassName('content');
  // // document.content.innerHTML = citation;
  