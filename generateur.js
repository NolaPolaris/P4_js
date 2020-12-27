var sujet = ["Pierre","Paul","Jacky","Dédé","Lulu",];
var verbe = ["mange", "bois", "cherche", "part", "fait"];
var complement = ["du bois", "de la bière", "des pommes", "une tarte", "de la voile"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

randomSujet = getRandomInt(sujet.length);
//randomSujet = sujet[getRandomInt(sujet.length)]; <--- cette fonction la permet de transformer la var randomSujet en string, et de raccourcir le code en supprimant certaine variable inutile. 
// Elle passe l'ancienne func RandomSujet, qui retournait un entier utilisé ensuite en index en variable utilisable directement dans la concaténation finale.
// var citation = randomSujet + randomVerbe + randomComplement;
// console.log(citation);


var y = verbe.length
randomVerbe = Math.floor(Math.random() * (y-1)) ;

var z = complement.length
randomComplement = Math.floor(Math.random() * (z-1)) ;

var citation = sujet[randomSujet] + verbe[randomVerbe] + complement[randomComplement];
console.log(citation);
