tui.usageStatistics = false;

const Calendar = tui.Calendar;
var calendar;

window.addEventListener("load", function () {
    calendar = new Calendar('#calendar', {
        defaultView: 'month',
        week: {
            startDayOfWeek: 1
        },
        taskView: false,
        template: {
        }
    });
}, false);