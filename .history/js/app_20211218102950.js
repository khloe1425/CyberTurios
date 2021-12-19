$('.feedback__carousel').owlCarousel({
    loop: true,
    margin: 70,
    nav: true,
    gapping: 70,
    slider_count: 3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})