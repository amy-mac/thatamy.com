$(document).ready(function() {

  $('dd a').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();

    $('dd').removeClass('active');
    $(event.currentTarget).parent().addClass('active');

    const filteredClass = $(event.currentTarget).text();

    if (filteredClass === "All") {
      $('div .theatre').removeClass('hide');
    } else {
      $('div .theatre').addClass('hide');
      $(`div[data-id="${filteredClass}"]`).removeClass('hide');
    }

    if ($('div .hide').length >= 4) {
      $('#mainSection hr').addClass('hide');
    }
  });

});
