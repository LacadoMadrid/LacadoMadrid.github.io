document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });

        // Cerrar el menú de navegación al hacer clic en un enlace
        const navMenu = document.querySelector('.navbar-nav');
        const close = document.getElementById("close");
        const burger = document.getElementById("burger");

        navMenu.classList.remove("show");
        close.style.display = "none";
        burger.style.display = "block";
      });
    });
  });

  // Cambiar el estilo de la barra de navegación al hacer scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');

  function toggleBurgerDisplay() {
    if (window.innerWidth <= 768) {
      burger.style.display = 'block';
    } else {
      burger.style.display = 'none';
    }
  }

  toggleBurgerDisplay(); // Run on page load

  window.addEventListener('resize', toggleBurgerDisplay); // Run on resize
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



function confirmCall() {
    const confirmIt = confirm("¿Quieres llamar a +34 627 56 03 07?");
    if (confirmIt) {
        window.location.href = "tel:+34627560307";
    }
}

 const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
