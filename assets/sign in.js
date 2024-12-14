

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

// بخش چپ کانتینر

const signupDescription = document.querySelector('.signup-description');
const loginDescription = document.querySelector('.login-description');

signupDescription.innerHTML = '<span><span style="font-size: 40px; font-weight: bold;">Hello</span><span style="font-size: 20px; font-weight: bold;"> there,</span><br><span>if you are not a member of our family yet, you can join our big family by entering your information.</span>';

loginDescription.innerHTML = '<span><span style="font-size: 40px; font-weight: bold;">Hello</span><span style="font-size: 20px; font-weight: bold;"> friend,</span><br> you are already a member of our family and you can log in to your account by entering your email and password.</span>';


// صفحه هاس لاگین و ساین اپ 
const checkLoginLink = document.querySelector('.check-login');
const orSignupLink = document.querySelector('.or-Signup');
const loginSection = document.querySelector('.login');

checkLoginLink.addEventListener('click', function() {
    loginSection.classList.toggle('active');
    signupDescription.classList.add('sign-active')
    loginDescription.classList.remove('log-active')

});

orSignupLink.addEventListener('click', function() {
    loginSection.classList.toggle('active');
    loginDescription.classList.add('log-active')
    signupDescription.classList.remove('sign-active')
});

// کلیک ها روی لینک و رفتار در سکشن چپ


// حذف پیغام پیشفرض فرم///////////////////

const signForm = document.getElementById('signup-form');
signForm.addEventListener('submit',function (event) {
    event.preventDefault();
});

const logForm = document.getElementById('login-form');
logForm.addEventListener('submit',function (event) {
    event.preventDefault();
})