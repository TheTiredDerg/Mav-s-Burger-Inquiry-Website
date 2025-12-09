// Background Carousel.
let currentSlide = 0;
const slides = document.querySelectorAll(".bg-slide");
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add("active");
}

// Change background every 5 seconds.
setInterval(showNextSlide, 5000);

// Smooth scroll for navigation links.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - headerHeight - 20; // 20px extra padding

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Form submission handler.
document
  .getElementById("inquiry-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // This is where admins would typically send this data to a server. But for now, we'll just show a success message.
    alert(
      `Thank you, ${name}! Your message has been received. We will get back to you shortly via email or phone.`
    );

    this.reset();
  });

document.getElementById("current-year").textContent = new Date().getFullYear();

// Remove loading screen after animation
setTimeout(() => {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.remove();
  }
}, 4000);
