$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".dashboardMenu").toggleClass("menuSlide");
        $(".dashboardMenu-list").toggleClass("menuShow");
        $(".hamburger").css("z-index", "3000");
    })

});