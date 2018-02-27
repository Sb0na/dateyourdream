function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

if (getCookie("show") === undefined) {
    setCookie("show", "4");
}

$(document).ready(function() {


    // buttons show
    $("#unhide-button").hide();
    $("#hide-button").click(function() {
        $(this).hide();
        $(".header-top").slideUp();
        $("#unhide-button").show();
        $(".header-logo").hide();
    });

    $("#unhide-button").click(function() {
        $(".header-top").slideDown();
        $("#hide-button").show();
        $(this).hide();
        $(".header-logo").show();
    });


    $("#show3").on("click", function() {
        setCookie("show", "3");
        $("#show6img").attr("src", "../img/6.png");
        $("#show4img").attr("src", "../img/4.png");
        $("#show3img").attr("src", "../img/3_active.png");
        $(".girl-gallery__item").removeClass("to3 to4 to6").addClass("to3");
    });

    $("#show4").on("click", function() {
        setCookie("show", "4");
        $("#show6img").attr("src", "../img/6.png");
        $("#show4img").attr("src", "../img/4_active.png");
        $("#show3img").attr("src", "../img/3.png");
        $(".girl-gallery__item").removeClass("to3 to4 to6").addClass("to4");
    });

    $("#show6").on("click", function() {
        setCookie("show", "6");
        $("#show6img").attr("src", "../img/6_active.png");
        $("#show4img").attr("src", "../img/4.png");
        $("#show3img").attr("src", "../img/3.png");
        $(".girl-gallery__item").removeClass("to3 to4 to6").addClass("to6");
    });

    if (getCookie("show") === "3") {
        $("#show6img").attr("src", "../img/6.png");
        $("#show4img").attr("src", "../img/4.png");
        $("#show3img").attr("src", "../img/3_active.png");
        $(".girl-gallery__item").removeClass("to3 to4 to6").addClass("to3");
    }

    if (getCookie("show") === "4") {
        $("#show6img").attr("src", "../img/6.png");
        $("#show4img").attr("src", "../img/4_active.png");
        $("#show3img").attr("src", "../img/3.png");
        $(".girl-gallery__item").removeClass("to3 to4 to6").addClass("to4");
    }

    if (getCookie("show") === "6") {
        $("#show6img").attr("src", "../img/6_active.png");
        $("#show4img").attr("src", "../img/4.png");
        $("#show3img").attr("src", "../img/3.png");
        $(".girl-gallery__item").removeClass("to3 to4 to6").addClass("to6");
    }

    //backtotop

    var btn = $('#backToTop');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    //gallery mosaic
    var wall = new Freewall(".show-mosaic1");
    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 200,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });

    wall.container.find('.brick__icon').on("load", function() {
        wall.fitWidth();
    });
    $(function() {
        wall.fitWidth();
    });

});
