$(document).ready(function () {
    $('#js-slider-2').slick({
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});
