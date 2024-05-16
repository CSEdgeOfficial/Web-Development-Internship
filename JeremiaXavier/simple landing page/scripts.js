$(document).ready(function() {
    $(".owl-carousel1").owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            680: {
                items: 2,
                nav: false,
                loop: false
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });
});


    //loader->
   $('body').append('<!-- Loader --><div class="loader" id="loading"><img src="images/106.gif" alt="Loading..."><div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: #333;"></div></div>');



// Function to remove the loader and show the content
function removeLoader() {
  $("#loading").fadeOut(500, function() {
    // Fade out complete. Remove the loading div
    $("#loading").remove();

    // Show the content
    $(".content").fadeIn(500);
  });
}

// Wait for page load PLUS two seconds
$(window).on('load', function() {
  setTimeout(removeLoader, 1000);
});

  