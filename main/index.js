function toggleDarkMode(){ //dark mode toggle//
    document.body.classList.toggle("dark-mode");
    document.querySelector('.rubrik').classList.toggle("dark-mode");
    document.querySelector('.nav-bar').classList.toggle("dark-mode");
    document.querySelector('.footer').classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    localStorage.setItem("theme", "dark");
    localStorage.setItem("lastVisit", Date.now());
    const FIVE_MINUTES = 1000 * 60 * 5;

    if (lastVisit) {
        const now = Date.now();
        const timePassed = now - lastVisit;

        if (timePassed > FIVE_MINUTES) {
            localStorage.removeItem("theme");
            localStorage.removeItem("lastVisit");
        }

    }

    const toggleButton = document.querySelector('.darkmodebutton');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️Ljust läge';
    } else {
        toggleButton.textContent = '🌙Mörkt läge';
    }
}

document.querySelector('.darkmodebutton').addEventListener('click', toggleDarkMode);

function loadTheme(){
    const theme = localStorage.getItem("theme");
    if (theme === "dark"){
        document.body.classList.add("dark-mode");
        document.querySelector('.rubrik').classList.add("dark-mode");
        document.querySelector('.nav-bar').classList.add("dark-mode");
        document.querySelector('.footer').classList.add("dark-mode");
        document.querySelector('.darkmodebutton').textContent = '☀️Ljust läge';
    }
}

loadTheme();

//Copyright year updater//
const yearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

//hamburger menu//
const menuOpenButton = document.getElementById('menu-open');
const menuCloseButton = document.getElementById('menu-close');
const navBar = document.querySelector('.nav-bar');

menuOpenButton.addEventListener('click', () => {
    menuOpenButton.classList.add('hidden');
    menuCloseButton.classList.add('visible');
});