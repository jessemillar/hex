var length = 2; // Length (in characters) of generated hexadecimal value

$(document).ready(function() {
    $("#hex").val("0x" + generateHex());
    $("#decimal").focus();

    $('#form').on('submit', function(e) {
        e.preventDefault(); // Don't refresh the page on form submit

        if (hexToDecimal($("#hex").val()) == $("#decimal").val()) {
            $("#check").css("background-color", "#01FF70");
            setTimeout(function() {
                $("#hex").val("0x" + generateHex());
                $("#decimal").val("");
                $("#decimal").focus();
                $("#check").css("background-color", "#7FDBFF");
            }, 750);
        } else { // You were wrong
            $("#check").css("background-color", "#FF4136");
        }

        return false;
    });
});
