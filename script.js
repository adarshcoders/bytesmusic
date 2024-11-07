// Theme Toggle Script
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.checked = savedTheme === "dark";
} else {
    body.classList.add("light");
}

// Toggle theme and save preference
themeToggle.addEventListener("change", () => {
    const theme = themeToggle.checked ? "dark" : "light";
    body.classList.toggle("light", theme === "light");
    body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
});
