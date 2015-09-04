/**
 * Created by Joe on 2015/8/22.
 */

$(document).ready(function () {
    $('.js--header-title').addClass('animated fadeIn');


    /* sticky nav*/
    $('.js--section-about-us').waypoint(function (direction) {

            if (direction == "down") {
                $('nav').addClass('sticky animated slideInDown');
                $('nav').addClass('animated slideInDown');
            } else {
                $('nav').removeClass('sticky animated slideInDown');
                $('nav').removeClass('animated slideInDown');


            }
        },
        {

            offset: '60px;'
        });



    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').stop().animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '70%'
    });
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '90%'
    });

    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var $nav = $('.js--main-nav');
        var $icon = $('.js--nav-icon i');

        $nav.slideToggle(200);

        if ($icon.hasClass('ion-navicon-round')) {
            $icon.addClass('ion-close-round');
            $icon.removeClass('ion-navicon-round');
        } else {
            $icon.addClass('ion-navicon-round');
            $icon.removeClass('ion-close-round');
        }
    });

    /*Map*/
    var $map = new GMaps({
        div: '.map',
        lat: 22.629527,
        lng:  120.33,
        zoom:15
    });
    var $marker =$map.addMarker({
        lat: 22.629440,
        lng: 120.312533,
        title: 'Lima',
        infoWindow: {
            content: '<p>AttenzioneStar 驣星軟體</p>'
        }
    });
    $marker.infoWindow.open($map, $marker);



});