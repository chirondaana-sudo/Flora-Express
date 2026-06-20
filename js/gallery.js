/* =========================
FILTRARE GALERIE
========================= */

const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        // schimbă culoarea butoanelor
        filterBtns.forEach(button => {
            button.classList.remove("btn-success");
            button.classList.add("btn-outline-success");
        });

        btn.classList.remove("btn-outline-success");
        btn.classList.add("btn-success");

        const category = btn.dataset.category;

        items.forEach(item => {

            if (category === "all" || item.dataset.category === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});
const images = document.querySelectorAll(".gallery-img");
const lightboxImg = document.getElementById("lightboxImg");
const lightbox = new bootstrap.Modal(document.getElementById("lightbox"));

images.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.show();
    });
});