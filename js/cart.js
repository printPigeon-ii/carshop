document.addEventListener("DOMContentLoaded", function () {

    const cartItems = document.getElementById("cart-items");
    const emptyCart = document.getElementById("empty-cart");
    const cartContent = document.getElementById("cart-content");

    const cartCount = document.getElementById("cart-count");
    const cartSubtitle = document.getElementById("cart-subtitle");
    const summaryCount = document.getElementById("summary-count");
    const cartTotal = document.getElementById("cart-total");

    const clearCartButton = document.getElementById("clear-cart");
    const checkoutButton = document.getElementById("checkout-button");


    // Get logged-in user
    const user = JSON.parse(
        localStorage.getItem("carvaultUser")
    );


    // User must be logged in
    if (!user || !user.email) {

        cartItems.innerHTML = "";

        emptyCart.style.display = "block";
        cartContent.style.display = "none";

        cartSubtitle.textContent =
            "Увійдіть, щоб переглядати кошик";

        summaryCount.textContent = "0";
        cartTotal.textContent = "£0";

        if (cartCount) {
            cartCount.textContent = "0";
        }

        return;
    }


    // Every account has its own cart
    const cartKey =
        "carvaultCart_" +
        user.email.toLowerCase();


    let cart = JSON.parse(
        localStorage.getItem(cartKey)
    ) || [];


    function getPrice(price) {

        return Number(
            price
                .replace("£", "")
                .replace(/,/g, "")
                .trim()
        );

    }


    function formatPrice(price) {

        return "£" + price.toLocaleString("en-GB");

    }


    function updateCartCount() {

        const count = cart.length;

        if (cartCount) {
            cartCount.textContent = count;
        }

    }


    function displayCart() {

        cartItems.innerHTML = "";

        updateCartCount();


        if (cart.length === 0) {

            emptyCart.style.display = "block";
            cartContent.style.display = "none";

            cartSubtitle.textContent =
                "0 автомобілів";

            summaryCount.textContent = "0";

            cartTotal.textContent = "£0";

            return;
        }


        emptyCart.style.display = "none";
        cartContent.style.display = "grid";


        let total = 0;


        cart.forEach(function (carId) {

            const car = cars[carId];

            if (!car) {
                return;
            }


            const price = getPrice(car.price);

            total += price;


            const item =
                document.createElement("div");

            item.className = "cart-item";


            item.innerHTML =
                '<img class="cart-item-image" ' +
                'src="' + car.mainImage + '" ' +
                'alt="' + car.name + '">' +

                '<div class="cart-item-info">' +

                    '<p class="cart-item-make">' +
                        car.make +
                    '</p>' +

                    '<h2>' +
                        car.name +
                    '</h2>' +

                    '<p class="cart-item-description">' +
                        car.description +
                    '</p>' +

                    '<div class="cart-item-details">' +

                        '<span>' +
                            car.year +
                        '</span>' +

                        '<span>' +
                            car.mileage + " км" +
                        '</span>' +

                        '<span>' +
                            car.fuel +
                        '</span>' +

                    '</div>' +

                '</div>' +

                '<div class="cart-item-right">' +

                    '<strong class="cart-item-price">' +
                        car.price +
                    '</strong>' +

                    '<a ' +
                        'href="car-details.html?id=' +
                        carId +
                        '" ' +
                        'class="cart-view-button">' +
                        'Переглянути' +
                    '</a>' +

                    '<button ' +
                        'class="remove-cart-button" ' +
                        'data-car-id="' +
                        carId +
                        '" ' +
                        'type="button">' +
                        'Видалити' +
                    '</button>' +

                '</div>';


            cartItems.appendChild(item);

        });


        const count = cart.length;


        if (count === 1) {

            cartSubtitle.textContent =
                "1 автомобіль";

        } else if (count >= 2 && count <= 4) {

            cartSubtitle.textContent =
                count + " автомобілі";

        } else {

            cartSubtitle.textContent =
                count + " автомобілів";

        }


        summaryCount.textContent = count;

        cartTotal.textContent =
            formatPrice(total);

    }


    // Remove a car
    cartItems.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".remove-cart-button"
                );

            if (!button) {
                return;
            }


            const carId =
                String(button.dataset.carId);


            cart = cart.filter(function (id) {

                return String(id) !== carId;

            });


            localStorage.setItem(
                cartKey,
                JSON.stringify(cart)
            );


            displayCart();

        }
    );


    // Clear entire cart
    clearCartButton.addEventListener(
        "click",
        function () {

            if (cart.length === 0) {
                return;
            }


            cart = [];


            localStorage.setItem(
                cartKey,
                JSON.stringify(cart)
            );


            displayCart();

        }
    );


    // Go to purchase page
    checkoutButton.addEventListener(
        "click",
        function () {

            if (cart.length === 0) {
                return;
            }


            window.location.href =
                "purchase.html";

        }
    );


    displayCart();

});