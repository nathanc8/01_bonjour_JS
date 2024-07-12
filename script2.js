function sayHello(message) {
    var firstName = prompt("Quel est ton prénom ?");
    var hour = new Date().getHours();
    if (hour > 5 || hour < 18) {
        message = "Bonjour !";
    }
    else {
        message = "Bonsoir !";
    }
    message = message.substring(0, message.length - 1) + firstName + " !";
    document.querySelector("h1").innerText = message;
}
sayHello("");
