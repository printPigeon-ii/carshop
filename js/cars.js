const cars = {

    1: {
        make: "BMW",
        model: "M3 Competition",
        name: "M3 Competition",
        description: "3.0 M3 Competition, автоматична коробка, xDrive",

        price: "£45,995",

        year: "2024",
        mileage: "8 200",
        fuel: "Бензин",
        transmission: "Автоматична",

        engine: "3.0L",
        doors: "4",
        body: "Седан",
        colour: "Чорний",

        recommended: true,

        imageName: "BMW M3",

        mainImage: "images/cars/bmw-m3/main.jpg",
        
        gallery: [
        "images/cars/bmw-m3/front.jpg",
        "images/cars/bmw-m3/rear.jpg",
        "images/cars/bmw-m3/side.jpg",
        "images/cars/bmw-m3/interior.jpg"
        ],

        longDescription:
            "BMW M3 Competition поєднує вражаючу продуктивність із практичністю для щоденного використання. Автомобіль має преміальний салон, сучасні технології та потужний бензиновий двигун."
    },


    2: {
        make: "BMW",
        model: "M4 Competition",
        name: "M4 Competition",
        description: "3.0 M4 Competition, автоматична коробка",

        price: "£51,995",

        year: "2023",
        mileage: "11 500",
        fuel: "Бензин",
        transmission: "Автоматична",

        engine: "3.0L",
        doors: "2",
        body: "Купе",
        colour: "Синій",

        recommended: false,

        imageName: "BMW M4",

        mainImage: "images/cars/bmw-m4/main.jpg",

        gallery: [
        "images/cars/bmw-m4/front.jpg",
        "images/cars/bmw-m4/rear.jpg",
        "images/cars/bmw-m4/side.jpg",
        "images/cars/bmw-m4/interior.jpg"
        ],

        longDescription:
            "BMW M4 Competition — високопродуктивне купе, яке поєднує агресивний дизайн, чудову керованість та преміальний інтер'єр."
    },


    3: {
        make: "AUDI",
        model: "RS3 Sportback",
        name: "RS3 Sportback",
        description: "2.5 TFSI quattro S tronic",

        price: "£39,995",

        year: "2023",
        mileage: "12 400",
        fuel: "Бензин",
        transmission: "Автоматична",

        engine: "2.5L",
        doors: "5",
        body: "Хетчбек",
        colour: "Сірий",

        recommended: true,

        imageName: "AUDI RS3",

        mainImage: "images/cars/audi-rs3/main.jpg",

        gallery: [
        "images/cars/audi-rs3/front.jpg",
        "images/cars/audi-rs3/rear.jpg",
        "images/cars/audi-rs3/side.jpg",
        "images/cars/audi-rs3/interior.png"
        ],

        longDescription:
            "Audi RS3 Sportback поєднує високу продуктивність із практичністю хетчбека. Автомобіль оснащений повним приводом quattro та преміальним салоном."
    },


    4: {
        make: "AUDI",
        model: "RS5 Coupe",
        name: "RS5 Coupe",
        description: "2.9 TFSI quattro Tiptronic",

        price: "£44,500",

        year: "2022",
        mileage: "17 800",
        fuel: "Бензин",
        transmission: "Автоматична",

        engine: "2.9L",
        doors: "2",
        body: "Купе",
        colour: "Червоний",

        recommended: false,

        imageName: "AUDI RS5",

        mainImage: "images/cars/audi-rs5/main.jpg",

        gallery: [
        "images/cars/audi-rs5/front.jpg",
        "images/cars/audi-rs5/rear.jpg",
        "images/cars/audi-rs5/side.jpg",
        "images/cars/audi-rs5/interior.jpg"
        ],

        longDescription:
            "Audi RS5 Coupe поєднує спортивний дизайн, високу продуктивність та зручність для щоденного використання з розкішним салоном."
    },


    5: {
        make: "MERCEDES-BENZ",
        model: "C63 AMG",
        name: "C63 AMG",
        description: "AMG C63 Performance",

        price: "£52,500",

        year: "2024",
        mileage: "6 100",
        fuel: "Бензин",
        transmission: "Автоматична",

        engine: "4.0L",
        doors: "4",
        body: "Седан",
        colour: "Сріблястий",

        recommended: true,

        imageName: "C63 AMG",

        mainImage: "images/cars/mercedes-c63/main.jpg",

        gallery: [
        "images/cars/mercedes-c63/front.jpg",
        "images/cars/mercedes-c63/rear.jpg",
        "images/cars/mercedes-c63/side.jpg",
        "images/cars/mercedes-c63/interior.jpg"
        ],

        longDescription:
            "Mercedes-AMG C63 поєднує розкіш і продуктивність, високоякісний салон та характерний спортивний дизайн AMG."
    },


    6: {
        make: "VOLKSWAGEN",
        model: "Golf R",
        name: "Golf R",
        description: "2.0 TSI 4MOTION DSG",

        price: "£35,995",

        year: "2023",
        mileage: "9 600",
        fuel: "Бензин",
        transmission: "Автоматична",

        engine: "2.0L",
        doors: "5",
        body: "Хетчбек",
        colour: "Білий",

        recommended: false,

        imageName: "GOLF R",

        mainImage: "images/cars/golf-r/main.jpg",

        gallery: [
        "images/cars/golf-r/front.jpg",
        "images/cars/golf-r/rear.jpg",
        "images/cars/golf-r/side.jpg",
        "images/cars/golf-r/interior.jpg"
        ],

        longDescription:
            "Volkswagen Golf R поєднує практичність для щоденного використання з високою продуктивністю, повним приводом та сучасними технологіями."
    }

};


// ============================================
// ОТРИМАННЯ ID АВТОМОБІЛЯ З URL
// ============================================

const urlParams = new URLSearchParams(window.location.search);

const carId = urlParams.get("id");


// ============================================
// ПОШУК АВТОМОБІЛЯ
// ============================================

const car = cars[carId];


// ============================================
// ПЕРЕВІРКА АВТОМОБІЛЯ
// ============================================

if (car) {

    // Назва сторінки

    document.title = `CarVault | ${car.name}`;


    // Навігаційний ланцюжок

    document.getElementById("breadcrumb-name").textContent =
        car.name;


    // Основна інформація

    document.getElementById("car-make").textContent =
        car.make;

    document.getElementById("car-name").textContent =
        car.name;

    document.getElementById("car-description").textContent =
        car.description;


    // Ціна

    document.getElementById("car-price").textContent =
        car.price;


    // Основні характеристики

    document.getElementById("car-year").textContent =
        car.year;

    document.getElementById("car-mileage").textContent =
        car.mileage + " км";

    document.getElementById("car-fuel").textContent =
        car.fuel;

    document.getElementById("car-transmission").textContent =
        car.transmission;


    // Зображення та галерея

    const mainImage = document.getElementById("car-image");
    const thumbnails = document.querySelectorAll(".thumbnail");


    // Перше велике фото = FRONT
    if (mainImage && car.gallery && car.gallery[0]) {

        mainImage.src = car.gallery[0];
        mainImage.alt = car.name;

    }


    // Заповнення мініатюр
    thumbnails.forEach(function (thumbnail, index) {

        const imagePath = car.gallery[index];

        if (imagePath) {

            thumbnail.setAttribute(
                "data-image",
                imagePath
            );

            const thumbnailImage =
                thumbnail.querySelector("img");

            if (thumbnailImage) {

                thumbnailImage.src = imagePath;

                thumbnailImage.alt =
                    car.name + " фото " + (index + 1);

            }

            thumbnail.style.display = "block";

            // Перша мініатюра активна
            if (index === 0) {
                thumbnail.classList.add("active");
            } else {
                thumbnail.classList.remove("active");
            }

        } else {

            thumbnail.style.display = "none";

        }

    });


    // Повний опис

    document.getElementById("long-description").textContent =
        car.longDescription;


    // Детальні характеристики

    document.getElementById("spec-make").textContent =
        car.make;

    document.getElementById("spec-model").textContent =
        car.model;

    document.getElementById("spec-year").textContent =
        car.year;

    document.getElementById("spec-mileage").textContent =
        car.mileage + " км";

    document.getElementById("spec-fuel").textContent =
        car.fuel;

    document.getElementById("spec-transmission").textContent =
        car.transmission;

    document.getElementById("spec-engine").textContent =
        car.engine;

    document.getElementById("spec-doors").textContent =
        car.doors;

    document.getElementById("spec-body").textContent =
        car.body;

    document.getElementById("spec-colour").textContent =
        car.colour;

    const galleryBadge = document.getElementById("gallery-badge");

    if (galleryBadge) {
        galleryBadge.style.display = car.recommended ? "block" : "none";
    }


    const addToCartButton = document.getElementById("add-to-cart");

    if (addToCartButton) {

        addToCartButton.addEventListener("click", function () {

            // Get logged-in user
            const user = JSON.parse(
                localStorage.getItem("carvaultUser")
            );


            // User must be logged in
            if (!user || !user.email) {

                alert(
                    "Будь ласка, увійдіть до акаунта, щоб додати автомобіль до кошика."
                );

                window.location.href = "login.html";

                return;
            }


            // Each account gets its own cart
            const cartKey =
                "carvaultCart_" +
                user.email.toLowerCase();


            let cart = JSON.parse(
                localStorage.getItem(cartKey)
            ) || [];


            const currentCarId = String(carId);


            // Check if car is already in this user's cart
            const alreadyInCart = cart.some(function (id) {

                return String(id) === currentCarId;

            });


            if (alreadyInCart) {

                addToCartButton.textContent =
                    "✓ Уже в кошику";

                return;
            }


            // Add car to this user's cart
            cart.push(currentCarId);


            localStorage.setItem(
                cartKey,
                JSON.stringify(cart)
            );


            // Update cart number in navigation
            if (
                typeof updateCartIndicator ===
                "function"
            ) {
                updateCartIndicator();
            }


            addToCartButton.textContent =
                "✓ Додано до кошика";

        });

    }

}


// ============================================
// АВТОМОБІЛЬ НЕ ЗНАЙДЕНО
// ============================================

else if (carId) {

    document.getElementById("car-name").textContent =
        "Автомобіль не знайдено";

    document.getElementById("car-description").textContent =
        "Автомобіль, який ви шукаєте, не існує.";

}

// =========================================
// IMAGE GALLERY
// =========================================

document.addEventListener("click", function (event) {

    const thumbnail = event.target.closest(".thumbnail");

    if (!thumbnail) {
        return;
    }

    const mainImage = document.getElementById("car-image");

    if (!mainImage) {
        return;
    }

    const imagePath = thumbnail.getAttribute("data-image");

    if (!imagePath) {
        return;
    }

    // Change the large image
    mainImage.src = imagePath;

    // Change active thumbnail
    document.querySelectorAll(".thumbnail").forEach(function (item) {
        item.classList.remove("active");
    });

    thumbnail.classList.add("active");

});

// =========================================
// CARS PAGE FILTERS
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // Only run on the cars catalogue page
    const carsContainer = document.getElementById("cars-container");

    if (!carsContainer) {
        return;
    }


    // =========================================
    // ELEMENTS
    // =========================================

    const makeSelect = document.getElementById("make");
    const modelSelect = document.getElementById("model");
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const fuelSelect = document.getElementById("fuel");
    const transmissionSelect = document.getElementById("transmission");

    const applyButton = document.querySelector(".apply-filters");
    const clearButton = document.querySelector(".clear-filters");

    const resultsCount = document.querySelector(".results-count");
    const noResults = document.getElementById("no-results");


    // =========================================
    // GET CAR PRICE AS NUMBER
    // =========================================

    function getPrice(car) {

        return Number(
            car.price
                .replace("£", "")
                .replace(/,/g, "")
                .replace(/\s/g, "")
        );

    }


    // =========================================
    // FILTER CARS
    // =========================================

    function filterCars() {

        const make = makeSelect.value;
        const model = modelSelect.value;

        const minPrice = minPriceInput.value;
        const maxPrice = maxPriceInput.value;

        const fuel = fuelSelect.value;
        const transmission = transmissionSelect.value;


        let visibleCars = 0;


        // Check every catalogue card
        document.querySelectorAll(".catalogue-card").forEach(function (card) {

            const heartButton =
                card.querySelector(".heart-button");

            if (!heartButton) {
                return;
            }


            const carId =
                heartButton.getAttribute("data-car-id");

            const car =
                cars[carId];


            if (!car) {
                return;
            }


            // =====================================
            // RECOMMENDED BADGE
            // =====================================

            let badge = card.querySelector(".car-badge");

            if (car.recommended) {

                if (!badge) {

                    badge = document.createElement("span");
                    badge.className = "car-badge";
                    badge.textContent = "РЕКОМЕНДОВАНО";

                    const imageContainer =
                        card.querySelector(".catalogue-image");

                    if (imageContainer) {
                        imageContainer.appendChild(badge);
                    }

                }

            } else {

                if (badge) {
                    badge.remove();
                }

            }


            let matches = true;


            // =====================================
            // MANUFACTURER
            // =====================================

            if (make !== "" &&
                car.make.toUpperCase() !== make.toUpperCase()) {

                matches = false;

            }


            // =====================================
            // MODEL
            // =====================================

            if (model !== "" &&
                car.model.toUpperCase() !== model.toUpperCase()) {

                matches = false;

            }


            // =====================================
            // MIN PRICE
            // =====================================

            if (minPrice !== "") {

                if (getPrice(car) < Number(minPrice)) {

                    matches = false;

                }

            }


            // =====================================
            // MAX PRICE
            // =====================================

            if (maxPrice !== "") {

                if (getPrice(car) > Number(maxPrice)) {

                    matches = false;

                }

            }


            // =====================================
            // FUEL
            // =====================================

            if (fuel !== "" &&
                car.fuel !== fuel) {

                matches = false;

            }


            // =====================================
            // TRANSMISSION
            // =====================================

            if (transmission !== "" &&
                car.transmission !== transmission) {

                matches = false;

            }


            // =====================================
            // SHOW / HIDE CARD
            // =====================================

            if (matches) {

                card.style.display = "";
                visibleCars++;

            } else {

                card.style.display = "none";

            }

        });


        // =========================================
        // RESULTS COUNT
        // =========================================

        if (resultsCount) {

            resultsCount.textContent =
                `${visibleCars} автомобілів доступно`;

        }


        // =========================================
        // NO RESULTS
        // =========================================

        if (noResults) {

            if (visibleCars === 0) {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    }

    // =========================================
// SORTING
// =========================================

const sortSelect = document.getElementById("sort");

function sortCars() {

    const sortType = sortSelect.value;

    const cards = Array.from(
        carsContainer.querySelectorAll(".catalogue-card")
    );

    cards.sort(function (cardA, cardB) {

        const idA =
            cardA.querySelector(".heart-button")
                ?.getAttribute("data-car-id");

        const idB =
            cardB.querySelector(".heart-button")
                ?.getAttribute("data-car-id");

        const carA = cars[idA];
        const carB = cars[idB];

        if (!carA || !carB) {
            return 0;
        }

        if (sortType === "recommended") {

            return Number(carB.recommended) -
                   Number(carA.recommended);

        }

        if (sortType === "price-low") {

            return getPrice(carA) -
                   getPrice(carB);

        }

        if (sortType === "price-high") {

            return getPrice(carB) -
                   getPrice(carA);

        }

        if (sortType === "newest") {

            return Number(carB.year) -
                   Number(carA.year);

        }

        return 0;

    });

    cards.forEach(function (card) {

        carsContainer.appendChild(card);

    });

}


// =========================================
// SORT WHEN DROPDOWN CHANGES
// =========================================

if (sortSelect) {

    sortSelect.addEventListener("change", function () {

        sortCars();

    });

}
    // =========================================
    // APPLY FILTERS BUTTON
    // =========================================

    if (applyButton) {

        applyButton.addEventListener("click", function () {

            filterCars();
            
        });

    }


    // =========================================
    // CLEAR FILTERS
    // =========================================

    if (clearButton) {

        clearButton.addEventListener("click", function () {

            makeSelect.value = "";
            modelSelect.value = "";
            minPriceInput.value = "";
            maxPriceInput.value = "";
            fuelSelect.value = "";
            transmissionSelect.value = "";

            filterCars();

        });

    }


    // =========================================
    // HOMEPAGE SEARCH PARAMETERS
    // =========================================

    const params =
        new URLSearchParams(window.location.search);


    const urlMake = params.get("make");
    const urlModel = params.get("model");
    const urlPrice = params.get("price");


    // =========================================
    // APPLY URL FILTERS
    // =========================================

    if (urlMake) {
        makeSelect.value = urlMake;
    }

    if (urlModel) {
        modelSelect.value = urlModel;
    }

    if (urlPrice) {
        maxPriceInput.value = urlPrice;
    }


    // =========================================
    // INITIALISE CARS
    // =========================================

    filterCars();

    sortCars();

    });

const backToCars = document.getElementById("back-to-cars");
const backToFavourites = document.getElementById("back-to-favourites");

if (backToCars && backToFavourites) {

    const cameFromFavourites =
        document.referrer.includes("favourites.html");

    if (cameFromFavourites) {
        backToCars.style.display = "none";
        backToFavourites.style.display = "inline-flex";
    }
}