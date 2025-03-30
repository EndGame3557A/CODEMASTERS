document.addEventListener('DOMContentLoaded', function () {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function nextSlide() {
        slides[index].classList.remove('active');
        index = (index + 1) % totalSlides;
        slides[index].classList.add('active');
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const slideWidth = slides[index].clientWidth;
        const slideOffset = -slideWidth * index;
        document.querySelector('.slides').style.transform = `translateX(${slideOffset}px)`;
    }

    setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos (3000 milisegundos)

    // Añade la clase 'active' al primer slide inicialmente
    slides[index].classList.add('active');
    updateSlidePosition();
});
