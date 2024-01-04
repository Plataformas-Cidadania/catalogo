/*var owl = $('.owl-carousel');
owl.owlCarousel({
    lazyLoad:true,
    dots: false,
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fas fa-chevron-circle-left fa-3x'></i>","<i class='fas fa-chevron-circle-right fa-3x'></i>"],
    autoplay:true,
    autoplayTimeout:15000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    },
    items:1
});*/

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        autoplay:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoplayTimeout:15000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

})
$(document).ready(function() {
    var owl = $('.custom0');
    owl.owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        autoplay:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoplayTimeout:15000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

})


$(document).ready(function() {
    var owl = $('.owl-carousel-top');
    owl.owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        autoplay:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoplayTimeout:15000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

})
