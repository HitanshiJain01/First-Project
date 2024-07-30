// SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.menu__items a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active');
        }
        else {
            sectionsClass.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// BANNER SLIDER

$(document).ready(function () {
    $('.banner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
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
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
});


// COMPANY NAME SLIDER ABOUT-US

$(document).ready(function () {
    $('.company__image-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
});

// TESTIMONIAL SLIDER

jQuery(document).ready(function ($) {
    $('.testimonial__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
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