$(function () {
    $('.portrait').each(function () {
        var midX = ($(this).children('img').width() - $(this).width()) * 0.5;
        var midY = ($(this).children('img').height() - $(this).height()) * 0.5;
        $(this).scrollLeft(midX);
        $(this).scrollTop(midY);
    });

    $('body').mousemove(function (event) {
        var pageCoords = "" + event.pageX + "px 100vh";
        $(this).css('background', "radial-gradient(circle at " + pageCoords + ", white, rgb(224,224,224))");
        var pageWidth = $(document).width();
        var pageHeight = $(document).height();
        $('body > *:not(div):not(img), .navbar').each(function () {
            var yPosition = $(this).position().top + $(this).outerHeight() * 0.5;
            var yDistance = Math.abs(event.pageY - yPosition) / pageHeight;
            var posModX = (event.pageX / pageWidth - 0.5) * 10 * Math.pow(1 - yDistance, 10);
            $(this).css('paddingLeft', (10 - posModX) + 'px');
            $(this).css('paddingRight', (10 + posModX) + 'px');
        });
        $('div:not(.navbar) > *:not(div):not(img)').each(function () {
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