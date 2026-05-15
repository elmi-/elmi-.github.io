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