document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = { threshold: 0.3 };

  const elements = document.querySelectorAll(".fade-in, .slide-up");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, observerOptions);

  elements.forEach(el => {
    observer.observe(el);
  });
});