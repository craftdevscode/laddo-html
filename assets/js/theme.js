/*=========================================

Template Name: Laddo - Personal Portfolio Template
Author: ThemeSockets
Version: 1.0
Design and Developed by: ThemeSockets

NOTE: This is the custom jQuery file for the template

=========================================*/

(function($) {

    "use strict";

    jQuery(document).ready(function($) {

        // ------------------------------- Slim menu
        $('#navigation').slimmenu(
            {
                resizeWidth: '800',
                collapserTitle: 'Main Menu',
                animSpeed: 'medium',
                easingEffect: null,
                indentChildren: false,
                childrenIndenter: '&nbsp;'
            });

        // ------------------------------- Header Top Add Background
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('add-bg-color');
            } else {
                $('.header-top-area').removeClass('add-bg-color');
            }
        });

        // ------------------------------- Isotope js active
        $('.project-heading li').on('click', function() {
            // Active class add remove
            $('.project-heading li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $(".project-list").isotope({
                filter: selector
            });
        });

        // ------------------------------- Smoth Scroll Effect
        $('a.s-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 75
            }, 1200);
            e.preventDefault();
        });

        // ------------------------------- WOW Animation
        var wow = new WOW({
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       80,
            mobile:       true,
            live:         true,
        });
        wow.init();


        // ------------------------------- Line Progressbar
        $('#p-1').LineProgressbar({
            percentage: 85,
            fillBackgroundColor: '#ED6A5A',
            duration: 2000
        });

        $('#p-2').LineProgressbar({
            percentage: 65,
            fillBackgroundColor: '#00d747'
        });

        $('#p-3').LineProgressbar({
            percentage: 70,
            fillBackgroundColor: '#0FA0CE'
        });

        $('#p-4').LineProgressbar({
            percentage: 55,
            fillBackgroundColor: '#000'
        });

        $('#p-5').LineProgressbar({
            percentage: 59,
            fillBackgroundColor: '#00d747'
        });

        $('#p-6').LineProgressbar({
            percentage: 75,
            fillBackgroundColor: '#FFEA82'
        });


        // ------------------------------- Magnific popup
        $('.img-popup').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });

        // ------------------------------- Theme Slider
        $(".homepage-slides").owlCarousel({
            items:1,
            loop: true,
            autoplay: false,
            dots:false,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
        });

        // ------------------------------- Testimonials Slider
        $('.t-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            //autoplayHoverPause: true,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            dots: true
        });

        // ------------------------------- Canvar Menu
        $(".c-menu-bar").on("click", function(){
            $(".l-c-menu, .c-menu-overlay").addClass("active");
            $(".c-menu-bar").addClass("d-n");

            return false;
        });

        $(".close-menu, .c-menu-overlay").on("click", function(){
            $(".l-c-menu, .c-menu-overlay").removeClass("active");
            $(".c-menu-bar").removeClass("d-n");
        });

        // ------------------------------- Scroll Top Button
        var scrollTop = $(".scroll-top");
        $(window).scroll(function() {
            var topPos = $(this).scrollTop();
            if (topPos > 150) {
                $(scrollTop).css("opacity", "1");

            } else {
                $(scrollTop).css("opacity", "0");
            }

        });

        $(scrollTop).click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        // ------------------------------- Counter Up JS
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });



    });

    $(window).on ('load', function (){
        // ------------------------------- Isotope
        $(".project-list").isotope();

    })

}(jQuery));