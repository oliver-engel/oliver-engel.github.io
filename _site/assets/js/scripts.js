


// Set active nav link

const nav = document.querySelector(".main-nav-links");
const navLinks = nav.querySelectorAll("a");
const currentURL = window.location.href;

navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("active");
    console.log("added active");
  }

  else {
    link.classList.remove("active");
    console.log("removed active");

  }
});


// Tooltip audio ////////////////////
let success = new Audio('/assets/sounds/success.mp3');

const tooltipTrigger = document.querySelector(".tooltip");
const tooltipText = document.querySelector(".tooltiptext");

tooltipTrigger.addEventListener('click', function () {
  success.play();
  navigator.clipboard.writeText("oliverengel6@gmail.com");
  tooltipText.innerHTML = "Email copied!";

  setTimeout(function () {
    tooltipText.innerHTML = "Click to copy";
  }, 3000);

}, false);


// Micromodal init
document.addEventListener("DOMContentLoaded", function () {

  AOS.init();
  try {
    MicroModal.init({
      awaitCloseAnimation: true,
      onShow: function (modal) {
        console.log("micromodal open");
      },
      onClose: function (modal) {
        console.log("micromodal close");
      }
    });
  } catch (e) {
    console.log("micromodal error: ", e);
  }
});


// Blinking avatar
const defaultImage = '../assets/img/avatar/logo-01.svg';
const blinkingImage = '../assets/img/avatar/logo-02.svg';

let isBlinking = false;

function toggleBlink() {
  const animatedImage = document.getElementById('animated-image');

  if (isBlinking) {
    animatedImage.src = defaultImage;
    isBlinking = false;
  } else {
    animatedImage.src = blinkingImage;
    isBlinking = true;

    setTimeout(() => {
      animatedImage.src = defaultImage;
      isBlinking = false;
    }, 200); // Quickly switch back to default image after 0.1 seconds
  }
}

function getRandomInterval(min, max) {
  return Math.random() * (max - min) + min;
}

function startBlinking() {
  toggleBlink(); // Start with an immediate blink
  const nextBlinkInterval = getRandomInterval(2000, 6000); // Random interval between 2 to 6 seconds
  setTimeout(() => {
    toggleBlink();
    setInterval(toggleBlink, nextBlinkInterval);
  }, nextBlinkInterval);
}
startBlinking();
