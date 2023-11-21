document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");

    let currentIndex = 0;

    function showSlide(index) {
        const items = document.querySelectorAll(".carousel-item");
        items.forEach(item => item.style.display = "none");
        items[index].style.display = "block";
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 3) % 3; // 3 is the number of carousel items
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3; // 3 is the number of carousel items
        showSlide(currentIndex);
    }

    // Initial display
    showSlide(currentIndex);

    // Event listeners for buttons
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
});