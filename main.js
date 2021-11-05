$(document).ready(function(){
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        
        // scroll spy
        $('section').each(function(){
            let top = $(window).scrollTop();
            let offset = $(this).offset().top -200;
            let height = $(this).height();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            };
        });
    });

    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('#menu-img').attr('src', src);
    });
    $(".list .btn").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".info").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

});

//////////////////////////////// Scrool Up Button JS
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
// Do something on scroll
var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
if (rootElement.scrollTop / scrollTotal > 0.1) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
} else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
}
}

function scrollToTop() {
// Scroll to top logic
rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
});
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

////////////////////////////// Scrool Up Button JS End /////////////