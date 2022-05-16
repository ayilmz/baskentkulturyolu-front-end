function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if ( key < 48 || key > 57 ) {
        return false;
    } else {
        return true;
    }
};

$(document).ready(function() {

    $("input[name='password-code']").click(function (e){
        $(this).select();
    });

    $("input[name='password-code']").keypress(function (e){
        if (this.value.length >= 1) {
            return false;
        }
    });
    $("input[name='password-code']").keyup(function (e){
        if(validateNumber(e)){
            $(this).next().focus();
        }
    });

    if($('.login-form').length > 0) {
        $('.login-form').parsley().on('field:validated', function() {
            var ok = $('.parsley-error').length === 0;
        })
        .on('form:submit', function() {
            return false; // Don't submit form for this demo
        });
    }
});

