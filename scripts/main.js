$(function () {
    SequentialFade();
});

function SequentialFade(tag = "body > *", spacing = 100, length = 500) {
    i = 0;
    $(tag).each(function () {
        $(this).delay(spacing * i).fadeIn(500);
        i++;
    });
}

function InProgress() {
    alert("This section is still being built.");
}