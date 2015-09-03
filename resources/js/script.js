/**
 * Created by Joe on 2015/8/22.
 */

$(document).ready(function () {
    $('.js--header-title').addClass('animated fadeIn');

    //在index.html裡面 wp = waypoint  ,例如js--wp-1 方變辨識而已
    /*for the sticky navigation*/
    //todo:改aboutus
    $('.js--section-feature').waypoint(function (direction) {
            //direction 移動或者捲動方向
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        {
            //此為 $('.js--section-feature') 這個元素 和可視窗口的offset
            offset: '60px;'
        });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){

        // 利用.offset() 的方式來取得指定元素的 top
        $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000);
    });

    /* Navigation scroll */
    //會找a裡面的href對應的id區塊,如果id沒設就會搜尋name
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);//.hash可以用來獲取或設置頁面的標籤值，也就是錨點的值
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); //用id抓不到值  就用name來抓
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
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '80%'
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