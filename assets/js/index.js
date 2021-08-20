$(Document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:7000,
        
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});