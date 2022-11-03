// When the DOM is ready

// Init ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

$(function() {

    gsap.config({
        autoSleep: 60,
        // force3D: false,
        nullTargetWarn: false,
        // units: {left: "%", top: "%", rotation: "rad"}
    });


    // main_nav_container_desktop

    function nav_open() {

        var main_nav_container = $(".main_nav_container_desktop");
        var rooms = $(".main_nav_container_desktop .rooms-list ul li");
        var secnav = $(".main_nav_container_desktop .sec-nav li");
        var logos = $(".main_nav_container_desktop .logos-clientes .logo-container");
        var share = $(".main_nav_container_desktop .social-profiles");

        var tl = gsap.timeline();

        tl.to("#main_nav_button_desktop", { duration: 0.3, scale:0.9,  ease: "elastic" }); // afecta a burger button
        tl.to("#main_nav_button_desktop", { duration: 0.3, scale:1,  ease: "elastic" });
        tl.to(main_nav_container, { duration: 0.5, autoAlpha: 1, filter: "blur(0px)", ease: "slow" },"-=0.2");
        tl.from(rooms, {
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.1,
            filter: "blur(10px)",
            ease: "slow",
            force3D: true
        }, "-=0.4");
        tl.from(secnav, {
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.1,
            filter: "blur(10px)",
            ease: "slow",
            force3D: true
        }, "-=0.6");
        tl.from(logos, {
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.1,
            filter: "blur(10px)",
            ease: "slow",
            force3D: true
        }, "-=0.6");
        tl.from(share, { duration: 0.3, opacity:0,  ease: "slow" }); // afecta a burger button
       

    }

 

    function nav_close() {

        var main_nav_container = $(".main_nav_container_desktop");
        var rooms = $(".main_nav_container_desktop .rooms-list ul li");
        var secnav = $(".main_nav_container_desktop .sec-nav li");
        var logos = $(".main_nav_container_desktop .logos-clientes .logo-container");

        var tl = gsap.timeline();
        // tl.to(logos, { duration: 0.8, autoAlpha: 0, y:60, filter: "blur(10px)", ease: "slow" });
        // tl.to(secnav, { duration: 0.8, autoAlpha: 0, y:60, filter: "blur(10px)", ease: "slow" },"-=0.7");
        // tl.to(rooms, { duration: 0.8, autoAlpha: 0, y:60, filter: "blur(10px)", ease: "slow" },"-=0.7");
        tl.to("#main_nav_close", { duration: 0.3, scale:0.9,  ease: "elastic" }); // afecta a close button
        tl.to("#main_nav_close", { duration: 0.3, scale:1,  ease: "elastic" }); // afecta a close button
        tl.to(main_nav_container, { duration: 1, autoAlpha: 0, filter: "blur(10px)", ease: "power4" });
    }




let burger_btn = document.querySelector("#main_nav_button_desktop");
burger_btn.addEventListener("click", nav_open);

let close_btn = document.querySelector("#main_nav_close");
close_btn.addEventListener("click", nav_close);

  

// hover
$("#main_nav_button_desktop").hover(function() {
var tl = gsap.timeline();
  tl.to("#main_nav_button_desktop", { duration: 0.3, scale:0.95, ease: "slow" }); // afecta a burger button
}, function() {
  tl.to("#main_nav_button_desktop", { duration: 0.3, scale:1, ease: "slow" }); // afecta a burger button
});





    



    // Global in One element
    //---------------------------------
    $(".thisIn").each(function(i) {
        // elements
        var item = $(this);

        // var tl = new gsap.timeline();
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                start: "top bottom", // when the top of the trigger hits the top of the viewport
                end: "+=300", // end after scrolling 500px beyond the start
                //markers: true,
                // pin: true, // pin the trigger element while active
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });
        tl.from(item, { delay: 0.5, duration: 3, autoAlpha: 0, y: 30, ease: "expo" });

    });


    // Global in CHILD for elements
    //---------------------------------
    $(".ChildsIn").each(function(i) {
        // elements
        var container = $(this);
        var item = $(this).find(".ChildsIn_item");

        // var tl = new gsap.timeline();
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                start: "top bottom", // when the top of the trigger hits the top of the viewport
                end: "+=300", // end after scrolling 500px beyond the start
                //markers: true,
                // pin: true, // pin the trigger element while active
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });
        tl.from(item, {
            duration: 2,
            y: 60,
            opacity: 0,
            stagger: 0.3,
            ease: "expo",
            force3D: true
        }, "+=0.5")

    });



    // Global Animation IN for all items except images
    $(".contentIn").each(function(i) {

        // elements
        var title = $(this).find(".h1,h2,h3,h4,h5,.title,.section-title");
        var subheader = $(this).find(".subheader,.compact");
        // var paragraph_firstletter = $(this).find("p.first-letter");
        // var paragraph = $(this).find("p:not(.subheader,.compact,.first-letter");
        // var paragraph_lead = $(this).find("p.lead");
        // var paragraph = $(this).find("p:not(.subheader,.compact,.lead");
        var paragraph = $(this).find("p");
        var text_not_paragraph = $(this).find(".row.extra-space .columns, .column.block, .icon-block");
        var image = $(this).find("img");
        var figure = $(this).find("figure");
        var button = $(this).find(".button");
        var list_item = $(this).find("li");
        // var underline = $(this).find(".svg_underline");
        var block = $(this).find(".block-wrapper .column.block");
        var editorimage2_bgimage = $(this).find(".editorimage2_bgimage_wrapper");
        var global_container = $(this).find(".global-container");

        // SplitText vars
        TitleCharsIn = new SplitText(title, { type: "words,chars" })
        TitleCharsIn_chars = TitleCharsIn.chars; //an array of all the divs that wrap each character

        // paragraphCharsIn = new SplitText(paragraph, { type: "lines" })
        // paragraphCharsIn_lines = paragraphCharsIn.lines; //an array of all the divs that wrap each character

        subheaderCharsIn = new SplitText(subheader, { type: "words,chars" })
        subheaderCharsIn_chars = subheaderCharsIn.chars; //an array of all the divs that wrap each character


        // var tl = gsap.timeline();
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                start: "top 50%", // [trigger] [scroller] positions
                end: "+=900", // end after scrolling 500px beyond the start
                //markers: true,
                // pin: true, // pin the trigger element while active
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });

        // animation

        if (editorimage2_bgimage.length) {
            tl.from(editorimage2_bgimage, { duration: 1, y: 40, opacity: 0 })
        }

        if (subheaderCharsIn_chars.length) {
            tl.from(subheaderCharsIn_chars, { delay: 0.5, duration: 1, autoAlpha: 0, scale: 2, x: 0, rotationX: 0, ease: "back", stagger: 0.02 })
        }

        if (TitleCharsIn_chars.length) {
            tl.from(TitleCharsIn_chars, { duration: 0.5, autoAlpha: 0, scale: 2, filter: "blur(4px)", ease: "slow", stagger: 0.05 }, '-=0.5');
        }

        if (figure.length) {
            tl.from(figure, { duration: 1, y: 20, opacity: 0 }, "-=0.5");
        }

        // tl.from(underline, { duration: 1, width:0, opacity: 0, ease: "expo" },"-=1")

        // if (paragraph_firstletter.length) {
        // tl.from(paragraph_firstletter, { duration: 1, y: -10, opacity: 0, stagger: 0.1 }, "-=0.5")
        // }

        // if (paragraph_firstletter.length) {
        // tl.from(paragraph_firstletter, { duration: 1, y: 10, opacity: 0, stagger: 0.2 },"-=0.5")
        // }

        if (global_container.length) {
            tl.from(global_container, { duration: 1, y: 40, opacity: 0 }, "-=1")
        }

        // if (paragraph_lead.length) {
        //     mySplitText = new SplitText(paragraph_lead, { type: "words,chars" }),
        //         paragraph_lead_words = mySplitText.words; //an array of all the divs that wrap each character
        //     tl.from(paragraph_lead_words, { duration: 0.5, autoAlpha: 0, scale: 1, filter: "blur(4px)", ease: "slow", stagger: 0.02 }, "-=1");
        // }

        if (block.length) {
            tl.from(block, { duration: 1, y: 10, opacity: 0, stagger: 0.1 }, "-=1.5")
        }

        if (paragraph.length) {
            // tl.from(paragraph, { duration: 1, y: 10, opacity: 0, stagger: 0.5 }, "-=1.5")
            mySplitText = new SplitText(paragraph, { type: "words,chars" }),
                words = mySplitText.words; //an array of all the divs that wrap each character
            tl.from(words, { duration: 0.5, autoAlpha: 0, scale: 1, filter: "blur(4px)", ease: "slow", stagger: 0.01 }, "-=1.2");
        }

        if (text_not_paragraph.length) {
            tl.from(text_not_paragraph, { duration: 1, y: 10, opacity: 0, stagger: 0.2 }, "-=1.5")
        }

        // if (paragraphCharsIn_lines.length) {
        // tl.from(paragraphCharsIn_lines, { duration: 3, autoAlpha: 0, scale: 1, y: 30, ease: "expo", stagger: 0.1, },"-=0.5")
        // }

        if (list_item.length) {
            tl.from(list_item, {
                duration: 2,
                y: -20,
                opacity: 0,
                stagger: 0.2,
                ease: "expo",
                force3D: true
            }, "-=0.5")
        }

        if (button.length) {
            tl.from(button, { duration: 1, x: -40, opacity: 0, stagger: 0.2 }, "-=1")
        }


    });




    // add class image-container to images for clip-in transition
    jQuery(".editorimage .img-col img").wrap("<div class='imageClipIn jsadded' />");


    // Clip-In to all Images with class image-container
    $(".imageClipIn").each(function(i) {

        // add mask inside
        $(this).append('<div class="image-mask"></div>');

        // elements
        var image = $(this);
        var mask = $(this).find(".image-mask");

        // var tl = gsap.timeline();

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                start: "top 70%", // [trigger] [scroller] positions
                end: "+=300", // end after scrolling 500px beyond the start
                //markers: true,
                // pin: true, // pin the trigger element while active
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });

        // animation width mask
        tl.from(image, 2, { width: 0, ease: Power4.easeOut });
        tl.to(mask, 1, { width: 0, ease: Power4.easeOut }, '-=1');



    });


    // textInByCharacter
    //---------------------------------
    $(".textInByChar").each(function(i) {

        gsap.set(".textInByChar", { perspective: 400 }); // prevent letter shaking

        // gsap.set(".hide-on-init", { autoAlpha: 1 }); // hidden first in force-hide.css - make visible


        // var tl = gsap.timeline(),
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                start: "top 70%", // [trigger] [scroller] positions
                end: "+=300", // end after scrolling 500px beyond the start
                //markers: true,
                // pin: true, // pin the trigger element while active
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });
        mySplitText = new SplitText(this, { type: "words,chars" }),
            chars = mySplitText.chars; //an array of all the divs that wrap each character

        tl.from(chars, { duration: 2, autoAlpha: 0, scale: 1.4, x: 0, ease: "back", stagger: 0.02 });


    });




    // textInByWord
    $(".textInByWord").each(function(i) {

        gsap.set(".textInByWord", { perspective: 400 }); // prevent letter shaking

        // gsap.set(".hide-on-init", { autoAlpha: 1 }); // hidden first in force-hide.css - make visible

        //var line = $(this).find(".svg_underline");
        // gsap.set(line, { autoAlpha: 0 });

        // var tl = gsap.timeline(),

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: this,
                start: "top 70%", // [trigger] [scroller] positions
                end: "+=300", // end after scrolling 500px beyond the start
                //markers: true,
                // pin: true, // pin the trigger element while active
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        });


        mySplitText = new SplitText(this, { type: "words" }),
            words = mySplitText.words; //an array of all the divs that wrap each character

        tl.from(words, { duration: 3, autoAlpha: 0, scale: 1, y: 30, filter: "blur(4px)", ease: "slow", stagger: 0.05 });


    });



    // Scroll parallax items
    //-------------------
    $(window).bind('scroll', function(e) {
        parallaxScroll();
        parallaxScroll_x2();
    });

    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('.parallax').css('top', (0 - (scrolled * .10)) + 'px');
    }

    function parallaxScroll_x2() {
        var scrolled = $(window).scrollTop();
        $('.parallax_x2').css('top', (0 - (scrolled * .40)) + 'px');
    }






}); // end function