const quoteElement = document.getElementById("quote");
const themeBtn = document.getElementById("themeBtn");
const animateBtn = document.getElementById("animateBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Act as if what you do makes a difference. It does. – William James"
];

let quoteIndex = 0;

window.onload = () => {
  const theme = localStorage.getItem("theme") || "light";
  document.body.classList.add(`${theme}-mode`);

  const playMusic = localStorage.getItem("music") === "on";
  if (playMusic) {
    bgMusic.volume = 0.5;
    bgMusic.play();
  }

  showQuote();
  setInterval(showQuote, 8000);
};

themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

animateBtn.addEventListener("click", () => {
  animateBtn.classList.remove("bounce");
  void animateBtn.offsetWidth;
  animateBtn.classList.add("bounce");

  showQuote();
});

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.volume = 0.5;
    bgMusic.play();
    localStorage.setItem("music", "on");
  } else {
    bgMusic.pause();
    localStorage.setItem("music", "off");
  }
});

function showQuote() {
  quoteElement.style.opacity = 0;
  setTimeout(() => {
    quoteElement.textContent = quotes[quoteIndex];
    quoteElement.style.opacity = 1;
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 500);
}