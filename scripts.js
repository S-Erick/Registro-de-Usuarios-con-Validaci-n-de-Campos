const card = document.getElementById("card");
const cardH2 = card.querySelector("h2");

const slides = [
    { text: "Render your creativity to the next level.", bg: "img/9.jpg" },
    { text: "Because a picture says more.", bg: "img/8.jpg" },
    { text: "Discover what inspires you.", bg: "img/1.jpg" },
    { text: "Master light, shadow, and detail.", bg: "img/2.jpg" },
    { text: "More of what you love, all in one place.", bg: "img/5.jpg" },
    { text: "Swipe and find your next favorite.", bg: "img/6.jpg" },
    { text: "Design the future in three dimensions.", bg: "img/0.jpg" },
    { text: "Create, share, connect.", bg: "img/7.jpg" },
    { text: "Get inspired every day.", bg: "img/4.jpg" },
    { text: "Your world, your style.", bg: "img/3.jpg" },

];

let index = 0;
function changeSlide() {
    index = (index + 1) % slides.length;

    card.style.opacity = "0"; 
    cardH2.style.opacity = "0";
    cardH2.style.transform = "translateY(10px)";
    setTimeout(() => {
        card.style.backgroundImage = `url(${slides[index].bg})`;
        card.style.opacity = "1";
        cardH2.textContent = slides[index].text;
        cardH2.style.opacity = "1";
        cardH2.style.transform = "translateY(0)";
    }, 500);
}
setInterval(changeSlide, 8000);



const form = document.querySelector('form')
const submitButton = document.getElementById('submit-button')
const passwordValidatorText = document.getElementById('password-validator-text')

const inputPassword = document.getElementById('password')
const inputPasswordcheck = document.getElementById('password-check')

function checkPassword(text){
    return /[A-Z]/.test(text) && /[a-z]/.test(text) && /[0-9]/.test(text) && text.length >= 8
}

const fieldValidity = {
    password: false,
    passwordCheck: false,
}

form.addEventListener('input', (event) => {
    switch(event.target.id){
        case 'password':
            let isPasswordValid = checkPassword(event.target.value)
            fieldValidity.password = isPasswordValid

            if(!isPasswordValid){
                passwordValidatorText.textContent = 'The password must contain at least: one uppercase letter, one numeric character, at least 8 characters'
            }else{
                passwordValidatorText.innerHTML = `<i class='bx bx-check-double'></i>`
            }
            break
        case 'password-check':
            fieldValidity.passwordCheck = event.target.value !== '' && inputPassword.value === event.target.value

            if(inputPassword.value !== event.target.value){
                passwordValidatorText.textContent = 'Passwords do not match!'
            }else {
                passwordValidatorText.innerHTML = `<i class='bx bx-check-double'></i>`;
            }
            break;
    }
    fromValidation()
})

const createdAccount = document.getElementById('created-account')

submitButton.addEventListener('click', () => {
    if (Object.values(fieldValidity).every(value => value)) {
        createdAccount.classList.add('show');
        setTimeout(() => {createdAccount.classList.remove('show')}, 5000)
    }
    else{
        passwordValidatorText.textContent = 'Fill in the fields correctly!'
    }
})

fromValidation()
