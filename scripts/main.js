$(function () {
    $('body').mousemove(function (event) {
        var pageCoords = "" + event.pageX + "px 100vh";
        $(this).css('background', "radial-gradient(circle at " + pageCoords + ", white, rgb(224,224,224))");
    });
    SequentialFade();
});

function SequentialFade(tag = "body > *, body div", spacing = 100, length = 500) {
    i = 0;
    $(tag).each(function () {
        $(this).delay(spacing * i).fadeIn(500);
        i++;
    });
}

function InProgress() {
    alert("This section is still being built.");
}