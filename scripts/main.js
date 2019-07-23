$(function () {
    $('body').mousemove(function (event) {
        var pageCoords = "" + event.pageX + "px 100vh";
        $(this).css('background', "radial-gradient(circle at " + pageCoords + ", white, rgb(224,224,224))");
        var pageWidth = $(document).width();
        var pageHeight = $(document).height();
        //var _posModX = (event.pageX / pageWidth - 0.5) * 10;
        /*
        $('.half, .portrait').each(function () {
            var yDistance = Math.abs(event.pageY - $(this).position().top) / pageHeight;
            posModX = _posModX * (1 - yDistance);
            var baseMargin = pageWidth * 0.5 - $(this).outerWidth() * 0.5
            $(this).css('marginLeft', (baseMargin - posModX) + 'px');
            $(this).css('marginRight', (baseMargin + posModX) + 'px');
        });
        $('body > div:not(.navbar, .half)').each(function () {
            var yDistance = Math.abs(event.pageY - $(this).position().top) / pageHeight;
            posModX = _posModX * (1 - yDistance);
            $(this).css('marginLeft', (10 - posModX) + 'px');
            $(this).css('marginRight', (10 + posModX) + 'px');
        });
        */
        $('body > *:not(div, img), .navbar').each(function () {
            var yPosition = $(this).position().top + $(this).outerHeight() * 0.5;
            var yDistance = Math.abs(event.pageY - yPosition) / pageHeight;
            var posModX = (event.pageX / pageWidth - 0.5) * 10 * Math.pow(1 - yDistance, 10);
            $(this).css('paddingLeft', (10 - posModX) + 'px');
            $(this).css('paddingRight', (10 + posModX) + 'px');
        });
        $('div:not(.navbar) > *:not(div, img)').each(function () {
            var xPosition = $(this).position().left;
            var xDistance = Math.abs(event.pageX - xPosition) / pageWidth;
            var yPosition = $(this).position().top + $(this).outerHeight() * 0.5;
            var yDistance = Math.abs(event.pageY - yPosition) / pageHeight;
            var posModX = Math.pow(1 - xDistance, 10) * Math.pow(1 - yDistance, 10) * 10;
            $(this).css('paddingLeft', posModX + 'px');
        });
    });
    SequentialFade();
});

function SequentialFade(tag = "body > *", spacing = 100, length = 500) {
    i = 0;
    $(tag).each(function () {
        $(this).delay(spacing * i).fadeTo(500, 1);
        i++;
    });
}

function InProgress() {
    alert("This section is still being built.");
}