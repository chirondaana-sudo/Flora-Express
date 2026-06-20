const categoryBtns = document.querySelectorAll(".category-btn");
const products = document.querySelectorAll(".product");

categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryBtns.forEach(b => {
            b.classList.remove("btn-success");
            b.classList.add("btn-outline-success");
        });

        b.classList.remove("btn-success");
        b.classList.add("btn-outline-success");
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

        const cartButtons = document.querySelectorAll(".add-cart");

        cartButtons.forEach(btn => {
            btn.addEventListener("click", () =>{
                window.location.href = "contact.html";
            });

        });