// Mobile Section ////////////////////////////////////////////

// Manage click events on login and signup labels
const loginLabel = document.getElementById("login-label");
const signupLabel = document.getElementById("signup-label");
const chk = document.getElementById('chk');

// Activate login option
const toggleSection = (isLogin) => {
    chk.checked = isLogin;
};

loginLabel.addEventListener("click", () => toggleSection(true));
signupLabel.addEventListener("click", () => toggleSection(false));


// Desktop Section ////////////////////////////////////////////

// Left container section: Edit signup and login descriptions
const signupDescription = document.querySelector('.signup-description');
const loginDescription = document.querySelector('.login-description');

// Set signup description content
signupDescription.innerHTML = '<span><span style="font-size: 40px; font-weight: bold;">Hi</span><span style="font-size: 20px; font-weight: bold;"> there,</span><br> you are already a member of our family and you can log in to your account by entering your email and password.</span>';

// Set login description content
loginDescription.innerHTML = '<span><span style="font-size: 40px; font-weight: bold;">Hello</span><span style="font-size: 20px; font-weight: bold;"> my friend,</span><br><span>if you are not a member of our family yet, you can join our big family by entering your information.</span>';

// Login and Signup page interaction
const checkLoginLink = document.querySelector('.check-login');
const orSignupLink = document.querySelector('.or-Signup');
const loginSection = document.querySelector('.login');

// Toggle between login and signup state
checkLoginLink.addEventListener('click', function() {
    loginSection.classList.toggle('active');
    signupDescription.classList.toggle('sign-active');
    loginDescription.classList.toggle('log-active');
});

orSignupLink.addEventListener('click', function() {
    loginSection.classList.toggle('active');
    loginDescription.classList.toggle('log-active');
    signupDescription.classList.toggle('sign-active');
});

// Forms Section ////////////////////////////////////////////

// Prevent default form submission
const signForm = document.getElementById('signup-form');
signForm.addEventListener('submit',function (event) {
    event.preventDefault();
});

const logForm = document.getElementById('login-form');
logForm.addEventListener('submit',function (event) {
    event.preventDefault();
});

// Ensure default login description is active on page load
window.addEventListener('DOMContentLoaded', function() {
    signupDescription.classList.add('sign-active');
    loginDescription.classList.remove('log-active');
});

