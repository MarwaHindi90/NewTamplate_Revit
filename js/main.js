$(document).ready(function() {

    /*---  stickey menu  ---*/

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 150) {
            $(".sticky-header").removeClass("fixed");
            $('.cart_menu').css('display', 'none');
        } else {
            $(".sticky-header").addClass("fixed");
            $('.cart_menu').css('display', 'inline-block');
        }
    });


    // sidebar menu 
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        // open sidebar
        $('#wrapper').addClass('toggled');
        // fade in the overlay
        $('.overlay-page').addClass('toggled');
    });

    $('#dismiss, .overlay-page').click(function() {
        // hide sidebar
        $('#wrapper').removeClass('toggled');
        // hide overlay
        $('.overlay-page').removeClass('toggled');
    });


    // filter menu 
    $("#filter").click(function(e) {
        e.preventDefault();
        // open filterbar
        $('.navbar').toggleClass('filter-show');

    });


    // Counter 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Partner Carousel
    $('.slider-carousel').owlCarousel({
        loop: true,
        nav: false,
        margin: 10,
        dots: true,
        autoplay: true,
        rtl: true,
        navText: ["<span class='carousel-nav-right'><i class='fas fa-chevron-left '></i></span>",

            "<span class='carousel-nav-left'><i class='fas fa-chevron-right '></i></span>"
        ],
        items: 1,
    });


    // testimonial Carousel
    $('.servies-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        margin: 10,
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
    });

    // dispaly cart carousel
    $('.display-carousel').owlCarousel({
        rtl: true,
        thumbs: true,
        thumbsPrerendered: true,
        // Class that will be used on the thumbnail container
        thumbContainerClass: 'owl-thumbs',

        // Class that will be used on the thumbnail item's
        thumbItemClass: 'owl-thumb-item',
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        items: 1

    });

    // display 3qar carousel
    $('.display_3qar-carousel').owlCarousel({
        rtl: true,
        thumbs: true,
        thumbsPrerendered: true,
        // Class that will be used on the thumbnail container
        thumbContainerClass: 'owl-thumbs',

        // Class that will be used on the thumbnail item's
        thumbItemClass: 'owl-thumb-item',
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        items: 1

    });



    // scroll top element

    var scrollButton = $("#scroll-top");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }

    });

    // Click On Button Top     

    scrollButton.on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });


    $(".show_filter").click(function() {
        $(".sidebar_widget").css('right', '0');
        if ($('.sidebar_widget').hasClass('showed-btn')) {
            $('.sidebar_widget').css('right', '0');
            $('.sidebar_widget').removeClass('showed-btn');
        } else {
            $('.sidebar_widget').addClass('showed-btn');
            $('.sidebar_widget').css('right', '-300px');
        }
    });

    $(".clos_filter").click(function() {
        $(".sidebar_widget").css('right', '0');
        if ($('.sidebar_widget').hasClass('showed-btn')) {
            $('.sidebar_widget').css('right', '0');
            $('.sidebar_widget').removeClass('showed-btn');
        } else {
            $('.sidebar_widget').addClass('showed-btn');
            $('.sidebar_widget').css('right', '-300px');
        }
    });
    $('.show_sort').on('click', function() {
        if ($('.order_filter').hasClass('show_order')) {
            $('.order_filter').css('bottom', '-20px');
            $('.order_filter').removeClass('show_order');
        } else {
            $('.order_filter').addClass('show_order');
            $('.order_filter').css('bottom', '-300px');
        }
    });

    $('.clos_order').on('click', function() {
        if ($('.order_filter').hasClass('show_order')) {
            $('.order_filter').css('bottom', '-20px');
            $('.order_filter').removeClass('show_order');
        } else {
            $('.order_filter').addClass('show_order');
            $('.order_filter').css('bottom', '-300px');
        }
    });
});