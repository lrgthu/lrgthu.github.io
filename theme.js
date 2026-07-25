(function () {
  const storedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

  if (storedTheme === "light" || (!storedTheme && prefersLight)) {
    document.documentElement.classList.add("light");
  }

  window.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      document.documentElement.classList.toggle("light");
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("light") ? "light" : "dark"
      );
    });
  });
})();
