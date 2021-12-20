$('.feedback__carousel').owlCarousel({
    loop: true,
    gapping: 70,
    slider_count: 3,
    center: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        768: {
            items: 2,
            margin: 70
        },
        1024: {
            items: 3,
            margin: 70
        }
    }
})
$('.instructor__carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.partners__carousel').owlCarousel({
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})