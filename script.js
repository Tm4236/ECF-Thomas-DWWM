// Animation for the carousel
let currentIndex = 0; // Variable to track the current slide
const slides = document.querySelectorAll(".carousel-container .slide"); // Select all slides in the carousel

// Function to show the next slide
function showNextSlide() {
  slides[currentIndex].classList.remove("active"); // Remove the active class from the current slide
  currentIndex = (currentIndex + 1) % slides.length; // Increment the index and loop back to the first slide when reaching the end
  slides[currentIndex].classList.add("active"); // Add the active class to the next slide
}

// Initialize the carousel with an interval of 3 seconds (3000 milliseconds)
setInterval(showNextSlide, 5000);

// Select all artist cards
const artistCards = document.querySelectorAll(".artist-card");

// Function to play sound on hover
artistCards.forEach((card) => {
  const audio = card.querySelector("audio"); // Select the audio element within the artist card
  card.addEventListener("mouseenter", () => {
    audio.play(); // Play the sound when the mouse enters the card
  });

  card.addEventListener("mouseleave", () => {
    audio.pause(); // Pause the sound when the mouse leaves the card
    audio.currentTime = 0; // Reset the sound to the beginning
  });
});

// Select the button and audio for the "Réservez vos billets" button
const reserveButton = document.getElementById("reserve-button");
const clickSound = document.getElementById("click-sound");

// Add event listener for mouseenter to play sound when the mouse hovers over the button
reserveButton.addEventListener("mouseenter", () => {
  clickSound.play();
});

// Optionally, play the sound on button click
reserveButton.addEventListener("click", (event) => {
  // Play the sound when the button is clicked
  clickSound.play();
});
// Sélectionner le bouton hamburger et la liste de navigation
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

// Ajouter un événement pour activer/désactiver le menu
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
