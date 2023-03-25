window.addEventListener("DOMContentLoaded", () => {

    const upBtn = document.querySelector(".up-button"),
        downBtn = document.querySelector(".down-button"),
        sidebar = document.querySelector(".sidebar"),
        mainSlide = document.querySelector(".main-slide"),
        container = document.querySelector(".container");

        const slides = mainSlide.querySelectorAll("div").length;  
        let activeSlideIndex = 0;

        sidebar.style.top = `-${(slides - 1) * 100}vh`;

        upBtn.addEventListener("click", () => {
            console.log("e23")
            changeSlide("up");
        });

        downBtn.addEventListener("click", () => {
            changeSlide("down");
        });

        function changeSlide(direction) {
            if (direction === "up") {
                activeSlideIndex++;
                if (activeSlideIndex === slides) {
                    activeSlideIndex = 0;
                }
            } else if (direction === "down") {
                activeSlideIndex--;
                if (activeSlideIndex < 0) {
                    activeSlideIndex = slides - 1;
                }
            }
    
            mainSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`;
            sidebar.style.transform = `translateY(${activeSlideIndex * 100}vh)`;
        }



});