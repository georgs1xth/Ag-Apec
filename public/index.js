document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider-main");

    console.log(sliders);

    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll("img");
        const prevButton = slider.querySelector(".prev-slide");
        const nextButton = slider.querySelector(".next-slide");
        let currentIndex = 0;

        const updateSlides = () => {
            slides.forEach((slide, index) => {
            slide.className = `transition-opacity duration-700 ease-in-out ${
                index === currentIndex
                ? "slide-active opacity-100"
                : "slide-next opacity-0"
            }`;
            });
        };

        updateSlides();

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlides();
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlides();
        });
    

    })
    
});