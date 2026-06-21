const categoryBtns = document.querySelectorAll(".category-btn");
const products = document.querySelectorAll(".product");

categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        categoryBtns.forEach(b => {
            b.classList.remove("btn-success");
            b.classList.add("btn-outline-success");
        });

        btn.classList.remove("btn-outline-success");
        btn.classList.add("btn-success");

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

const sortPrice = document.getElementById("sortPrice");
const productList = document.getElementById("productList");

sortPrice.addEventListener("change", () => {

    const productsArray = Array.from(document.querySelectorAll(".product"));

    productsArray.sort((a, b) => {

        const priceA = Number(a.dataset.price);
        const priceB = Number(b.dataset.price);

        return sortPrice.value === "asc"
            ? priceA - priceB
            : priceB - priceA;
    });

    productsArray.forEach(product => {
        productList.appendChild(product);
    });
});