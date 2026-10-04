// ============================================
// CARVAULT - MAIN JAVASCRIPT
// ============================================


// ========================================
// FAVOURITES
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // Get current user
    const user = JSON.parse(
        localStorage.getItem("carvaultUser")
    );

    // Each account has its own favourites
    let favourites = [];

    if (user && user.email) {

        const favouritesKey =
            "carvaultFavourites_" +
            user.email.toLowerCase();

        favourites = JSON.parse(
            localStorage.getItem(favouritesKey)
        ) || [];
    }


    // ========================================
    // GET CAR ID
    // ========================================

    function getCarId(button) {

        // 1. Check data-car-id
        if (button.dataset.carId) {
            return String(button.dataset.carId);
        }


        // 2. Check URL
        const urlParams =
            new URLSearchParams(window.location.search);

        const urlCarId =
            urlParams.get("id");

        if (urlCarId) {
            return String(urlCarId);
        }


        // 3. Check the car card
        const card =
            button.closest(".catalogue-card");

        if (card) {

            const detailsLink =
                card.querySelector(
                    'a[href*="car-details.html?id="]'
                );

            if (detailsLink) {

                const url =
                    new URL(
                        detailsLink.href,
                        window.location.href
                    );

                return url.searchParams.get("id");
            }
        }

        return null;
    }


    // ========================================
    // UPDATE FAVOURITE BUTTON
    // ========================================

    function updateFavouriteButton(button) {

        const carId =
            getCarId(button);

        if (!carId) {
            return;
        }

        const isFavourite =
            favourites.includes(String(carId));


        // ====================================
        // FAVOURITE
        // ====================================

        if (isFavourite) {

            button.classList.add("liked");


            // Large button
            if (
                button.classList.contains(
                    "favourite-large"
                )
            ) {

                button.textContent =
                    "♥ Видалити з обраного";

            }


            // Small heart
            else {

                button.textContent = "♥";

            }


            button.setAttribute(
                "aria-label",
                "Видалити з обраного"
            );
        }


        // ====================================
        // NOT FAVOURITE
        // ====================================

        else {

            button.classList.remove("liked");


            // Large button
            if (
                button.classList.contains(
                    "favourite-large"
                )
            ) {

                button.textContent =
                    "♡ Додати до обраного";

            }


            // Small heart
            else {

                button.textContent = "♡";

            }


            button.setAttribute(
                "aria-label",
                "Додати до обраного"
            );
        }
    }


    // ========================================
    // UPDATE ALL BUTTONS
    // ========================================

    function updateAllFavouriteButtons() {

        const buttons =
            document.querySelectorAll(
                ".heart-button"
            );

        buttons.forEach(function (button) {

            updateFavouriteButton(button);

        });
    }


    updateAllFavouriteButtons();


    // ========================================
    // CLICK ON FAVOURITE
    // ========================================

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".heart-button"
                );


            // Not a favourite button
            if (!button) {
                return;
            }


            event.preventDefault();


            // ====================================
            // CHECK LOGIN
            // ====================================

            const currentUser =
                JSON.parse(
                    localStorage.getItem("carvaultUser")
                );

            if (
                !currentUser ||
                !currentUser.email
            ) {

                alert(
                    "Будь ласка, увійдіть до акаунта, щоб додавати автомобілі до обраного."
                );

                window.location.href =
                    "login.html";

                return;
            }


            const carId =
                getCarId(button);


            // Couldn't find car
            if (!carId) {

                console.log(
                    "Не вдалося визначити ID автомобіля."
                );

                return;
            }


            const id =
                String(carId);


            // Get this user's favourites key
            const favouritesKey =
                "carvaultFavourites_" +
                currentUser.email.toLowerCase();


            // Make sure we are using the correct
            // user's favourites
            favourites = JSON.parse(
                localStorage.getItem(favouritesKey)
            ) || [];


            // ====================================
            // REMOVE
            // ====================================

            if (favourites.includes(id)) {

                favourites =
                    favourites.filter(
                        function (item) {

                            return item !== id;

                        }
                    );
            }


            // ====================================
            // ADD
            // ====================================

            else {

                favourites.push(id);

            }


            // ====================================
            // SAVE
            // ====================================

            localStorage.setItem(
                favouritesKey,
                JSON.stringify(favourites)
            );


            // ====================================
            // UPDATE EVERY HEART
            // ====================================

            updateAllFavouriteButtons();

        }
    );


    // ========================================
    // ACTIVE NAVIGATION
    // ========================================

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navigationLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navigationLinks.forEach(
        function (link) {

            const linkPage =
                link.getAttribute("href");


            if (
                linkPage === currentPage ||
                (
                    currentPage === "" &&
                    linkPage === "index.html"
                )
            ) {

                link.classList.add("active");

            }

        }
    );


    // ========================================
    // SMOOTH SCROLL
    // ========================================

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        targetId &&
                        targetId !== "#"
                    ) {

                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();

                            target.scrollIntoView({
                                behavior: "smooth"
                            });

                        }

                    }

                }
            );

        }
    );

});


