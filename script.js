// Smooth scroll
function scrollToSection(id) {
    document.querySelector('#' + id).scrollIntoView({ behavior: 'smooth' });
}

// Basic contact form message simulation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("status").innerText = "Thank you! Your message was sent.";
    setTimeout(() => {
        document.getElementById("status").innerText = "";
    }, 3000);

    this.reset();
});
