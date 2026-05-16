function setAccent(color) {
  document.documentElement.style.setProperty(
    '--accent-color',
    color
  );

  localStorage.setItem('accent-color', color);
}

window.onload = () => {
  const savedColor =
    localStorage.getItem('accent-color');

  if (savedColor) {
    setAccent(savedColor);
  }
};

const themeButtons = document.querySelectorAll('.theme-switcher button');

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    themeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});