const header = document.getElementById("header");

console.log("work");

window.addEventListener("scroll", () => {
    // watch if user scrolls to 200px on y axis.
    // If yes -> fix the header
    if (window.scrollY > 200) {
        header.classList.add("fixed");
        header.classList.add("backdrop-blur-xl");
        header.classList.add("bg-green-950/20");
        header.classList.remove("absolute");
    } else if (window.scrollY < 50) {
        header.classList.remove("backdrop-blur-xl");
        header.classList.remove("bg-green-950/20");
        header.classList.add("absolute");
        header.classList.remove("fixed");
    }
    console.log("work", window.scrollY);
})

// Prevent default behavior of anchor links (smooth scrolling)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

