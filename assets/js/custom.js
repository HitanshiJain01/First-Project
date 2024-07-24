// BANNER SLIDER

$(document).ready(function () {
    $('.banner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: 'unslick'
            }
        ]
    });
});

// SERVICE SLIDER

$(document).ready(function () {
    $('.service__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerpadding: '60px',
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 999,
                settings: 'unslick',
            },
            // {variableWidth: true,
            // slidesToShow: 3,
            // slidesToScroll: 3,
            // centerMode: true,
            // infinite: true}
        ]
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             variableWidth: true,
        //             slidesToShow: 1,
        //             slidesToScroll: 3,
        //             centerMode: true,
        //             infinite: true
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             variableWidth: true,
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             infinite: true
        //         }
        //     }
        // ]
    });
});


// COMPANY NAME SLIDER ABOUT-US

$(document).ready(function () {
    $('.company__image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerMode: true,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
});

// TESTIMONIAL SLIDER

$(document).ready(function () {
    $('.testimonial__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerpadding: '60px',
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
});





// SHOP TABBING SECTION
$(document).ready(function () {

    $('ul.category__tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.category__tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

});


// MOBILE MENU
$(document).ready(function () {
    $(".menu-btn a").click(function () {
        $(".nav").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.nav').on('click', function () {
        $(".nav").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.menu__lists a').on('click', function () {
        $(".nav").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });
});