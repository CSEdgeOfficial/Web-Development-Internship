$(document).ready(function() {
    // Open the modal when a thumbnail is clicked
    $('.thumbnails img').on('click', function() {
        var fullImageUrl = $(this).attr('data-full');
        $('.modal').css('display', 'block');
        $('.modal img').attr('src', fullImageUrl);
    });

    // Close the modal when the close button is clicked
    $('.close').on('click', function() {
        $('.modal').css('display', 'none');
    });

    // Close the modal when the user clicks outside of it
    $(window).on('click', function(event) {
        if (event.target == $('.modal')[0]) {
            $('.modal').css('display', 'none');
        }
    });

    // Enable navigation between images using arrow keys
    $(document).on('keydown', function(event) {
        if ($('.modal').css('display') == 'block') {
            var currentImageIndex = $('.thumbnails img[data-full="' + $('.modal img').attr('src') + '"]').index();
            if (event.keyCode == 37) { // Left arrow key
                var prevImageIndex = currentImageIndex - 1;
                if (prevImageIndex >= 0) {
                    var prevImageUrl = $('.thumbnails img').eq(prevImageIndex).attr('data-full');
                    $('.modal img').attr('src', prevImageUrl);
                }
            } else if (event.keyCode == 39) { // Right arrow key
                var nextImageIndex = currentImageIndex + 1;
                if (nextImageIndex < $('.thumbnails img').length) {
                    var nextImageUrl = $('.thumbnails img').eq(nextImageIndex).attr('data-full');
                    $('.modal img').attr('src', nextImageUrl);
                }
            }
        }
    });
});

function plusSlides(n) {
    var currentImageIndex = $('.thumbnails img[data-full="' + $('.modal img').attr('src') + '"]').index();
    var newImageIndex = currentImageIndex + n;
    var images = $('.thumbnails img');
    if (newImageIndex >= 0 && newImageIndex < images.length) {
        var newImageUrl = images.eq(newImageIndex).attr('data-full');
        $('.modal img').attr('src', newImageUrl);
    }
}