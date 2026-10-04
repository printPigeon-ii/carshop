document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.getElementById("contact-form");

    const successMessage =
        document.getElementById("contact-success");


    if (!contactForm) {
        return;
    }


    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            successMessage.textContent =
                "Дякуємо! Ваше повідомлення успішно надіслано. Це демонстраційна форма.";


            contactForm.reset();

        }
    );

});