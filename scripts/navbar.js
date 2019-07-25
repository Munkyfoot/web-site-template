$(function () {
    var curPage = window.location.pathname.split('/').slice(-1)[0];
    var pages = {
        'Home': 'index.html',
        'About': 'about.html',
        'Contact': 'contact.html'
    };
    var links = "";
    for (var page in pages) {
        var tag = "";
        if(pages[page] == curPage){
            tag = "id='cur_page'";
        }
        links += "<a href='" + pages[page] + "'" + tag + ">" + page + "</a>";
    }
    $('body').prepend("<div class='navbar'>" + links + "<span id='header'>Template</span></div>");
    SequentialFade('.navbar, .navbar > *', 100);
});