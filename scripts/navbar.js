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
        if (pages[page] == curPage) {
            tag = "id='cur_page'";
        }
        links += "<a href='" + pages[page] + "'" + tag + ">" + page + "</a>";
    }
    if ($(window).width() >= 768) {
        $('body').prepend("<div class='navbar'>" + links + "<span id='header'>Template</span></div>");
    }
    else {
        $('body').prepend("<div class='navbar'><a href='javascript:ToggleMenu()'>Menu</a><span id='header'>Template</span></div>");
        $('body').prepend("<div class='menu'>" + links + "<a href='javascript:ToggleMenu()'>Back</a></div>");
    }
    SequentialFade('.navbar, .navbar > *', 100);
});

function ToggleMenu(){
    if($('.menu').height() == 0){
        $('.menu').css('height', '100%');
        SequentialFade('.menu, .menu > *', 50);
    }
    else{
        $('.menu').css('height', 0);
        SequentialFade('.menu, .menu > *', 50, 500, 0);
    }
}