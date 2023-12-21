/*
let nbAléatoire:
Génrer un nombre aléatoire au chargement de la page compris entre 0 et 10;

Le bouton est cliqué
    let nbEntré
    Lire le nombre entré et le comparer avec le nombre aléatoire;

    Si le nombre est différent du nombre aléatoire alors
        Afficher une pop-up "Vous avez perdu :), le chiffre était";

    Sinon
        Afficher une pop-up "vous avez gagné";
    Fin du si
Fin de la fonction
 */

document.addEventListener('DOMContentLoaded', function() {
    let nbAleatoire = Math.floor(Math.random() * 10 + 1);
    //var nbAleatoire = 6;

    document.getElementById('button-number').addEventListener('click', function guessNumber() {
        let nbEntre = parseInt(document.getElementById('input-nombre').value); //pour récupéré la valur et pas la div
        console.log(nbEntre + " je suis le nombre entré");
        console.log(nbAleatoire + " je suis le nombre aléatoire");

        if (nbAleatoire !== nbEntre) {
            alert("Vous avez pedu :) ! Le nombre était " + nbAleatoire);

        } else if (nbAleatoire === nbEntre) {
            alert("Vous avez gagné :D ! Le nombre est " + nbAleatoire);

        } else {
            console.log("erreur");
        }
    })
});

