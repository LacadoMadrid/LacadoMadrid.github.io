document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let extraContent = this.previousElementSibling;
        if (extraContent.style.display === "none") {
            extraContent.style.display = "block";
            this.textContent = "Leer menos";
        } else {
            extraContent.style.display = "none";
            this.textContent = "Leer más";
        }
    });
});


window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Función para volver arriba con animación suave
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



function confirmCall() {
    const confirmIt = confirm("¿Quieres llamar a +34 627 56 03 07?");
    if (confirmIt) {
        window.location.href = "tel:+34627560307";
    }
}
