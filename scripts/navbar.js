$(function () {
    var pages = {
        'Home': 'index.html',
        'About': 'about.html',
        'Contact': 'contact.html'
    };
    var links = "";
    for (var page in pages) {
        links += "<a href='" + pages[page] + "'>" + page + "</a>";
    }
    $('body').prepend("<div class='navbar'>" + links + "<span id='header'>Template</span></div>");
    SequentialFade('.navbar, .navbar > *', 100);
});