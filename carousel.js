document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.project-carousel').forEach(carouselBlock => {

    const carousel = carouselBlock.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const dotsContainer = carouselBlock.querySelector('.carousel-dots');
    const prevBtn = carouselBlock.querySelector('.prev');
    const nextBtn = carouselBlock.querySelector('.next');

    let index = 0;

    /* Crear dots */
    images.forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('span');

    function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function goToSlide(i) {
      index = i;
      carousel.scrollTo({
        left: carousel.clientWidth * index,
        behavior: 'smooth'
      });
      updateDots();
    }

    prevBtn.addEventListener('click', () => {
      index = (index > 0) ? index - 1 : images.length - 1;
      goToSlide(index);
    });

    nextBtn.addEventListener('click', () => {
      index = (index < images.length - 1) ? index + 1 : 0;
      goToSlide(index);
    });

  });

});