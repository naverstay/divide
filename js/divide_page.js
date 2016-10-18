var doc_var, html_var, body_var, browserWindow,
    profile_tabs, myGiftSlider, otherGiftSlider,
    $pr_rm_dialog,
    $gift_info_dialog,
    $gift_info_dialog2,
    $new_gift_dialog,
    baseM = 0.0714286666666667,
    baseWindowWidth = 1200,
    resolution = 1,
    baseFZ = 1.4,
    maxFZ = .7;

$(function ($) {

    doc_var = $(document);
    html_var = $('html');
    body_var = $('body');
    browserWindow = $(window);

    if (detectIE()) html_var.addClass('ie');

    resolution = parseInt((window.getComputedStyle(
        document.querySelector('body'), ':before'
    ).getPropertyValue('content')).replace(/\D/g, ''));

    $pr_rm_dialog = $("#pr_rm_dialog").dialog({
        autoOpen: false,
        modal: true,
        closeOnEscape: true,
        closeText: '',
        show: "fade",
        //position: {my: "left center", at: "center center", of: this},
        draggable: true,
        appendTo: '.wrapper',
        dialogClass: 'dialog_global dialog_g_size_1 dialog_g_title_1 dialog_close_butt_mod_1',
        width: (1400 * baseM * resolution) + 'em',
        open: function (event, ui) {
        },
        close: function (event, ui) {

        }
    });

    $('.openRmDialog').on('click', function () {

        $pr_rm_dialog.dialog("open");

        return false;
    });

    $gift_info_dialog = $("#gift_info_dialog").dialog({
        autoOpen: false,
        modal: true,
        closeOnEscape: true,
        closeText: '',
        show: "fade",
        //position: {my: "left center", at: "center center", of: this},
        draggable: true,
        appendTo: '.wrapper',
        dialogClass: 'dialog_global dialog_g_size_2 dialog_g_title_2 dialog_close_butt_mod_2',
        width: (2620 * baseM * resolution) + 'em',
        open: function (event, ui) {
        },
        close: function (event, ui) {

        }
    });

    $('.openGiftInfo').on('click', function () {

        $gift_info_dialog.dialog("open");

        return false;
    });

    $gift_info_dialog2 = $("#gift_info_dialog2").dialog({
        autoOpen: false,
        modal: true,
        closeOnEscape: true,
        closeText: '',
        show: "fade",
        //position: {my: "left center", at: "center center", of: this},
        draggable: true,
        appendTo: '.wrapper',
        dialogClass: 'dialog_global dialog_g_size_2 dialog_g_title_2 dialog_close_butt_mod_2',
        width: (2620 * baseM * resolution) + 'em',
        open: function (event, ui) {
        },
        close: function (event, ui) {

        }
    });

    $('.openGiftInfo2').on('click', function () {

        $gift_info_dialog2.dialog("open");

        return false;
    });

    $new_gift_dialog = $("#new_gift_dialog").dialog({
        autoOpen: false,
        modal: true,
        closeOnEscape: true,
        closeText: '',
        show: "fade",
        //position: {my: "left center", at: "center center", of: this},
        draggable: true,
        appendTo: '.wrapper',
        dialogClass: 'dialog_global dialog_g_size_2 dialog_g_title_2 dialog_close_butt_mod_2',
        width: (2620 * baseM * resolution) + 'em',
        open: function (event, ui) {
        },
        close: function (event, ui) {

        }
    });

    $('.openNewGift').on('click', function () {

        $new_gift_dialog.dialog("open");

        return false;
    });

    all_dialog_close();

});

$(window).on('resize', function () {

    //windowRisize();

    console.log('window ' + $(window).width() + ' X ' + $(window).height());


}).on('load', function () {

    //windowRisize();

    var tabBlock = $('.tabBlock');


    var myFavSlider = new Swiper('.myFavSlider', {
        // Optional parameters
        loop: false,
        setWrapperSize: true,
        // Navigation arrows
        nextButton: '#my_fav_next',
        prevButton: '#my_fav_prev',

        slidesPerView: 3,
        spaceBetween: 0,
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        },
        onInit: function (swiper) {

        }
    });

    var myGiftSlider = new Swiper('.myGiftSlider', {
        // Optional parameters
        loop: false,
        setWrapperSize: true,
        // Navigation arrows
        nextButton: '#my_gift_next',
        prevButton: '#my_gift_prev',

        slidesPerView: 3,
        spaceBetween: 0,
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        },
        onInit: function (swiper) {
            profile_tabs = tabBlock.tabs({
                active: 0,
                tabContext: tabBlock.data('tab-context'),
                activate: function (e, u) {
                    $(e.target).find('.swiper-container').each(function (ind) {
                        this.swiper.update();
                    });

                }
            });

            $('.profile_settings .heightUnit').matchHeight({
                byRow: true,
                property: 'height',
                target: $('.profile_block'),
                remove: false,
                _afterUpdate: function (event, groups) {
                    console.log(event, groups);
                }
            });
        }
    });

    var otherGiftSlider = new Swiper('.otherGiftSlider', {
        // Optional parameters
        loop: false,
        setWrapperSize: true,
        // Navigation arrows
        nextButton: '#other_gift_next',
        prevButton: '#other_gift_prev',

        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
            960: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        },
        onInit: function (swiper) {

        }
    });

});

function windowRisize() {

    var newFZ = browserWindow.width() / baseWindowWidth * baseFZ;

    body_var.css('font-size', (newFZ > maxFZ ? maxFZ : newFZ) + 'em');


}

function all_dialog_close() {
    body_var.on('click', '.ui-widget-overlay', all_dialog_close_gl);
}

function all_dialog_close_gl() {
    $(".ui-dialog-content").each(function () {
        var $this = $(this);
        if (!$this.parent().hasClass('always_open')) {
            $this.dialog("close");
        }
    });
}


/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}