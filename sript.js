document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((btn, i) => {
      btn.style.animation = `slideUp 0.5s ease ${0.3 + i * 0.1}s both`;
    });
  });
  
  // Animasi tambahan dari CSS
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }`;
  document.head.appendChild(style);
  