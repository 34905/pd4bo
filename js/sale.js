$(document).ready(function() {

    $('.color-choose input').on('click', function() {
        var BasketballColor = $(this).attr('data-image');

        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + BasketballColor + ']').addClass('active');
        $(this).addClass('active');
    });

  });