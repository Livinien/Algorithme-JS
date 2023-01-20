/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimium 1 majuscule, 1 caractère spécial & 1 nombre
 */


// Créer un tableau 

const chars = "abcdefghijklnmopqrstuvwxyz";
const charsUppercase = chars.toUpperCase();
const numbers = "0123456789";
const charsSpecial = ",;:@%/?!$*&";

const all = [chars, charsUppercase, numbers, charsSpecial];
console.log(all);


// Récupérer 8 caractères de manière aléatoire

let password = "";
password += chars[Math.floor(Math.random() * (chars.length))];
password += charsUppercase[Math.floor(Math.random() * (charsUppercase.length))];
password += numbers[Math.floor(Math.random() * (numbers.length))];
password += charsSpecial[Math.floor(Math.random() * (charsSpecial.length))];

console.log(password);


function charsRandom(all, lengthPassword) {
    for(let i = password.length; i <= lengthPassword; i++) {
        let tableRandom = all[Math.floor(Math.random() * (all.length))];

        let charsNumber = tableRandom[Math.floor(Math.random() * (tableRandom.length))];

        password += charsNumber;
    }
    console.log(password);
}

charsRandom(chars, 20);




// Afficher le mot de passe

// Shuffle all