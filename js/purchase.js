// ============================================
// CARVAULT - PURCHASE SYSTEM
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(
        localStorage.getItem("carvaultUser")
    );

    // ========================================
    // CHECK LOGIN
    // ========================================

    if (!user || !user.email) {

        alert(
            "Будь ласка, увійдіть до акаунта, щоб оформити замовлення."
        );

        window.location.href = "login.html";

        return;
    }


    // ========================================
    // ACCOUNT CART
    // ========================================

    const cartKey =
        "carvaultCart_" +
        user.email.toLowerCase();

    let cart = JSON.parse(
        localStorage.getItem(cartKey)
    ) || [];


    // ========================================
    // CHECK CART
    // ========================================

    if (cart.length === 0) {

        alert(
            "Ваш кошик порожній."
        );

        window.location.href = "cart.html";

        return;
    }


    // ========================================
    // FIND FORM
    // ========================================

    const purchaseForm =
        document.getElementById("purchase-form");

    if (!purchaseForm) {
        return;
    }


    // ========================================
    // GET ELEMENTS
    // ========================================

    const firstName =
        document.getElementById("first-name");

    const lastName =
        document.getElementById("last-name");

    const email =
        document.getElementById("purchase-email");

    const phone =
        document.getElementById("phone");

    const address =
        document.getElementById("address");

    const totalElement =
        document.getElementById("purchase-total");

    const message =
        document.getElementById("purchase-message");


    // ========================================
    // CALCULATE TOTAL
    // ========================================

    function getPrice(price) {

        return Number(
            price
                .replace("£", "")
                .replace(/,/g, "")
                .trim()
        );
    }


    let total = 0;

    cart.forEach(function (carId) {

        const car = cars[carId];

        if (!car) {
            return;
        }

        total += getPrice(car.price);

    });


    // ========================================
    // DISPLAY TOTAL
    // ========================================

    if (totalElement) {

        totalElement.textContent =
            "£" + total.toLocaleString("en-GB");

    }


    // ========================================
    // PRE-FILL ACCOUNT DETAILS
    // ========================================

    if (email) {
        email.value = user.email;
    }

    if (firstName && user.name) {
        firstName.value = user.name;
    }


    // ========================================
    // SUBMIT PURCHASE
    // ========================================

    purchaseForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // --------------------------------
            // GET VALUES
            // --------------------------------

            const customerFirstName =
                firstName
                    ? firstName.value.trim()
                    : "";

            const customerLastName =
                lastName
                    ? lastName.value.trim()
                    : "";

            const customerEmail =
                email
                    ? email.value.trim()
                    : user.email;

            const customerPhone =
                phone
                    ? phone.value.trim()
                    : "";

            const customerAddress =
                address
                    ? address.value.trim()
                    : "";


            // --------------------------------
            // VALIDATION
            // --------------------------------

            if (
                customerFirstName === "" ||
                customerLastName === "" ||
                customerEmail === "" ||
                customerPhone === "" ||
                customerAddress === ""
            ) {

                if (message) {

                    message.textContent =
                        "Будь ласка, заповніть усі поля.";

                }

                return;
            }


            // =================================
            // CREATE ORDER NUMBER
            // =================================

            const orderNumber =
                "CV" +
                Date.now()
                    .toString()
                    .slice(-8);


            // =================================
            // CREATE ORDER CAR LIST
            // =================================

            const purchasedCars = [];

            cart.forEach(function (carId) {

                const car = cars[carId];

                if (!car) {
                    return;
                }

                purchasedCars.push({

                    id: String(carId),

                    name: car.name,

                    make: car.make,

                    price: car.price,

                    image: car.mainImage,

                    year: car.year,

                    mileage: car.mileage,

                    fuel: car.fuel

                });

            });


            // =================================
            // CREATE ORDER
            // =================================

            const order = {

                orderNumber: orderNumber,

                date: new Date().toISOString(),

                customer: {

                    firstName:
                        customerFirstName,

                    lastName:
                        customerLastName,

                    email:
                        customerEmail,

                    phone:
                        customerPhone,

                    address:
                        customerAddress

                },

                cars:
                    purchasedCars,

                total:
                    total

            };


            // =================================
            // SAVE ORDER FOR THIS ACCOUNT
            // =================================

            const orderKey =
                "carvaultLastOrder_" +
                user.email.toLowerCase();


            localStorage.setItem(

                orderKey,

                JSON.stringify(order)

            );


            // =================================
            // EMPTY THIS USER'S CART
            // =================================

            localStorage.setItem(

                cartKey,

                JSON.stringify([])

            );


            // =================================
            // GO TO SUCCESS PAGE
            // =================================

            window.location.href =
                "purchase-success.html";

        }
    );

});