$(document).ready(function() {

  $('dd a').on('click', function(event) {
    event.stopPropagation();

    $('dd').removeClass('active');
    $(event.currentTarget).parent().addClass('active');

    var filteredClass = $(event.currentTarget).html();

    if(filteredClass == "All") {
      $('div .theatre').removeClass('hide');
    } else {
      $('div .theatre').addClass('hide');
      $('div[data-id='+ filteredClass +']').removeClass('hide');    
    }

    if($('div .hide').length >= 4) {
      $('#mainSection hr').addClass('hide');
    }
  });


});