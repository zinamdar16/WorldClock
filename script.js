const select = document.getElementById("citySelect");
const timeDisplay = document.getElementById("time");
const cityName = document.getElementById("cityName");
const themeToggle = document.getElementById("themeToggle");

function updateTime() {
  const tz = select.value;
  const city = select.options[select.selectedIndex].text;
  const now = new Date().toLocaleString("en-US", { timeZone: tz });
  timeDisplay.innerText = now;
  cityName.innerText = city;
}

select.addEventListener("change", updateTime);
setInterval(updateTime, 1000);
updateTime();

// Light/Dark Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

