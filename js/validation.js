/* =========================
VALIDARE FORMULAR CONTACT
========================= */

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Introduceți numele!");
        return;
    }

    if (surname === "") {
        alert("Introduceți prenumele!");
        return;
    }

    if (email === "") {
        alert("Introduceți adresa de email!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Introduceți o adresă de email validă!");
        return;
    }

    if (phone === "") {
        alert("Introduceți numărul de telefon!");
        return;
    }

    if (phone.length < 8) {
        alert("Numărul de telefon este prea scurt!");
        return;
    }

    if (message.length < 10) {
        alert("Mesajul trebuie să conțină cel puțin 10 caractere!");
        return;
    }

    alert("Mesajul a fost trimis cu succes! 🌸");

    document.getElementById("contactForm").reset();

});
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
alert("Mesaj trimis cu succes! Te contactăm în curând.");

form.reset();


});
