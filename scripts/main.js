$(function () {
    $(window).mousemove(function (event) {
        if ($(this).width() >= 768) {
            var pageCoords = "" + event.pageX + "px 100vh";
            $('body').css('background', "radial-gradient(circle at " + pageCoords + ", white, rgb(224,224,224))");
            var pageWidth = $(document).width();
            var pageHeight = $(document).height();
            $('body > *:not(div):not(img):not(form)').each(function () {
                var yPosition = $(this).position().top + $(this).outerHeight() * 0.5;
                var yDistance = Math.abs(event.pageY - yPosition) / pageHeight;
                var posModX = (event.pageX / pageWidth - 0.5) * 10 * Math.pow(1 - yDistance, 10);
                $(this).css('paddingLeft', (10 - posModX) + 'px');
                $(this).css('paddingRight', (10 + posModX) + 'px');
            });
            $('div:not(.navbar) > *:not(div):not(img):not(form):not(.flexbox), form > label').each(function () {
                var xPosition = $(this).position().left;
                var xDistance = Math.abs(event.pageX - xPosition) / pageWidth;
                var yPosition = $(this).position().top + $(this).outerHeight() * 0.5;
                var yDistance = Math.abs(event.pageY - yPosition) / pageHeight;
                var posModX = Math.pow(1 - xDistance, 10) * Math.pow(1 - yDistance, 10) * 10;
                $(this).css('paddingLeft', posModX + 'px');
            });

            $('.portrait > img').each(function () {
                var xPosition = $(this).position().left + $(this).outerWidth() * 0.5;
                var xDistance = (event.pageX - xPosition) / pageWidth;
                var yPosition = $(this).position().top + $(this).outerHeight() * 0.5;
                var yDistance = (event.pageY - yPosition) / pageHeight;
                var eucDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                var posModX = 5;
                $(this).css('marginLeft', Math.max(0, -xDistance * posModX) + '%');
                $(this).css('marginRight', Math.max(0, xDistance * posModX) + '%');
                $(this).css('marginTop', Math.max(0, -yDistance * posModX) + '%');
                $(this).css('marginBottom', Math.max(0, yDistance * posModX) + '%');
            });
        }
    });

    var fadeDelay = 0;
    if (!GetCookie('visited')) {
        fadeDelay = 1500;
        $('body').prepend("<span id='intro'><img src='./images/logo.png' /></span>");
        setTimeout(function () {
            SequentialFade('#intro', 0, 500, 0);
            SequentialFade('#intro > *', 0, 250, 0);
            setTimeout(function () {
                $('#intro').toggle();
                SetCookie('visited', 'true');
            }, 500);
        }, 1000);
    }

    setTimeout(function () {
        SequentialFade();
    }, fadeDelay);
});

function SequentialFade(tag = "body *:not(#intro):not(#intro *)", spacing = 50, length = 250, to = 1) {
    i = 0;
    $(tag).each(function () {
        $(this).delay(spacing * i).fadeTo(length, to);
        i++;
    });
}

function InProgress() {
    alert("This section is still being built.");
}

function SetCookie(key, value, length = null) {
    var expiration = "";
    if (length != null) {
        var date = new Date();
        date.setTime(date.getTime() + length * 24 * 60 * 60 * 1000);
        expiration = ";expires=" + date.toUTCString() + ";";
    }

    document.cookie = key + "=" + value + expiration;
}

function GetCookie(key) {
    var _key = key + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var _cookie = cookies[i];
        while (_cookie.charAt[0] == ' ') {
            _cookie = _cookie.substring(1);
        }
        if (_cookie.indexOf(key) == 0) {
            return _cookie.substring(key.length, _cookie.length);
        }
    }
}