document.addEventListener("DOMContentLoaded", () => {
    const arrowLeft = document.querySelector(".arrow-left")
    const arrowRight = document.querySelector(".arrow-right")
    const container = document.querySelector(".slider-container")
    const slides = document.querySelectorAll(".slide-product")

    let index = 0;
    const nextSlide = ()=> {
        container.style.transform = `translateX(-${index * 100}%)`
    }

    arrowLeft.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        nextSlide();
    })

    arrowRight.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        nextSlide();
    })
})