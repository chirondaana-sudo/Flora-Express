
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
