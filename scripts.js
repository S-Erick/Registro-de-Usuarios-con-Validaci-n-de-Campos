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


function checkPassword(text){
    return /[A-Z]/.test(text) && /[a-z]/.test(text) && /[0-9]/.test(text) && text.length >= 8
}

const form = document.querySelector('form')
const passwordValidatorText = document.getElementById('password-validator-text')

form.addEventListener('input', (event) => {
    const passwordInput = document.getElementById('password')
    const passwordCheckInput = document.getElementById('password-check')

    if(event.target.id === 'password'){
        let checker = checkPassword(event.target.value)
        if(!checker){
            passwordValidatorText.textContent = 'The password must contain at least: one uppercase letter, one numeric character, at least 8 characters'
        }else{
            passwordValidatorText.textContent = '✅'
        }
    }
    if(event.target.id === 'password-check'){        
        if (passwordInput.value !== passwordCheckInput.value) {
            passwordValidatorText.textContent = 'Passwords do not match!'
        } else {
            passwordValidatorText.textContent = '✅'
        }
    }
})