$(function () {
    $(".header-slider").slick({
        dots: true,
        vertical: true,
        prevArrow:
            '<button type="button" class="header-prev header-arrow"><img src="images/prev.svg" alt="Arrow"></button>',
        nextArrow:
            '<button type="button" class="header-next header-arrow"><img src="images/next.svg" alt="Arrow"></button>',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                },
            },
        ],
    });

    $(".product__name").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: ".product__content",
        focusOnSelect: true,
        vertical: true,
        prevArrow:
            '<button type="button" class="product-prev product-arrow"><img src="images/product-prev.svg" alt="Arrow"></button>',
        nextArrow:
            '<button type="button" class="product-next product-arrow"><img src="images/product-next.svg" alt="Arrow"></button>',
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                },
                breakpoint: 461,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    vertical: false,
                },
            },
        ],
    });
    $(".product__content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".product__name",
        vertical: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    vertical: false,
                },
            },
        ],
    });

    $(".menu__btn").on("click", function () {
        $(".menu__list").toggleClass("menu__list--active");
    });
});
