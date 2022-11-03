gsap.registerPlugin(ScrollTrigger)


$('.horizontal-container').each(function(i) {

    let container = this;

    gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
        //x: () => -(container.scrollWidth - document.documentElement.clientWidth + extra_xScrollWidth) + "px",
         //x: () => -( xScrollWidth - xclientWidth ) + "px",
        ease: "none",
        scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 0.5,
            // snap: {
            //     snapTo: 1 / (modules.length - 10),
            //     duration: { min: 0.1, max: 0.1 }
            // },
            // end: () => "+=" + container.offsetWidth
            end: "+=10000"
            //end: () => "+=" + (container.scrollWidth - container.clientWidth),
            // end: "+=" + containerWidth,
        }
    })


});

// HORIZONTAL SCROLL IMAGE INTRO ANIMATION
 $(".hc_bg > .hc_bg__image").each(function(i) {
        // elements
        var item = $(this);
         // var item = $(this).find(".hm_intro_image");

        // var tl = new gsap.timeline();
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                start: "top top",
                end: "+=1200",
                //markers: true,
               // pin: true, // pin the trigger element while active
                scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });
        tl.to(item, {  opacity: 0, filter: "blur(6px)", ease: "sine" });

    });





