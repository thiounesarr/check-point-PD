// Demander à l'utilisateur son âge
let age = prompt("Veuillez entrer votre âge :");

// Convertir l'âge en nombre
age = parseInt(age);

// Déterminer le prix du billet en fonction de l'âge
let prix;
if (age <= 12) {
    prix = 10;
} else if (age >= 13 && age <= 17) {
    prix = 15;
} else {
    prix = 20;
}

// Afficher le prix du billet
alert("Le prix de votre billet est : " + prix + " $");


//fonction de puissance
// Fonction récursive pour calculer la puissance
function puissance(base, exposant) {
    // Cas de base : si l'exposant est 0, retourner 1
    if (exposant === 0) {
        return 1;
    }
    // Cas récursif : multiplier la base par le résultat de la puissance avec un exposant réduit de 1
    return base * puissance(base, exposant - 1);
}

// Exemple d'utilisation
let base = 2;
let exposant = 3;
let resultat = puissance(base, exposant);

console.log(`${base} élevé à la puissance ${exposant} est égal à ${resultat}`);
