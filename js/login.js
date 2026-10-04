// ============================================
// CARVAULT - LOGIN & REGISTER
// ============================================


// ========================================
// REGISTER
// ========================================

const registerForm =
    document.getElementById("register-form");

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("register-email").value
                    .trim()
                    .toLowerCase();

            const password =
                document.getElementById("register-password").value;

            const confirmPassword =
                document.getElementById("confirm-password").value;

            const message =
                document.getElementById("register-message");


            // Check passwords
            if (password !== confirmPassword) {

                message.textContent =
                    "Паролі не збігаються.";

                return;
            }


            // Get all accounts
            let accounts =
                JSON.parse(
                    localStorage.getItem("carvaultAccounts")
                ) || [];


            // Check if email already exists
            const existingAccount =
                accounts.find(
                    function (account) {
                        return account.email === email;
                    }
                );


            if (existingAccount) {

                message.textContent =
                    "Акаунт з такою електронною адресою вже існує.";

                return;
            }


            // Create new account
            const newAccount = {
                name: name,
                email: email,
                password: password
            };


            // Add account to the list
            accounts.push(newAccount);


            // Save ALL accounts
            localStorage.setItem(
                "carvaultAccounts",
                JSON.stringify(accounts)
            );


            // Log the new user in
            localStorage.setItem(
                "carvaultLoggedIn",
                "true"
            );

            localStorage.setItem(
                "carvaultUser",
                JSON.stringify({
                    name: name,
                    email: email
                })
            );


            // Go to home page
            window.location.href =
                "index.html";

        }
    );
}


// ========================================
// LOGIN
// ========================================

const loginForm =
    document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById("email").value
                    .trim()
                    .toLowerCase();

            const password =
                document.getElementById("password").value;


            const message =
                document.getElementById("login-message");


            // Get ALL accounts
            const accounts =
                JSON.parse(
                    localStorage.getItem("carvaultAccounts")
                ) || [];


            // Find account with matching
            // email AND password
            const account =
                accounts.find(
                    function (user) {

                        return (
                            user.email === email &&
                            user.password === password
                        );

                    }
                );


            // Wrong login
            if (!account) {

                message.textContent =
                    "Неправильна електронна адреса або пароль.";

                return;
            }


            // ====================================
            // LOGIN SUCCESSFUL
            // ====================================

            const remember =
                document.getElementById("remember");


            if (
                remember &&
                remember.checked
            ) {

                localStorage.setItem(
                    "carvaultLoggedIn",
                    "true"
                );

            } else {

                sessionStorage.setItem(
                    "carvaultLoggedIn",
                    "true"
                );

            }


            // Save currently logged-in user
            localStorage.setItem(
                "carvaultUser",
                JSON.stringify({
                    name: account.name,
                    email: account.email
                })
            );


            // Go to home page
            window.location.href =
                "index.html";

        }
    );
}