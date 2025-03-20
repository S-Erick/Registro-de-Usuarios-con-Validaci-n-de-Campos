const card = document.getElementById("card");
const cardH2 = card.querySelector("h2");

const slides = [
    { text: "Because a picture says more.", bg: "/img/8.jpg" },
    { text: "Discover what inspires you.", bg: "/img/1.jpg" },
    { text: "More of what you love, all in one place.", bg: "/img/5.jpg" },
    { text: "Swipe and find your next favorite.", bg: "/img/6.jpg" },
    { text: "Explore. Save. Share.", bg: "/img/2.jpg" },
    { text: "The best of the web, all in one place.", bg: "/img/10.jpg" },
    { text: "Create, share, connect.", bg: "/img/7.jpg" },
    { text: "Get inspired every day.", bg: "/img/4.jpg" },
    { text: "Your feed, your inspiration.", bg: "/img/9.jpg" },
    { text: "Your world, your style.", bg: "/img/3.jpg" },

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