function direBonjour() {
    alert("Salut ! Merci d’avoir visité mon mini site 😄");
}

function afficherInfos() {
    console.log("👉 Bienvenue dans la console !");
    console.log("Date actuelle : " + new Date());
    console.log("Nom du site : Mon Mini Site");
    console.log("Tu es sur la section : Projets");
}

function envoyerMessage(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const message = document.getElementById("message").value;

    console.log("Nom : " + nom);
    console.log("Message : " + message);

    document.getElementById("formulaireContact").reset();
    alert("Message envoyé ! 📩");
}
