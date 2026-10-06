document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".theme-btn");
  const body = document.body;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedTheme = button.dataset.theme;
      body.setAttribute("data-theme", selectedTheme);

      buttons.forEach((btn) => btn.classList.toggle("active", btn === button));
    });
  });
});
