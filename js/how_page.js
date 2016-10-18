var doc_var, html_var, body_var, browserWindow, header,
    baseM = 0.0714286666666667,
    baseWindowWidth = 1200,
    resolution = 1,
    baseFZ = .7,
    maxFZ = 1;


$(document).ready(function () {

    doc_var = $(document);
    html_var = $('html');
    body_var = $('body');
    browserWindow = $(window);
    header = $('.header');

    browserWindow.on('scroll', function () {
        var scrollLeft = doc_var.scrollLeft() || 0;
        header.css({
            '-webkit-transform:': 'translate(' + (-scrollLeft) + ', 0)',
            '-ms-transform:': 'translate(' + (-scrollLeft) + ', 0)',
            'transform:': 'translate(' + (-scrollLeft) + ', 0)'
        });
    });

    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        //'sectionsColor': ['#ff0', '#f0f', '#0ff', '#00f'],
        'navigation': true,
        'navigationPosition': 'right',
        //'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $('#iphone3, #iphone2, #iphone4').addClass('active');
            }

        },

        onLeave: function (index, newIndex, direction) {
            if (index == 3 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
            }
            else if (index == 3 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
            }

            //$('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
            //$('#staticImg').toggleClass('moveDown', newIndex == 4);
            //$('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        },

        /*
         Needed to maintain the fixed position of the element
         due to problems using translate3d and fixed elements.
         */
        afterRender: function () {

        }

    });
});

$(window).on('resize', function () {

    windowRisize();

    console.log('window ' + $(window).width() + ' X ' + $(window).height());


}).on('load', function () {

    windowRisize();

});

function windowRisize() {

    var newFZ = browserWindow.width() / baseWindowWidth * baseFZ;

    //body_var.css('font-size', (newFZ > maxFZ ? maxFZ : newFZ) + 'em');

}