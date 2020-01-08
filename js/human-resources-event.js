$(document).ready(function() {
    var adx = "Events are temporarily unavailable. Please check back later.";
    $.ajax({
        dataType: 'script',
        url: 'https://adminsystems.clayton.edu/adcalendar/EventListSyndicator.aspx?type=N&number=5&category=23-102&department=26&adjustmultidayevents=Y&expire=Y&showCanc=Y&adpid=1017&nem=No+events+are+available+that+match+your+request&sortorder=ASC&browser=new&ver=2.0&target=adx032719'
    });
    setTimeout(function() {
        if (typeof response === 'undefined') {
            $('#adx032719').html(adx);
        }
    }, 5000);
});