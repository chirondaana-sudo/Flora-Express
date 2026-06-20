

const categoryBtns = document.querySelectorAll(".category-btn");
const products = document.querySelectorAll(".product");

categoryBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        // schimbă culoarea butoanelor
        categoryBtns.forEach(b => {
            b.classList.remove("btn-success");
            b.classList.add("btn-outline-success");
        });

        btn.classList.remove("btn-outline-success");
        btn.classList.add("btn-success");

        // filtrare produse
        const category = btn.dataset.category;

        products.forEach(product => {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});

// buton Adaugă în coș
const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
});
