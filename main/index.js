function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
    document.querySelector('.rubrik').classList.toggle("dark-mode");
    document.querySelector('.nav-bar').classList.toggle("dark-mode");
    document.querySelector('.footer').classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    const lastVisit = Number(localStorage.getItem("lastVisit"));
    const FIVE_MINUTES = 1000 * 60 * 5;

    if (lastVisit) {
        const now = Date.now();
        const timePassed = now - lastVisit;

        if (timePassed > FIVE_MINUTES) {
            localStorage.removeItem("theme");
            localStorage.removeItem("lastVisit");
        }
    }

    localStorage.setItem("lastVisit", Date.now());

    const toggleButton = document.querySelector('.darkmodebutton');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '💡';
    } else {
        toggleButton.textContent = '🌑';
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
        document.querySelector('.darkmodebutton').textContent = '💡';
    } else {
        document.querySelector('.darkmodebutton').textContent = '🌑';
    }
}

loadTheme();

//Copyright year updater//
const yearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;



// hämta element 
const form = document.querySelector("#contactForm"); 
const successP = document.querySelector("#success"); 

 
// hämta värden från formulär 
const nameInput = document.querySelector("#name"); 
const messageInput = document.querySelector("#message"); 

form.addEventListener("submit", function(event) { 

  // stoppar sidans omladdning   
  event.preventDefault(); 
 

    // .value innehåller det användaren skrivit 
  const name = nameInput.value; 

  const message = messageInput.value; 

 

// Validering för att kontrollera tomma fält   
if (name === "" || message === "") { 

    successP.textContent = "Fyll i alla fält!"; 

    successP.style.color = "red"; 

    return; 

  } 

// console.log används för att kontrollera att rätt data hämtas   
console.log(name, message); 
 

  // bekräftelsemeddelande visas för användaren 
  successP.textContent = "Tack! Meddelandet skickades."; 

  successP.style.color = "green"; 

});

