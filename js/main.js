$(function () {
    $('.header-slider').slick({
        dots: true,
        vertical: true,
        prevArrow: '<button type="button" class="header-prev header-arrow"><img src="images/prev.svg" alt="Arrow"></button>',
        nextArrow: '<button type="button" class="header-next header-arrow"><img src="images/next.svg" alt="Arrow"></button>',
    });


    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.product__content',
        focusOnSelect: true,
        vertical: true,
        prevArrow: '<button type="button" class="product-prev product-arrow"><img src="images/product-prev.svg" alt="Arrow"></button>',
        nextArrow: '<button type="button" class="product-next product-arrow"><img src="images/product-next.svg" alt="Arrow"></button>',
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        vertical: true,
        arrows: false,
    });
});




