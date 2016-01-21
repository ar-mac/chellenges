$(document).ready(function() {
    
    var current_sign = "X";
    $('h1').text('Teraz kolejka: ' + current_sign);

    $('td').on('click', function() {
        if(current_sign == 'X') {
            current_sign = 'O';
        } else {
            current_sign = 'X';
        }
        $('h1').text('Teraz kolejka: ' + current_sign);
        $(this).text(current_sign).attr("disabled", true);
    });
    
    $('#reset_button').on('click', function() {
        $('td').text('');
    });
});
