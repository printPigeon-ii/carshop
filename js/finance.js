// ============================================
// CARVAULT - FINANCE CALCULATOR
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const priceInput =
        document.getElementById("car-price");

    const depositInput =
        document.getElementById("deposit");

    const termInput =
        document.getElementById("term");

    const calculateButton =
        document.getElementById("calculate-button");

    const monthlyPayment =
        document.getElementById("monthly-payment");


    function calculatePayment() {

        const price =
            Number(priceInput.value);

        const deposit =
            Number(depositInput.value);

        const term =
            Number(termInput.value);


        if (
            price <= 0 ||
            deposit < 0 ||
            term <= 0
        ) {

            monthlyPayment.textContent =
                "£0";

            return;
        }


        let amountToFinance =
            price - deposit;


        if (amountToFinance < 0) {
            amountToFinance = 0;
        }


        const payment =
            amountToFinance / term;


        monthlyPayment.textContent =
            "£" +
            payment.toLocaleString(
                "en-GB",
                {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }
            );

    }


    calculateButton.addEventListener(
        "click",
        calculatePayment
    );


    // Calculate initial value
    calculatePayment();

});