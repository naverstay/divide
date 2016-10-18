$(document).ready(function () {
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

    confityGen();

});

function confityGen() {
    var confCount = 800,
        confColors = [
            '#200fc8',
            '#98ee38',
            '#5da5cb',
            '#da0831',
            '#f0ed38',
            '#86edae',
            '#3a66c9',
            '#d4ed37',
            '#8000c8',
            '#e27e1e',
            '#c500c8',
            '#d90000',
            '#d90362'
        ],
        presentsBlock = $('#presentsBlock'),
        confUnit = $('<div class="confUnit confity_unit"/>');

    for (var i = 0; i < confCount; i++) {
        
        presentsBlock.append(confUnit.clone()
            .addClass('confity_unit_' + parseInt(10 * Math.random()))
            .css({
                'background': confColors[Math.min(confColors.length, parseInt((confColors.length) * Math.random()))],
                'left': (100 * Math.random()) + '%',
                'top': (100 * Math.random()) + '%'
            }));
    }

}

$(window).resize(function () {

    console.log('window ' + $(window).width() + ' X ' + $(window).height());

});