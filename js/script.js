const appSwipe = document.querySelector(".swiper-filters");
if (appSwipe) {
    var swiper = new Swiper(".swiper-filters", {
        direction: "horizontal",
        spaceBetween: 10,
        effect: "slide",
        freeMode: true,
            watchSlidesVisibility: true,
            observer: true,
            observeParents: true,

      });
}