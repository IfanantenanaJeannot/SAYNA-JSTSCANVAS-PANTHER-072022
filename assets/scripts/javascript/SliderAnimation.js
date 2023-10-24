document.addEventListener('DOMContentLoaded', function() {
    var nextButton = document.querySelector('.swiper-button-next');
    var prevButton = document.querySelector('.swiper-button-prev');
    var images = document.querySelectorAll('.swiper-slide .card-img img');

    nextButton.addEventListener('click', function() {
        images.forEach(function(image) {
            var screenWidth = window.innerWidth;
            var columnWidth = screenWidth / 2;
            var imageLeftPosition = image.getBoundingClientRect().left;
            image.classList.remove('scale-transform');
            if (imageLeftPosition < columnWidth) {
                image.classList.add('scale-transform');
            }
        });
    });

    prevButton.addEventListener('click', function() {
        images.forEach(function(image) {
            var screenWidth = window.innerWidth;
            var columnWidth = screenWidth/4;
            var imageRightPosition = image.getBoundingClientRect().right;
            image.classList.remove('scale-transform');
            if (imageRightPosition < columnWidth) {
                image.classList.add('scale-transform');
            }
        });
    });
});
