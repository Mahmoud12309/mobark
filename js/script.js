const bar = document.querySelector("header .bar");
const nav = document.querySelector("header nav");
const close = document.querySelector("header nav .close");

bar.addEventListener("click", () => {
    nav.classList.add("active");
});

close.addEventListener("click", () => {
    nav.classList.remove("active");
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
