if (typeof jQuery !== 'undefined') {
    (function ($) {
        $('#spinner').ajaxStart(function () {
            $(this).fadeIn();
        }).ajaxStop(function () {
                $(this).fadeOut();
            });
    })(jQuery);
}
$(document).ready(function () {
    $('.pagination').children().wrapAll('<ul>');
    $('.pagination ul').children().wrap('<li>');
});
angular.module('moneyEye', ['me.directive', 'me.controllers', 'me.services', 'me.routeProvider']);