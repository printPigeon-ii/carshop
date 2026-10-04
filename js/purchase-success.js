// ============================================
// CARVAULT - PURCHASE SUCCESS
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(
        localStorage.getItem("carvaultUser")
    );

    if (!user || !user.email) {
        window.location.href = "login.html";
        return;
    }


    // Get this user's latest order
    const orderKey =
        "carvaultLastOrder_" +
        user.email.toLowerCase();

    const order = JSON.parse(
        localStorage.getItem(orderKey)
    );


    // If no order exists
    if (!order) {

        const orderNumber =
            document.getElementById("order-number");

        if (orderNumber) {
            orderNumber.textContent =
                "Немає замовлення";
        }

        return;
    }


    // ============================================
    // SHOW ORDER NUMBER
    // ============================================

    const orderNumber =
        document.getElementById("order-number");

    if (orderNumber) {

        orderNumber.textContent =
            order.orderNumber;

    }


    // ============================================
    // SHOW PURCHASED CARS
    // ============================================

    const successCars =
        document.getElementById("success-cars");

    if (
        successCars &&
        order.cars &&
        order.cars.length > 0
    ) {

        successCars.innerHTML = "";


        order.cars.forEach(function (car) {

            const carItem =
                document.createElement("div");

            carItem.className =
                "success-car-item";


            carItem.innerHTML =

                '<img ' +
                    'src="' +
                    car.image +
                    '" ' +
                    'alt="' +
                    car.name +
                    '">' +

                '<div class="success-car-info">' +

                    '<p class="success-car-make">' +
                        car.make +
                    '</p>' +

                    '<h3>' +
                        car.name +
                    '</h3>' +

                    '<p class="success-car-details">' +
                        car.year +
                        ' • ' +
                        car.mileage +
                        ' км • ' +
                        car.fuel +
                    '</p>' +

                    '<strong class="success-car-price">' +
                        car.price +
                    '</strong>' +

                '</div>';


            successCars.appendChild(carItem);

        });

    }
    else if (successCars) {

        successCars.innerHTML =
            "<p>Інформація про автомобіль недоступна.</p>";

    }

});