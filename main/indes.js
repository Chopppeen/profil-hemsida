const darkModeButton = document.querySelector('.darkmodebutton');

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    document.querySelector('.rubrik').classList.toggle('dark-mode');
    document.querySelector('.nav-bar').classList.toggle('dark-mode');
    document.querySelector('.footer').classList.toggle('dark-mode');
});