// ========================================
// RECOMMENDED BADGES
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.querySelectorAll(
            ".car-card, .featured-card"
        ).forEach(
            function (card) {

                const heartButton =
                    card.querySelector(
                        ".heart-button"
                    );

                if (!heartButton) {
                    return;
                }


                const carId =
                    heartButton.getAttribute(
                        "data-car-id"
                    );


                const car =
                    cars[carId];


                if (
                    !car ||
                    !car.recommended
                ) {
                    return;
                }


                const imageContainer =
                    card.querySelector(
                        ".car-image"
                    );


                if (!imageContainer) {
                    return;
                }


                if (
                    !imageContainer.querySelector(
                        ".car-badge"
                    )
                ) {

                    const badge =
                        document.createElement(
                            "span"
                        );

                    badge.className =
                        "car-badge";

                    badge.textContent =
                        "РЕКОМЕНДОВАНО";

                    imageContainer.appendChild(
                        badge
                    );
                }

            }
        );

    }
);


// ========================================
// CART INDICATOR
// ========================================

function updateCartIndicator() {

    const user =
        JSON.parse(
            localStorage.getItem("carvaultUser")
        );


    let cart = [];


    // Only show cart for the logged-in account
    if (
        user &&
        user.email
    ) {

        const cartKey =
            "carvaultCart_" +
            user.email.toLowerCase();


        cart = JSON.parse(
            localStorage.getItem(cartKey)
        ) || [];
    }


    const count =
        cart.length;


    document.querySelectorAll(
        ".cart-count"
    ).forEach(
        function (element) {

            element.textContent =
                count;


            if (count > 0) {

                element.classList.add(
                    "has-items"
                );

            } else {

                element.classList.remove(
                    "has-items"
                );

            }

        }
    );
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartIndicator();

    }
);


// ========================================
// LOGIN STATE
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const loginButtons =
            document.querySelectorAll(
                ".login-btn"
            );


        const footerLogin =
            document.querySelector(
                ".footer-login-link"
            );


        const loggedIn =
            localStorage.getItem(
                "carvaultLoggedIn"
            ) === "true" ||

            sessionStorage.getItem(
                "carvaultLoggedIn"
            ) === "true";


        const user =
            JSON.parse(
                localStorage.getItem(
                    "carvaultUser"
                )
            );


        // ====================================
        // NOT LOGGED IN
        // ====================================

        if (
            !loggedIn ||
            !user ||
            !user.email
        ) {

            loginButtons.forEach(
                function (button) {

                    button.textContent =
                        "Увійти";

                    button.href =
                        "login.html";

                }
            );


            if (footerLogin) {

                footerLogin.textContent =
                    "Увійти";

                footerLogin.href =
                    "login.html";

            }

            return;
        }


        // ====================================
        // LOGGED IN
        // ====================================

        loginButtons.forEach(
            function (button) {

                button.textContent =
                    "Вийти";

                button.href =
                    "#";


                button.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        localStorage.removeItem(
                            "carvaultLoggedIn"
                        );

                        sessionStorage.removeItem(
                            "carvaultLoggedIn"
                        );

                        localStorage.removeItem(
                            "carvaultUser"
                        );

                        window.location.href =
                            "index.html";

                    }
                );

            }
        );


        // Footer login button

        if (footerLogin) {

            footerLogin.textContent =
                "Вийти";

            footerLogin.href =
                "#";


            footerLogin.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    localStorage.removeItem(
                        "carvaultLoggedIn"
                    );

                    sessionStorage.removeItem(
                        "carvaultLoggedIn"
                    );

                    localStorage.removeItem(
                        "carvaultUser"
                    );

                    window.location.href =
                        "index.html";

                }
            );

        }

    }
);