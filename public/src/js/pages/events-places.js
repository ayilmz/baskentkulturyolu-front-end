$(document).ready(function() {
    const regexp = /android|iphone|kindle|ipad/i;
    const isMobileDevice = regexp.test(navigator.userAgent);
    const contentHeight = window.innerHeight - $(".container-header").outerHeight()
    if($(".content-scroll").length > 0 && !isMobileDevice){
        $(".content-scroll").css("height",contentHeight - $(".content-scroll-header").outerHeight(true)+"px");
    }

    if($(".event-filter-select-container").length > 0){
        $(".default-option").click(function(){
            if($(this).parent().find(".select-ul").hasClass("d-none") &&
                $(".event-filter-select-container").find(".select-ul").hasClass("d-none"))
            {
                $(".event-filter-select-container").find(".select-ul").addClass("d-none");
            }
            $(this).parent().find(".select-ul").toggleClass("d-none");
        })
    }

    $("a.event-filter-datapicker").click(function(){
        $(".event-filter-select-container").find(".select-ul").addClass("d-none");
    })
});


$(function() {
    $('#datepicker').daterangepicker({
        "autoapply": true,
        "linkedCalendars": false,
        "locale": {
            "format": "DD.MM.YYYY",
            "separator": " - ",
            "applyLabel": "Uygula",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "daysOfWeek": [
                "Pz",
                "Pr",
                "Sa",
                "Çr",
                "Pr",
                "Cm",
                "Ct"
            ],
            "monthNames": [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık"
            ],
            "firstDay": 1
        }
    }, function(start, end, label) {
        $.fancybox.close();
        $("#start-date").html(start.format('DD.MM.YYYY'));
        $("#finish-date").html(end.format('DD.MM.YYYY'));
        console.log("A new date selection was made: " + start.format('DD.MM.YYYY') + ' to ' + end.format('DD.MM.YYYY'));
    });


    $('.daterangepicker').hide();
    $('.drp-calendar.right').hide();
    $('.cancelBtn').hide();
    $('.drp-selected').hide();
    $('.drp-calendar.left').addClass('single');

    $('.calendar-table').on('DOMSubtreeModified', function() {
        var el = $(".prev.available").parent().children().last();
        if (el.hasClass('next available')) {
            return;
        }
        el.addClass('next available');
        el.append('<span></span>');
    });
});