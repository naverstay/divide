var tabs;

$(function ($) {

    var tabBlock = $('.tabBlock'), createControls = $('.createControls');

    tabs = tabBlock.tabs({
        active: 0,
        tabContext: tabBlock.data('tab-context'),
        activate: function (e, u) {

            createControls.attr('data-step', tabs.tabs('option', 'active'))
            
        }
    });

    $('.createTabPrev').on('click', function () {
        var curTab = tabs.tabs('option', 'active');

        if (curTab > 0) {
            tabs.tabs("option", "active", curTab - 1);
        }

        return false;
    });

    $('.createTabNext').on('click', function () {
        var curTab = tabs.tabs('option', 'active');

        tabs.tabs("option", "active", curTab + 1);

        return false;
    });

    $("#create_event_date").datepicker({
        firstDay: 1,
        dateFormat: 'dd.mm.yy',
        changeYear: false,
        defaultDate: +1,
        showOn: "focus",
        nextText: '',
        prevText: '',
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    });
});

$(window).resize(function () {

    console.log('window ' + $(window).width() + ' X ' + $(window).height());

});