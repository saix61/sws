jQuery(document).ready(function () {
    // preload
    // jQuery(".preloader").hide();
    setTimeout(function () {
        jQuery(".preloader").fadeOut(300);
    }, 1000);
    // scroll
    function scroll_fn() {
        var new_scroll = jQuery(window).scrollTop();
        // progress-line
        var prcnt = 100 / (jQuery("html").height() - window.innerHeight) * new_scroll;
        jQuery(".progress-line").css("width", prcnt + "%");
    };
    scroll_fn();
    jQuery(window).on("resize", scroll_fn);
    jQuery(window).on("scroll", scroll_fn);
    // brgr
    jQuery(document).on('click', '.brgr', () => jQuery('header').toggleClass('_active'));
    // accordion
    jQuery(document).on('click', '.item-accordion__head', function () {
        const item = jQuery(this).closest('.item-accordion');
        const accordion = jQuery(this).closest('.accordion')
        const itemList = accordion.find('.item-accordion');

        item.hasClass('_active') ?
            item.removeClass('_active').find('.item-accordion__body').stop().slideUp()
            :
            itemList.removeClass('_active').find('.item-accordion__body').stop().slideUp() &
            item.addClass('_active').find('.item-accordion__body').stop().slideDown()
    });
});