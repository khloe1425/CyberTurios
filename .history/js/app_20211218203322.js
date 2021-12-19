$('.feedback__carousel').owlCarousel({
    loop: true,
    margin: 70,
    gapping: 70,
    slider_count: 3,
    center: true,
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
$('.instructor__carousel').owlCarousel({
    loop: true,
    margin: 70,
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