function envoyerWhatsApp() {

    let nom = document.getElementById("nom").value;
    let telephone = document.getElementById("telephone").value;
    let message = document.getElementById("message").value;

    let numeroWhatsApp = "212771290464";

    let texte =
        "Bonjour, j'ai une nouvelle demande.%0A%0A" +
        "Nom : " + nom + "%0A" +
        "Téléphone : " + telephone + "%0A" +
        "Demande : " + message;

    let url = "https://wa.me/" + numeroWhatsApp + "?text=" + texte;

    window.open(url, "_blank");
}