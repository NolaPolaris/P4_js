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
        return [randomDebut, randomMilieu, randomFin];
        return `${randomDebut} \n ${randomMilieu} \n ${randomFin}`;
    }
    
};

var haiku_data = {
    
    debut : [
        "En confinement,",
        "En me baladant,",
        "En réfléchissant,",
        "En te dessinant,",
        "En arrivant,"
    ],
    
    milieu : [
        "entre les murs silencieux",
        "dans mon lit tout embrumé",
        "le long des chemins d'automne",
        "à la fin d'un jour trop gris",
        "quand l'aurore se dessine"
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
    "Si tu te perds,",
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

        
        let generator;

        if (theme_selected.val() == "haiku"){
            generator = new Citation(haiku_data.debut, haiku_data.milieu, haiku_data.fin);
        }
        else if (theme_selected.val() == "bullshit"){
            generator = new Citation(bullshit_data.debut, bullshit_data.milieu, bullshit_data.fin);
        }
        else {
            window.alert("choisissez un thème !")
        }

        let recueil_citation = new Array;
        
        for (i=0; i < qtt_citation.val(); i++){
            let quote_array = generator.generate();
            let quote_generated = "";
            
            // Remplir quote_generated avec les valeur du tableau quote_array
            // Ajouter mise en forme (HTML, css)
            // Push du quote_generated dans le tableau de citation
            
            // methode 1: array.join()
            //quote_generated = quote_array.join('</br>'); //fonctionne
            // methode 2: for(;;;)
            // quote_generated = "<div class='quote'>";
            // for (j=0; j<quote_array.length; j++){
            //     quote_generated += '<p>' + quote_array[j] + '</p>';
            // }
            // quote_generated += "</div>";
            // methode 3: forEach()
            quote_generated = "<div class='quote'>";
            quote_array.forEach(element => {
                quote_generated += '<p>' + element + '</p>';
            });
            quote_generated += "</div>";

            recueil_citation.push(quote_generated);
        }

        console.log(recueil_citation);

        let content = document.getElementById('content');

        content.innerHTML = recueil_citation.join(""); 
        


        // function show_quotes(){
           
        //  }

        //  show_quotes();

        
        // show_quotes(recueil_citation);

    });
    

});