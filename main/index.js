const toggleButton = document.getElementById('darkModeToggle');
const header = document.querySelector('.rubrik');
const nav = document.querySelector('.nav-bar');
const footer = document.querySelector('.footer');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
});

