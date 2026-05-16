const accents = {
  green: {
    color: "#008073",
    background: "../img/outdoor.jpg"
  },
  blue: {
    color: "#2980b9",
    background: "../img/outdoor-blue.png"
  },
  red: {
    color: "#c0392b",
    background: "../img/outdoor-red.png"
  }
};

function setAccent(accent) {
  const theme = accents[accent];

  if (!theme) return;

  document.documentElement.style.setProperty(
    '--accent-color',
    theme.color
  );

  const intro = document.querySelector("#intro.section");

  if (intro) {
    intro.style.backgroundImage =
      `url(${theme.background})`;
  }

  localStorage.setItem('accent-color', accent);
}

window.onload = () => {
  const savedAccent =
    localStorage.getItem('accent-color') || 'green';

  setAccent(savedAccent);
};

const themeButtons = document.querySelectorAll('.theme-switcher button');

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    themeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});