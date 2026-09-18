document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadStats();
  initAudio();
});

/* ================= Theme Toggle ================= */
function initTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("easyfrench_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const currentTheme = storedTheme || (prefersDark ? "dark" : "light");
  setTheme(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const active = document.documentElement.getAttribute("data-theme");
    const nextTheme = active === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("easyfrench_theme", theme);
  const toggleBtn = document.getElementById("themeToggleBtn");
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

/* ================= User Stats ================= */
function loadStats() {
  const streak = localStorage.getItem("easyfrench_streak") || "0";
  const reviewed = localStorage.getItem("easyfrench_reviewed_count") || "0";
  const level = localStorage.getItem("easyfrench_active_level") || "A1";

  document.getElementById("statStreak").textContent = streak;
  document.getElementById("statReviewed").textContent = reviewed;
  document.getElementById("statLevel").textContent = level;
}

/* ================= Web Speech Audio ================= */
function initAudio() {
  const audioBtn = document.getElementById("playAudioBtn");
  const wordEl = document.getElementById("dailyWord");

  if (!("speechSynthesis" in window)) {
    audioBtn.style.display = "none";
    return;
  }

  audioBtn.addEventListener("click", () => {
    const textToSpeak = wordEl.textContent.trim();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "fr-FR";
    utterance.rate = 0.9; // Slightly slower for clarity
    window.speechSynthesis.speak(utterance);
  });
}
