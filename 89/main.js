
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessages = document.getElementById("errorMessages");
    
    // Clear any previous error messages
    errorMessages.innerHTML = "";

    // Validation flag
    let isValid = true;
    let messages = [];

    // Validate name
    if (name === "") {
        messages.push("Name is required.");
        isValid = false;
    }

    // Validate email
    if (email === "") {
        messages.push("Email is required.");
        isValid = false;
    } else if (!validateEmail(email)) {
        messages.push("Please enter a valid email address.");
        isValid = false;
    }

    // Validate message
    if (message === "") {
        messages.push("Message is required.");
        isValid = false;
    }

    // Display error messages if validation fails
    if (!isValid) {
        errorMessages.innerHTML = `<ul><li>${messages.join("</li><li>")}</li></ul>`;
        errorMessages.style.color = "red";
    } else {
        // If the form is valid, show an alert and simulate a form submission
        alert("Thank you for your submission! We will get back to you soon.");
        
        // Replace this part with actual form submission logic (e.g., using AJAX)
        window.location.href = "siri.html"; // Redirect to the home page after submission
    }
}

function validateEmail(email) {
    // Basic email validation regex
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
