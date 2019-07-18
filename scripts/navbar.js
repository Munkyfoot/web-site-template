$(function () {
    var pages = {
        'Home': 'index.html',
        'About': 'about.html',
        'Contact': 'javascript:InProgress()'
    };
    var links = "";
    for (var page in pages) {
        links += "<a href='" + pages[page] + "' style='display:none;'>" + page + "</a>";
    }
    $('body').prepend("<div class='navbar'>" + links + "</div>");
    SequentialFade('.navbar > *');
});