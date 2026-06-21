/* =========================
VALIDARE FORMULAR CONTACT
========================= */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
e.preventDefault();


const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const message = document.getElementById("message").value.trim();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{8,15}$/;

// verificare câmpuri goale
if (!name || !email || !phone || !message) {
    alert("Toate câmpurile sunt obligatorii!");
    return;
}

// validare email
if (!emailRegex.test(email)) {
    alert("Email invalid!");
    return;
}

// validare telefon
if (!phoneRegex.test(phone)) {
    alert("Telefon invalid! Introdu doar cifre (8-15).");
    return;
}

// succes
alert("Produsul a fost comandat cu succes! Un reprezentant Flora Express vă va contacta în curând.");

form.reset();
//window.location.href = "index.html";

});


