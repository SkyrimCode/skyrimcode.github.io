$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    var typed=new Typed(".typed",{
        strings: ["Student", "Software Developer", "Competitive Coder", "Full Stack Developer"],
        typeSpeed: 70,
        loop: true,
        startDelay:1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:false,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
    
    var skillstopoffset= $(".skillsSection").offset().top;
    var statstopoffset= $(".statsSection").offset().top;
    var countupfinished=false;

    $(window).scroll(function(){
        if(window.pageYOffset > skillstopoffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from,to,percent) {
                    $(this.el).find(".percent").text(Math.round(percent));
                }
            });
        }
        if(!countupfinished && window.pageYOffset > statstopoffset - $(window).height() + 200){
            $(".counter").each(function(){
                var element= $(this);
                var endval= parseInt(element.text());
                element.countup(endval);
            });
            countupfinished=true;
        }
    });
    
});
