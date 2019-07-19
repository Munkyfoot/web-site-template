$(function () {
    $('body').mousemove(function (event) {
        var pageCoords = "" + event.pageX + "px 100vh";
        $(this).css('background', "radial-gradient(circle at " + pageCoords + ", white, rgb(224,224,224))");
        var pageWidth = $(document).width();
        var pageHeight = $(document).height();
        var _posModX = (event.pageX / pageWidth - 0.5) * 10;

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
        $('body > *:not(div, img)').each(function () {
            var yDistance = Math.abs(event.pageY - $(this).position().top) / pageHeight;
            posModX = _posModX * (1 - yDistance);
            $(this).css('paddingLeft', (10 - posModX) + 'px');
            $(this).css('paddingRight', (10 + posModX) + 'px');
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