$(function(){
    $('.slider-items').slick({
        dots: true,
        // fade.:true,
        // autoplay:true,
        // autoplaySpeed: 3000,
        // // arrows:false,
        appendArrows:$(".btns-slider"),
        prevArrow: `<button type="button"  class="slick-prev  slbtn"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>`,
        nextArrow: `<button type="button"  class="slick-next  slbtn"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>`,
        // lazyLoad : onblur,
        // mobileFirst:true,
        // slide:indexedDB,
        // swipe:false,
        // swipeToSlide:true,
        // touchMove:false,
        // useCSS:false,
        // vertical:true,
        // waitForAnimate:false
    });
})
