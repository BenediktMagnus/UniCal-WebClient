'use strict';

(function() {
    tui.usageStatistics = false;

    const Calendar = tui.Calendar;

    var calendar = new Calendar('#calendar', {
        defaultView: 'week',
        useCreationPopup: true,
        useDetailPopup: true,
        week: {
            startDayOfWeek: 1
        },
        taskView: false,
        template: {
        }
    });
})();