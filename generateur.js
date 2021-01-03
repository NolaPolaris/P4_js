
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

var haiku_data = {
    
    debut : [
        "En confinement,",
        "En me baladant,",
        "En réfléchissant,",
        "En te dessinant,",
        "En arrivant "
    ],
    
    milieu : [
        "entre les murs silencieux ",
        "dans mon lit tout embrumé ",
        "le long des chemins d'automne ",
        "à la fin d'un jour trop gris ",
        "quand l'aurore se dessine "
    ],
    
    fin : [
        "j'arrive à rêver",
        "un silence passe",
        "mon chat me regarde",
        "la lune souris",
        "une étoile surgit"
    ]
    
}

// var haiku = new Citation(haiku_data.debut, haiku_data.milieu, haiku_data.fin);
// var haiku_generated = haiku.generate();
// console.log(haiku_generated);




var bullshit_data = {
    
    debut : ["Où que tu sois,",
    "si tu te perds,",
    "Si tu as des doutes,",
    "Tu es en retard,",
    "Si tu fatigues "],
    
    milieu : ["appelle ta mère",
    "commande un uber ",
    "prends un chemin ",
    "ouvre ta voie ",
    "regarde devant toi "],
    
    fin : ["et reposes-toi.",
    "c'est un bon choix",
    "et abstiens-toi",
    "et reviens chez moi",
    "et ne t'arrêtes pas"]
};

// var bullshit = new Citation(bullshit_data.debut, bullshit_data.milieu, bullshit_data.fin);
// var bullshit_generated = bullshit.generate();


$(document).ready(function () {
    $("#send").click(function (event){
        event.preventDefault();
        var theme_selected = $("#theme_select");
        console.log(theme_selected.val());
        var qtt_citation = $("input#qtt");
        console.log(qtt_citation.val());
        if (theme_selected.val() == "haiku"){
            var haiku = new Citation(haiku_data.debut, haiku_data.milieu, haiku_data.fin);
            var haiku_generated = haiku.generate();
            console.log(haiku_generated);
        }
        else if (theme_selected.val() == "bullshit"){
            var bullshit = new Citation(bullshit_data.debut, bullshit_data.milieu, bullshit_data.fin);
            var bullshit_generated = bullshit.generate();
            console.log(bullshit_generated);
        }
        else {
            window.alert("choisissez un thème !")
        }
    });
    
    // if (qtt_citation =! null){
    //     for (i in qtt_citation.lengt){
    //         haiku.generate;
    //     }
        
    // }
    // else{
    //     window.alert("Choisissez un nombre de citation")
    // };
});



//   HTMLSelectElement.selectedIndex


// Si l'input est égal à haiku, on retourne l'objet haiku, c'est ) dire une citation construite par la concaténation de trois parties générée aléatoirement grâce au randIndex)
// input = choix;
// if choix = haiku
// --> return(haiku);
// else:
// return(bullshit);
