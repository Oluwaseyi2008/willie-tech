/*======================================
            Preloader
======================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});
/*======================================
            Goods
======================================*/

$(window).on('load', function () {
    //initialize Isotope
    $("#isotope-container").isotope({

    });

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {


        //get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

//Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        //get section id
        var section_id = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(section_id).offset().top -64
        }, 1100);
    });
});
/*======================================
            WOW
======================================*/
//animation on scroll
$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInRight");
    $("#home-text").addClass("animated fadeInUp");
    $("#arrow-down i").addClass("animated bounce infinite");
    $(".about").addClass("animated fadeInUp");
    $(".about-right").addClass("animated fadeInRight");
    $(".about-left").addClass("animated fadeInLeft");
    $("#goods .vertical-heading").addClass("animated fadeInLeft");
    $("#isotope-filters").addClass("animated fadeInUp");
    $("#good-wrapper").addClass("animated bounceIn");
    $("#profile-left").addClass("animated fadeInLeft");
    $(".profile-pic").addClass("animated fadeInRight");
    $("#contact-us .vertical-heading").addClass("animated fadeInLeft");
    $("#contact-right").addClass("animated fadeInRight");
});
/*======================================
            Navigation
======================================*/
/*Show and Hide White Navigation */
$(function () {
    $(window).scroll(function () {
        showHideNav ();

        $(window).scroll(function() {
            showHideNav ();
        });
        
    });

    function showHideNav () {
        if($(window).scrollTop() > 70 ) {
            $("nav").addClass("white-nav-top");

            //show back to top btn
            $("#back-to-top").fadeIn();
            
        } else {
            $("nav").removeClass("white-nav-top");
          
             //hide back to top btn
             $("#back-to-top").fadeOut();
        }

    }
});
/*======================================
            Mobile Menu
======================================*/
$(function () {
    //show mobile nav
    $("#mobile-nav-open-btn").click(function() {
       
        $("#mobile-nav").css("height", "100%");
    });
    //hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
       
        $("#mobile-nav").css("height", "0%");
    });
});































