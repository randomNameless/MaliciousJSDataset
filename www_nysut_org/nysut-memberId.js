//Called from control on Find My Member ID control...

$(document).ready(function () {

    $.getScript("https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js");
        // Loading Overlay
        //Documentation:https://gasparesganga.com/labs/jquery-loading-overlay/

    $(".midModal1").each(function (i) {
        if (i > 0)
            $(this).remove();  
    });

    $(".midModal2").each(function (i) {
        if (i > 0)
            $(this).remove();
    });

    $(".midModal3").each(function (i) {
        if (i > 0)
            $(this).remove();
    });

    $('#divMemberIdResult, #validateMessage').hide();
    //$('#txtDOB').mask('99/99/9999');

    $('#modalMemberID #txtEmail').blur(function () {
        if (!IsEmail($('#txtEmail').val())) {
            $(this).attr("style", "outline: 2px solid red");
        } else {
            $(this).attr("style", "outline: 2px solid green");
        }
    });

    $('#modalMemberID #txtDOB').blur(function () {
        if (!IsDate($('#txtDOB').val())) {
            $(this).attr("style", "outline: 2px solid red");
        } else {
            $(this).attr("style", "outline: 2px solid green");
        }
    });

    // enter button config
    $(document).bind('keypress', function (e) {
        if (e.keyCode == 13) {
            if (IsEmail($('#txtEmail').val()) && IsDate($('#txtDOB').val())) {
                $('#btnFindMemberId').trigger('click');
            }
        }
    });

    $('#btnFindMemberId').click(function () {
        if (ValidateBeforeSubmit()) {

            $('#modalMemberID').LoadingOverlay("show", {
                image: "",
                fontawesome: "fa fa-cog fa-spin",
                fontawesomeColor: "#005495",
                background: "rgba(69, 82, 91, 0.3)"
            });

            var email = $('#txtEmail').val();
            var dob = $('#txtDOB').val();
            $('#failMessage, #successMessage').empty()

            $.ajax({
                type: "POST",
                url: window.location.protocol + "//" + window.location.hostname + "/_Handlers/FindMemberId.ashx",
                data: { EMAIL: email, DOB: dob },
                contentType: "application/x-www-form-urlencoded",
                dataType: "json",
                success: function (response) {
                    if (response.success) {
                        $('#modalSuccess').foundation('open');
                        $('#successMessage').empty().append(response.msg);
                    }
                    else {
                        $('#modalNotFound').foundation('open');
                        $('#failMessage').empty().append(response.msg);
                    }
                },
                failure: function (response) {
                    $('#modalNotFound').foundation('open');
                    $('#failMessage').empty().append(response.msg);
                }
            });
        }
    });


    $('#btnTryAgain').click(function () {
        $('#modalMemberID').LoadingOverlay("hide", true).foundation('open');
    });

    $('#modalMemberID').on('closed.zf.reveal', function () {
        var modal = $(this);
        modal.LoadingOverlay("hide", true);
        $('#txtEmail,#txtDOB').val('').removeAttr("style");
        $("#validateMessage").hide();
        
    });

});


function ValidateBeforeSubmit() {
    if (IsEmail($('#txtEmail').val()) && IsDate($('#txtDOB').val())) {
        $("#validateMessage").hide();
        return true;
    }
    else {
        $("#validateMessage").show();
        return false;
    }
}


