function sayHello(message: string) {
    const firstName: string | null = prompt("Quel est ton prénom ?");
    const hour = new Date().getHours();
    if (hour > 5 || hour < 18) {
        message = "Bonjour !";
    } else {
        message = "Bonsoir !";
    }
    message = message.substring(0, message.length - 1) + firstName + " !";
    document.querySelector("h1")!.innerText = message;
}

sayHello("");
