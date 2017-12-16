navFixed();  

$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});
$(window).scroll(function() {    
    navFixed();
});  
function navFixed() {      
    var heightNav = $('.navbar').outerHeight(true);
    if ($(window).scrollTop() >= heightNav){
        $('.navbar').addClass('fixed-top');
        $('.landing').css('margin-top', (heightNav) + 'px');
    } else {
        $('.navbar').removeClass('fixed-top');
        $('.landing').css('margin-top', '0');
    }
}

/**Con este media hago que se active el slider, siempre en cuando haya mas de 3 elementos en 
 * sección del Team
 */
if (window.matchMedia("(min-width: 992px)").matches) {
    var itemsTeam = $('.items').length;
    console.log(itemsTeam);
    if(itemsTeam > 3) {
        $('.team').addClass('slider');
        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });     
        
    }
}


