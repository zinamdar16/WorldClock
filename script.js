const citySelect = document.getElementById("citySelect");
const timeDisplay = document.getElementById("timeDisplay");
const cityName = document.getElementById("cityName");
const cityFlag = document.getElementById("cityFlag");
const themeToggle = document.getElementById("themeToggle");

function updateTime() {
  const timezone = citySelect.value;
  const selectedOption = citySelect.options[citySelect.selectedIndex];
  const label = selectedOption.text;
  const flag = selectedOption.getAttribute("data-flag");

  const now = new Date().toLocaleString("en-US", { timeZone: timezone });

  cityName.innerText = label;
  timeDisplay.innerText = now;
  cityFlag.src = `https://flagcdn.com/w80/${flag}.png`;
  cityFlag.alt = `${label} flag`;
}

citySelect.addEventListener("change", updateTime);
setInterval(updateTime, 1000);
updateTime();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