// Validation Section ////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Define input fields for signup and login
    const fullnameInput = document.getElementById('fullname');
    const signupEmailInput = document.getElementById('signup-email');
    const setPasswordInput = document.getElementById('setpassword');
    const confirmPasswordInput = document.getElementById('confirmpassword');
    const loginEmailInput = document.getElementById('login-email');
    const loginPasswordInput = document.getElementById('login-password');

    // Create error message elements for each input field
    const fullnameError = document.createElement('span');
    fullnameError.classList.add('error-message');
    fullnameInput.parentElement.appendChild(fullnameError);

    const signupEmailError = document.createElement('span');
    signupEmailError.classList.add('error-message');
    signupEmailInput.parentElement.appendChild(signupEmailError);

    const setPasswordError = document.createElement('span');
    setPasswordError.classList.add('error-message');
    setPasswordInput.parentElement.appendChild(setPasswordError);

    const confirmPasswordError = document.createElement('span');
    confirmPasswordError.classList.add('error-message');
    confirmPasswordInput.parentElement.appendChild(confirmPasswordError);

    const loginEmailError = document.createElement('span');
    loginEmailError.classList.add('error-message');
    loginEmailInput.parentElement.appendChild(loginEmailError);

    const loginPasswordError = document.createElement('span');
    loginPasswordError.classList.add('error-message');
    loginPasswordInput.parentElement.appendChild(loginPasswordError);

    // Function to limit input length and display error message
    const limitInputLength = (input, maxLength, errorElement, errorMessage) => {
        if (input.value.length > maxLength) {
            input.value = input.value.slice(0, maxLength);
            errorElement.textContent = errorMessage; 
            errorElement.style.display = 'block';
        } else {
            // Clear error message if input is valid
            errorElement.textContent = ''; 
            errorElement.style.display = 'none';
        }
    };

    // Validation functions for email, password, fullname, etc.
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePasswordMatch = () => setPasswordInput.value === confirmPasswordInput.value;
    const validateFullname = (fullname) => /^[A-Za-z]+$/.test(fullname);
    const validatePassword = (password) => /^[A-Za-z0-9]+$/.test(password);
    
    // Function to validate length of Full Name and Password
    const validateFullnameLength = (fullname) => fullname.length >= 4 && fullname.length <= 15;
    const validatePasswordLength = (password) => password.length >= 4 && password.length <= 15;

    // Show error message for invalid inputs
    const showError = (input, errorElement, message) => {
        const inputBox = input.closest('.input-box');

        // Handle error message visibility on mobile
        if (window.innerWidth <= 740) {
            input.placeholder = message;
            errorElement.style.display = 'none'; 
        }
        else {
            // Display error message on desktop
            errorElement.textContent = message; 
            errorElement.style.display = 'block'; 
            input.placeholder = '';
        }

        errorElement.classList.add('active');
        inputBox.classList.add('input-error');
    };

    // Clear error message
    const clearError = (input, errorElement) => {
        const inputBox = input.closest('.input-box');
        errorElement.textContent = ''; 
        errorElement.classList.remove('active');
        inputBox.classList.remove('input-error');
        input.placeholder = '';

        // Handle error message visibility for desktop and mobile
        if (window.innerWidth <= 768) {
            errorElement.style.display = 'none'; 
        } else {
            errorElement.style.display = 'block'; 
        }
    };

    // Handle signup form submission
    signupForm.addEventListener('submit', (event) => {
        let isValid = true;

        // Clear previous error messages
        clearError(fullnameInput, fullnameError);
        clearError(signupEmailInput, signupEmailError);
        clearError(setPasswordInput, setPasswordError);
        clearError(confirmPasswordInput, confirmPasswordError);

        // Validate signup fields
        if (!fullnameInput.value.trim()) {
            showError(fullnameInput, fullnameError, 'Full Name is required.');
            isValid = false;
        } else if (!validateFullnameLength(fullnameInput.value)) {
            showError(fullnameInput, fullnameError, 'Full Name must be 4 to 15 characters.');
            isValid = false;
        } else if (!validateFullname(fullnameInput.value)) {
            showError(fullnameInput, fullnameError, 'Full Name must contain only English letters.');
            isValid = false;
        }

        if (!signupEmailInput.value.trim()) {
            showError(signupEmailInput, signupEmailError, 'Email is required.');
            isValid = false;
        } else if (!validateEmail(signupEmailInput.value)) {
            showError(signupEmailInput, signupEmailError, 'Please enter a valid email.');
            isValid = false;
        }

        if (!setPasswordInput.value.trim()) {
            showError(setPasswordInput, setPasswordError, 'Password is required.');
            isValid = false;
        } else if (!validatePasswordLength(setPasswordInput.value)) {
            showError(setPasswordInput, setPasswordError, 'Password must be 4 to 15 characters.');
            isValid = false;
        } else if (!validatePassword(setPasswordInput.value)) {
            showError(setPasswordInput, setPasswordError, 'Password can only contain letters and numbers.');
            isValid = false;
        }

        if (!validatePasswordMatch()) {
            showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
        let isValid = true;

        // Clear previous error messages
        clearError(loginEmailInput, loginEmailError);
        clearError(loginPasswordInput, loginPasswordError);

        // Validate login fields
        if (!loginEmailInput.value.trim()) {
            showError(loginEmailInput, loginEmailError, 'Email is required.');
            isValid = false;
        } else if (!validateEmail(loginEmailInput.value)) {
            showError(loginEmailInput, loginEmailError, 'Please enter a valid email.');
            isValid = false;
        }

        if (!loginPasswordInput.value.trim()) {
            showError(loginPasswordInput, loginPasswordError, 'Password is required.');
            isValid = false;
        } else if (!validatePasswordLength(loginPasswordInput.value)) {
            showError(loginPasswordInput, loginPasswordError, 'Password must be 4 to 15 characters.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    // Toggle password visibility
    const togglePasswords = document.querySelectorAll('.toggle-password');
    togglePasswords.forEach((toggle) => {
        toggle.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;

            this.classList.toggle('bx-show', type === 'text');
            this.classList.toggle('bx-hide', type === 'password');
        });
    });

});
