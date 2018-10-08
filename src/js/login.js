+$(document).ready(function () {
    $(".register-click").click(function () {
        $(".login").fadeOut("fast"), $(".remember").fadeOut("fast"), $(".left-side img").animate({
            top: "10%"
        }), $("#animate-counter").delay(300).animate({
            opacity: "1"
        }), $(".register").delay(300).fadeIn("slow")
    }), $("#login").click(function () {
        $(".register").fadeOut("fast"), $(".left-side img").delay(100).animate({
            top: "28%"
        }), $("#animate-counter").animate({
            opacity: "0"
        }), $(".login").delay(300).fadeIn("slow")
    }), $("#remember").click(function () {
        $(".login").fadeOut("fast"), $(".remember").delay(300).fadeIn("slow")
    })
});