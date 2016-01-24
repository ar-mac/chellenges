$(document).ready(function() {
  var setSign = function() {
    if($(this).attr('disabled') != 'disabled') {
      $(this).text(current_sign).attr("disabled", true);
      current_sign = (current_sign == 'X') ? 'O' : 'X';
      updateTitle(current_sign)
    }
  };

  var updateTitle = function(current_sign) {
    $('h1').text('Now turn: ' + current_sign);
  };

  var current_sign = "X";
  updateTitle(current_sign);

  $('td').on('click', setSign);

  $('#reset_button').on('click', function() {
    $('td').text('').attr('disabled', false);
  });
});
