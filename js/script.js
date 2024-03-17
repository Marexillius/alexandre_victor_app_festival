const filterSwipe = document.querySelector(".swiper-filters");
const cardSwipe = document.querySelector(".swiper-featured-artworks");
if (filterSwipe) {
    var swiper1 = new Swiper(".swiper-filters", {
        direction: "horizontal",
        spaceBetween: 10,
        effect: "slide",
        freeMode: true,
    });
}

if (cardSwipe) {
    var swiper2 = new Swiper(".swiper-featured-artworks", {
        direction: "horizontal",
        spaceBetween: 10,
        effect: "slide",
        freeMode: true,
    });
}