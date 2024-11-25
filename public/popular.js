document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider-popular");

    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll("img");
        const prevButton = slider.querySelector(".prev-slide");
        const nextButton = slider.querySelector(".next-slide");
        let currentIndex = 0;

        const updateSlides = () => {
            slides.forEach((slide, index) => {
                slide.className = `transition-all duration-300 absolute overflow-hidden slider-${
                (index - currentIndex + slides.length) % slides.length + 1
                }`;
            });
        };

        // Ensure the slides are initialized properly
        updateSlides();

        // Event listeners for navigation buttons
        if (prevButton) {
            prevButton.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlides();
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlides();
            });
        }

    });
});