$('.navbar a, #hire-me-now').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800, function() {
            window.location.hash = hash;
        });
    }
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('#navbar').style.opacity = 0.9;

    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});