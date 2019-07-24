$(function () {
    $('body').mousemove(function (event) {
        var pageCoords = "" + event.pageX + "px 100vh";
        $(this).css('background', "radial-gradient(circle at " + pageCoords + ", white, rgb(224,224,224))");
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
            var posModX = 20;
            $(this).css('marginLeft', Math.max(0, -xDistance * posModX) + 'px');
            $(this).css('marginRight', Math.max(0, xDistance * posModX) + 'px');
            $(this).css('marginTop', Math.max(0, -yDistance * posModX) + 'px');
            $(this).css('marginBottom', Math.max(0, yDistance * posModX) + 'px');
        });
    });
    SequentialFade();
});

function SequentialFade(tag = "body *", spacing = 50, length = 500) {
    i = 0;
    $(tag).each(function () {
        $(this).delay(spacing * i).fadeTo(500, 1);
        i++;
    });
}

function InProgress() {
    alert("This section is still being built.");
}