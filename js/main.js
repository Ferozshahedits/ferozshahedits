(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


  
  

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById('navbar');
    var timer;

    // Function to show the navbar
    function showNavbar() {
        navbar.style.transform = "translateY(0)";
        clearTimeout(timer);
        // Set timer to hide the navbar after 2 seconds
        timer = setTimeout(function() {
            hideNavbar();
        }, 2000);
    }

    // Function to hide the navbar
    function hideNavbar() {
        navbar.style.transform = "translateY(-100%)";
    }

    // Show navbar on scroll
    window.addEventListener('scroll', function() {
        showNavbar();
    });

    // Initially show the navbar
    showNavbar();

    // Hide navbar after 2 seconds initially
    setTimeout(function() {
        hideNavbar();
    }, 2000);
});

    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

   // Expert in using
// JavaScript for Scrolling Animation
const scrollingContainer = document.getElementById("scrollingContainer");

function startScrolling() {
    const expertiseWidth = scrollingContainer.scrollWidth;
    scrollingContainer.style.animation = `scrollHorizontally 15s linear infinite`; // Adjust the duration (15s) as needed
}

startScrolling();



    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    document.addEventListener('DOMContentLoaded', function() {
        var accordions = document.querySelectorAll('.accordion-1 .card-header button');
    
        accordions.forEach(function(accordion) {
            accordion.addEventListener('click', function() {
                var parentCard = this.closest('.card');
                var parentAccordion = this.closest('.accordion-1');
                var allCards = parentAccordion.querySelectorAll('.card');
    
                allCards.forEach(function(card) {
                    if (card !== parentCard) {
                        card.querySelector('.collapse').classList.remove('show');
                    }
                });
    
                var collapse = parentCard.querySelector('.collapse');
                collapse.classList.toggle('show');
            });
        });
    });

    
    
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

