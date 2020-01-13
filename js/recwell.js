if (typeof jQuery != 'undefined') {
    jQuery(document).ready(function () {
        var adx="Events are temporarily unavailable. Please check back later.";
        jQuery.ajax({ dataType: 'script', url: 'http://adminsystems.clayton.edu/adcalendar/EventListSyndicator.aspx?type=N&number=5&category=32-120&department=21&adjustmultidayevents=Y&expire=Y&showCanc=Y&ics=Y&adpid=1017&nem=No+events+are+available+that+match+your+request&sortorder=ASC&browser=new&ver=2.0&target=adx021221'
        });setTimeout(function() {if(typeof response=='undefined'){jQuery('#adx021221').html(adx);}}, 5000);
    });}else { document.getElementById('adx021221').innerHTML = 'Events are temporarily unavailable because the jQuery library cannot be located.';
}


$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "fade",
        pauseOnAction:true,
        pauseOnHover:true,

        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});
