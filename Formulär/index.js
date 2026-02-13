// Hämta element 
const form = document.querySelector("#contactForm"); 
const successP = document.querySelector("#success"); 
const errorDiv = document.getElementById("errorMessages");

// Hämta värden från formulär 
const nameInput = document.querySelector("#name"); 
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message"); 
const subjectInput = document.querySelector("#subject");
const termsInput = document.querySelector("#terms");

form.addEventListener("submit", function(event) { 
    // Stoppar sidans omladdning   
    event.preventDefault(); 
    
    // Rensa tidigare meddelanden
    errorDiv.innerHTML = "";
    successP.textContent = "";
    
    let errors = [];

    // Hämta värden
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const subject = subjectInput.value;
    const terms = termsInput.checked;

    // Validering
    if (name === "") {
        errors.push("Namn får inte vara tomt.");
    } else if (!/^[a-zA-ZåäöÅÄÖ\s]+$/.test(name) || name.length < 2 || name.length > 50) {
        errors.push("Namn måste vara 2-50 tecken och endast innehålla bokstäver.");
    }

    if (email === "") {
        errors.push("E-post får inte vara tom.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("E-postadressen är ogiltig.");
    }

    if (message === "") {
        errors.push("Meddelande får inte vara tomt.");
    } else if (message.length < 10 || message.length > 250) {
        errors.push("Meddelandet måste vara mellan 10 och 250 tecken.");
    }

    if (subject === "" || subject === "välj Ämne") {
        errors.push("Välj ett ämne.");
    }

    if (!terms) {
        errors.push("Du måste godkänna villkoren.");
    }

    if (errors.length > 0) {
        errorDiv.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
    } else {
        // Allt är OK!
        console.log(name, email, message, subject);
        successP.textContent = "Tack! Meddelandet skickades."; 
        successP.style.color = "green";
        form.reset();
    }
});

messageInput.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
});