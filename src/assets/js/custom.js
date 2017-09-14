/* =========================================================
    Page Scrolling
========================================================= */
var $root = $("html, body");
$("a").click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, "") ).offset().top
    }, 500);
    return false;
});