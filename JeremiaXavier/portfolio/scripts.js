$(document).ready(function() {
    $('.view-project').on('click', function(e) {
        e.preventDefault();
        var title = $(this).data('title');
        var media = $(this).data('media');
        var src = $(this).data('src').split(',');
        if (media === 'video') {
            $.fancybox.open({
                src: src[0],
                type: 'video',
                opts: {
                    caption: title,
                    loop: true
                }
            });
        } else {
            $.fancybox.open(src.map(function(image) {
                return {
                    src: image,
                    type: 'image'
                };
            }));
        }
    });
});