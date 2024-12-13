

// بخش موبایل////////////////////////////////////////////

const loginLabel = document.getElementById("login-label"); 
const signupLabel = document.getElementById("signup-label"); 

loginLabel.addEventListener("click", function () {
    chk.checked = true; 
});

signupLabel.addEventListener("click", function () {
    chk.checked = false; 
});



// "بخش دسکتاپ"//////////////////////////////////////////////


const checkLoginLink = document.querySelector('.check-login');
const orSignupLink = document.querySelector('.or-Signup');
const loginSection = document.querySelector('.login');

checkLoginLink.addEventListener('click', function() {
    loginSection.classList.toggle('active');
});

orSignupLink.addEventListener('click', function() {
    loginSection.classList.toggle('active');
});


// حذف پیغام پیشفرض فرم///////////////////

const signForm = document.getElementById('signup-form');
signForm.addEventListener('submit',function (event) {
    event.preventDefault();
});

const logForm = document.getElementById('login-form');
logForm.addEventListener('submit',function (event) {
    event.preventDefault();
})