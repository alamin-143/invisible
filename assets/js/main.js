
    $(document).ready(function() {

        // mobile menu active
        $('#menu_open').on('click', function() {
            $('#menu_open').addClass('hidden');
            $('#menu_open').removeClass('flex');
            $('#mobile_menu').removeClass('hidden');
            $('#menu_close').removeClass('hidden');
            $('#menu_close').addClass('flex');
            $('#selected_item').addClass('nav-btn-selected')

        });
        $('#menu_close').on('click', function() {
            $('#menu_open').removeClass('hidden');
            $('#menu_open').addClass('flex');
            $('#mobile_menu').addClass('hidden');
            $('#menu_close').addClass('hidden');
            $('#menu_close').removeClass('flex');
            $('#selected_item').removeClass('nav-btn-selected')
        });

    });

        // portfolio active
        var swiper = new Swiper(".portfolio-wrapper", {
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: true,
            speed: 2000,
            autoplay: {
              delay: 0,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            disableOnInteraction: true,
        });
 

        // team wrapper active 
        var swiper = new Swiper(".team-wrapper", {
            slidesPerView: "auto",
            spaceBetween: 10,
            speed: 2000,
            draggable: true,
            loop: true,
            autoplay: {
                delay: 1500,
            },
            mousewheel: {
                invert: true,
            },
        });

        // work wrapper active 
        var swiper = new Swiper(".work-wrapper", {
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 1000,
            draggable: true,
            // autoplay: {
            //     delay: 3000,
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });



