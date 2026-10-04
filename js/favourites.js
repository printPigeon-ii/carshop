document.addEventListener("DOMContentLoaded", function () {

    const favouritesGrid =
        document.getElementById("favourites-grid");

    const emptyMessage =
        document.getElementById("empty-favourites");

    const favouritesCount =
        document.getElementById("favourites-count");


    // ========================================
    // GET CURRENT USER
    // ========================================

    const user = JSON.parse(
        localStorage.getItem("carvaultUser")
    );


    // ========================================
    // CHECK LOGIN
    // ========================================

    if (!user || !user.email) {

        favouritesGrid.innerHTML = "";

        emptyMessage.style.display = "block";

        favouritesCount.textContent =
            "Увійдіть, щоб переглядати обране";

        return;
    }


    // ========================================
    // USER-SPECIFIC FAVOURITES KEY
    // ========================================

    const favouritesKey =
        "carvaultFavourites_" +
        user.email.toLowerCase();


    let favourites = JSON.parse(
        localStorage.getItem(favouritesKey)
    ) || [];


    // ========================================
    // UPDATE COUNT
    // ========================================

    function updateCount() {

        const count = favourites.length;

        if (count === 1) {

            favouritesCount.textContent =
                "1 автомобіль";

        } else if (count >= 2 && count <= 4) {

            favouritesCount.textContent =
                count + " автомобілі";

        } else {

            favouritesCount.textContent =
                count + " автомобілів";

        }
    }


    // ========================================
    // DISPLAY FAVOURITES
    // ========================================

    function displayFavourites() {

        favouritesGrid.innerHTML = "";

        updateCount();


        if (favourites.length === 0) {

            emptyMessage.style.display = "block";
            favouritesGrid.style.display = "none";

            return;
        }


        emptyMessage.style.display = "none";
        favouritesGrid.style.display = "grid";


        favourites.forEach(function (carId) {

            const car = cars[carId];

            if (!car) return;


            const card =
                document.createElement("div");

            card.className = "car-card";


            card.innerHTML = `
                <div class="car-image-wrapper">

                    <img
                        class="car-card-image"
                        src="${car.mainImage}"
                        alt="${car.name}"
                    >

                    <button
                        class="favourite-button favourite-active"
                        data-car-id="${carId}"
                        type="button"
                        aria-label="Видалити з обраного"
                    >
                        ♥
                    </button>

                    ${car.recommended ? `
                        <span class="recommended-badge">
                            РЕКОМЕНДОВАНО
                        </span>
                    ` : ""}

                </div>


                <div class="car-card-content">

                    <p class="car-make">
                        ${car.make}
                    </p>

                    <h2>
                        ${car.name}
                    </h2>

                    <p class="car-description">
                        ${car.description}
                    </p>

                    <div class="car-info">
                        <span>${car.year}</span>
                        <span>${car.mileage} км</span>
                        <span>${car.fuel}</span>
                    </div>


                    <div class="car-card-bottom">

                        <strong class="car-price">
                            ${car.price}
                        </strong>

                        <a
                            href="car-details.html?id=${carId}"
                            class="btn-primary"
                        >
                            Переглянути
                        </a>

                    </div>

                </div>
            `;


            favouritesGrid.appendChild(card);

        });

    }


    // ========================================
    // REMOVE FROM FAVOURITES
    // ========================================

    favouritesGrid.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".favourite-button"
                );


            if (!button) return;


            const carId =
                String(button.dataset.carId);


            favourites =
                favourites.filter(function (id) {

                    return String(id) !== carId;

                });


            localStorage.setItem(
                favouritesKey,
                JSON.stringify(favourites)
            );


            displayFavourites();

        }
    );


    // ========================================
    // INITIAL DISPLAY
    // ========================================

    displayFavourites();

});