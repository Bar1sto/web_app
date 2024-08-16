let currentIndex = 0;
      const slides = document.querySelectorAll(".carousel-item");

      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }

      showSlide(currentIndex);