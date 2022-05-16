$(document).ready(function() {
    var currentSelectedTab = $(".all-activities-tabs .active").attr("data-id");
    $(".all-activities-tabs button").click(function() {
        $(".all-activities-tabs button").removeClass("active");
        $(".all-activities-flow").addClass("d-none");
        $(".all-activities-flow."+$(this).attr("data-id")).removeClass("d-none");
        $(this).addClass("active");
        currentSelectedTab = $(this).attr("data-id");
        console.log(currentSelectedTab)
    })
});


