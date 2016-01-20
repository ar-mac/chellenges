$(document).ready(function() {
    
    var current_sign = "X";
    $('h1').text('Teraz kolejka: ' + current_sign);

    $('button').on('click', function() {
        if(current_sign == 'X') {
            $(this).text(current_sign).attr("disabled", true);
            current_sign = 'O';
        } else {
            $(this).text(current_sign).attr("disabled", true);
            current_sign = 'X';
        }
    });

});
