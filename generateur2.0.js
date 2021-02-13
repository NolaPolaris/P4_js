/* On crée une classe Citation, qui permet de créer un modèle générale de citation avec un début, un milieu et une fin,
et une fonction permettant de sélectionner un entier random.
L'argument max nous permet de limiter cet entier à une valeur contenue entre 0 et la valeur la plus haute dans la liste*/

class Citation {
    constructor(debut, milieu, fin) {
        this.debut = debut;
        this.milieu = milieu;
        this.fin = fin;

        this.getRandomInt = function (max) {
            return Math.floor(Math.random() * Math.floor(max));
        };

        this.generate = function () {
            var randomDebut = this.debut[this.getRandomInt(this.debut.length)];
            var randomMilieu = this.milieu[this.getRandomInt(this.milieu.length)];
            var randomFin = this.fin[this.getRandomInt(this.fin.length)];
            return [randomDebut, randomMilieu, randomFin];

        };

    }
}
;

/* on crée ensuite un objet (ou dictionnaire), qui va nous permettent de stocker des 
 data sous forme de String, classé selon les deux sujets proposés. Ce seront ces données
 qui seront utilisées pour former nos citations.
 Le stockage de toutes ces données dans un seul objet "thème" nous permet de faire référence à cet objet plus tard, tout en nous permettant d'ajouter
 de nouveaux thèmes sans remanier l'intégralité de notre code.*/


var themeData = {
    haiku: {

        debut: [
            "En confinement,",
            "En me baladant,",
            "En réfléchissant,",
            "En te dessinant,",
            "En arrivant,"
        ],

        milieu: [
            "entre les murs silencieux",
            "dans mon lit tout embrumé",
            "le long des chemins d'automne",
            "à la fin d'un jour trop gris",
            "quand l'aurore se dessine"
        ],

        fin: [
            "j'arrive à rêver.",
            "un silence passe.",
            "mon chat me regarde.",
            "la lune souris.",
            "une étoile surgit."
        ]

    },

    absurde: {

        debut: ["Où que tu sois,",
            "Si tu te perds,",
            "Si tu as des doutes,",
            "Tu es en retard,",
            "Si tu fatigues, "],

        milieu: ["appelle ta mère,",
            "commande un uber, ",
            "prends un chemin, ",
            "ouvre ta voie, ",
            "regarde devant toi, "],

        fin: ["et reposes-toi.",
            "c'est un bon choix.",
            "et abstiens-toi.",
            "et reviens chez moi.",
            "et ne t'arrêtes pas."]
    },


};

// Dans un second temps, nous allons instancier la classe Citation, et intéragir avec les 
// valeurs passées dans les inputs HTML par l'utilisateur : le choix d'un thème et la quantité de citations demandées.

$(document).ready(function () {
    $("#send").click(function (event) {
        event.preventDefault();
        var themeSelected = $("#theme_select").val();
        console.log(themeSelected);
        var qttCitation = $("input#qtt").val();

        /* Bien que les inputs en HTML 5 permettent de baliser les interactions avec l'utilisateurs, il reste possible d'entrer d'autres valeurs dans le second input.
        On crée donc une condition permettant de prévenir ce genre d'entrées :*/

        if (isNaN(qttCitation) || qttCitation < 1 || qttCitation > 5 ) {
            window.alert("Vous êtes taquin, suivez les règles !");
            return;
        }
        else {
            console.log(qttCitation);
        }


        /* on crée ensuite une variable generator vide, dans laquelle nous allons stocker l'instanciation
        de la classe citation sous forme de tableau contenant un début un milieu et une fin à partir 
        des data issus du thème (dictionnaire ou objet haiku ou absurde) choisi. */

        let generator;

        /* On vérifie tout d'abord que le thème sélectionné est bien une clé contenu dans l'objet thème,
        sinon, on retourne un message d'erreur à l'utilisateur, et une alterne à la fonction pour qu'elle s'arrête.*/ 

        if (themeData.hasOwnProperty(themeSelected) == true) {
            var selectedData = themeData[themeSelected];
            generator = new Citation(selectedData.debut, selectedData.milieu, selectedData.fin);
        }
        else {
            window.alert("choisissez un thème !");
            return;
        }

    
        /* On crée ensuite une variable qui permettra de stocker l'ensemble des citations générées à chaque action de l'utilisateur,
        enutilisation un constructeur: */

        let recueilCitation = new Array;

        // On génère ensuite chaque citation, en fonction de la quantité choisie par l'utilisateur:

        for (i = 0; i < qttCitation; i++) {
            // On appelle la fonction generate de notre objet citation:            
            let quoteArray = generator.generate();
            // puis on crée une variable quote_generated de type string.  
            let quoteGenerated = "";

            // On passe ensuite à la variable quote_generated une valeurs qui correspond à une div html avec pour attribut la class"quote",
            // qui nous permettra un affichage personnalisé via le CSS

            quoteGenerated = "<div class='quote'>";

            // Pour chaque partie de la citation générée, on va créé un paragraphe.
            // Du côté du Javascript, on concatène en fait chaque partie sous forme de string.
            // On ajoute donc un string, stylisé en paragraphe dans le HTML, au suivant.

            quoteArray.forEach(element => {
                quoteGenerated += '<p>' + element + '</p>';
            });

            // On ferme la div ouverte plus haut :
            quoteGenerated += "</div>";

            // Puis on ajoute à notre array recueilCitation chaque citation générée et stylisée :
            recueilCitation.push(quoteGenerated);
        }

        console.log(recueilCitation);

        // Pour aller plus loin: on crée une variable content qui correspond dans le HTML à l'élément ayant pour ID "content" :

        let content = document.getElementById('content');

        // Dans cet élément du HTML on affiche notre recueilCitation sous forme de string, séparé par le paramètre passé à join,
        //ici un retour à la ligne.


        content.innerHTML = recueilCitation.join("\n");

    });


});



