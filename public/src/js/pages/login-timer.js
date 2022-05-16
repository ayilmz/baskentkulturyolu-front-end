$(document).ready(function() {
    if($(".login-timer").length > 0){
        $(":not(input)").on("click", function () {
            var focused = false;
            $("input[type=text]").each(function () {
                if (!focused && $(this).val().length == 0) {
                    $(this).focus();
                    focused = true;
                }
            });
        });

        $("#First").focus();

        $("#First").bind("paste", function (e) {
            var pastedData = e.originalEvent.clipboardData.getData('text');

            if (pastedData.length == 5) {

                $("input[type=text]").each(function (i, b) {
                    $(this).val(pastedData[i]);
                });

                $("input[type=text]:last").focus();

            }

        });

        $("input[type=submit]").click(function ()
        {

            var value = "";

            $("input[type=text]").each(function ()
            {
                value += $(this).val();
            });

            $("#Token").val(value);

            return value.length == 6;

        });

        $("input[type=text]").keydown(function ()
        {

            var value = $(this).val();

            if (value.length == 1) {

                var place = parseInt($(this).data("place")) + 1;

                $("input[data-place=" + place + "]").focus();

            }
            else
            {

                var place = parseInt($(this).data("place")) - 1;

                $("input[data-place=" + place + "]").focus();

            }

        });

        var n = parseInt($("#count").html()) - 1;

        setInterval(function () {
            if (n >= 0)
            {
                $("#count").html(n--);
            }
            else
            {
                $("input[type=text]").attr("disabled", "disabled");
                $("#send-code-again").removeClass("d-none");
                $("#count").addClass("d-none").removeClass("d-flex");
                $("input[type=submit]").remove();
            }
        }, 1000);
    }
});

