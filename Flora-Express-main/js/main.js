/* =========================
BACK TO TOP BUTTON
========================= */

const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
if (window.scrollY > 300) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}
});

topBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});

/* =========================
ACTIVE MENU LINK
========================= */

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
link.addEventListener("click", function () {
links.forEach(l => l.classList.remove("active"));
this.classList.add("active");
});
});

/* =========================
CLOSE MOBILE MENU ON CLICK
========================= */

const navLinks = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {
link.addEventListener("click", () => {
if (menu.classList.contains("show")) {
new bootstrap.Collapse(menu).hide();
}
});
});

/* =========================
SMOOTH SCROLL (ANCHORS)
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();


    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        target.scrollIntoView({
            behavior: "smooth"
        });
    }
});

});
