// Theme toggle
window.addEventListener("load", () => {
  const themeToggleLink = document.getElementById("theme-toggle-link");
  const themeText = document.getElementById("theme-text");

  // Check for saved theme preference or use user's system preference
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");
  const savedTheme = localStorage.getItem("theme");

  // Initial theme
  if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeText.textContent = "Light";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeText.textContent = "Dark";
  }

  // Toggle theme on click
  themeToggleLink?.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior (page refresh)
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeText.textContent = "Dark";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeText.textContent = "Light";
    }
  });
});
