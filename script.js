function openTab(tabName) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  document.getElementById(tabName).classList.add('active');
}

function launchVersion(path) {
  window.location.href = path;
}

function openMods() {
  window.open("https://eaglerrinth.github.io/", "_blank");
}

function setTheme(theme) {
  document.body.className = "theme-" + theme;
}