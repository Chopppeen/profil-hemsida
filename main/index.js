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
 


  successP.textContent = "Tack! Meddelandet skickades."; 

  successP.style.color = "green"; 

});


const form = document.getElementById("contactForm");
const errorDiv = document.getElementById("errorMessages");

form.addEventListener("submit", function(event) {

    errorDiv.innerHTML = "";// Rensa tidigare fel
    let errors = [];

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const terms = document.getElementById("terms").checked;

    if (!/^[a-zA-ZåäöÅÄÖ\s]+$/.test(name) || name.length < 2 || name.length > 50) {
        errors.push("Namn måste vara 2-50 tecken.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("E-postadressen är ogiltig.");
    }

    if (message.length < 10 || message.length > 250) {
        errors.push("Meddelandet måste vara mellan 10 och 250 tecken.");
    }

    if (subject === "") {
        errors.push("välj ett ämne.");
    }

    if (!terms) {
        errors.push("Du måste godkänna villkoren.");
    }

    if (errors.length > 0) {
        errorDiv.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
        event.preventDefault();
    }
});