$(document).ready(function () {
    var $regexname = /^([a-zA-Z\s]{3,})*$/;
    $('#name, #title, #content').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexname)) {
            $(this).css("border-bottom-color", "red");
        } else {
            $(this).css("border-bottom-color", "#7dbd6e");
        }
    });
    var $regexmail = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.[a-zA-Z0-9]*$/;
    $('#mail').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexmail)) {
            $(this).css("border-bottom-color", "red");
        } else {
            $(this).css("border-bottom-color", "#7dbd6e");
        }
    });
    var $regexphone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3,10})/;
    $('#phone').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexphone)) {
            $(this).css("border-bottom-color", "red");
        } else {
            $(this).css("border-bottom-color", "#7dbd6e");
        }
    });
});