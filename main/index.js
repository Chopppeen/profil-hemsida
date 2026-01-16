const toggleButton = document.getElementById('darkModeToggle');
const header = document.querySelector('.rubrik');
const nav = document.querySelector('.nav-bar');
const footer = document.querySelector('.footer');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

/*jag trodde ärligt att det här inte skulle funka men W*/
if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️Ljust läge';
} else {
    toggleButton.textContent = '🌙Mörkt läge';
}});