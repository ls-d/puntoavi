document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.proyectos', { delay: 500 });
ScrollReveal().reveal('.servicios-banner-one', { delay: 500 });
ScrollReveal().reveal('.servicios-banner-two', { delay: 500 });
ScrollReveal().reveal('.servicios-banner-three', { delay: 500 });