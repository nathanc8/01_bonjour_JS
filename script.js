let firstName = prompt("Quel est ton prénom ?");
let now = new Date();
let hour = now.getHours();

function sayHello(firstName, hour) {
    let message = "";
    
    if ((hour < 5) || (hour >= 18)) {//double parenthèse car nous avons deux conditions
        message = "Bonsoir !";
    } else {
        message = "Bonjour !";
    }

    message = message.substring(0, message.length - 1) + firstName + " !";//la methode substring permet de conserver seulement certains caractères d'un string

    document.querySelector('h1').innerText = message;
}

sayHello(firstName, hour);