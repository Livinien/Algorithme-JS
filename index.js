function Person(name, age) {
    Person("Flavien", 29);
}

console.log("Hello World");
console.error("Attention, il y a une erreur");
console.warn("Attention, il y a un warning");


// Déclaration de variable

// var, let, const

// La portée des variables
// Déclarer la variable en dehors de la fonction - système de hosting
// Scope de bloc - Selon ou on déclare les variables, elles sont accessibles ou non


// const taxe = 1.2
// const fruits = [
//     'fraise', 'pomme', 'orange'
// ]
// console.table(fruits);

// function ttc(priceht) {
//     return priceht * taux
// }

//console.log(taux);
//ttc(20);



// Types de variable

// string : chaine de caratère en tre double cote ""
// Boolean : true ou false - 0 et 1
// number : Int - Integer
// array : tableau 
// object
// undefined
// NULL


console.log(typeof taux); 


const apprenant = {

    prenom : "Flavien",
    nom : "Mayet",
    age : 29,
    stack : [
        'html', 'css', 'javascript', 'php'],
    isAdmin : false,
};

apprenant.sexe = "male";
delete apprenant.age;
console.log(apprenant);



// Function

// function sayHello(prenom) {
//     console.log(`Bonjour je m'appelle "${prenom}"`);
// }
// sayHello('Flavien');


const sayHello = (prenom) => {
    console.log(`Bonjour je m'appelle "${prenom}"`);
}

sayHello('Flavien');



// Boucles

// for(let i = 1; i < 10; i++) {
//     console.log(i);
// }


let i = 1;
while(i < 10) {
    console.log(i);
    i++;
}

apprenant.stack.forEach((toto) => {
    if(toto === 'php') {
        console.log('dommage pas de php');
    } else {
        console.log("Pas de php");
    }

    if(toto === "html") {
        console.log("super t'es engagé");
    }
    console.log(toto)
});