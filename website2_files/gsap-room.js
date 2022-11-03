// Init ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// ROOM HERO animation IN
    //---------------------------------

    gsap.set(".hero-container-room .hide-on-init", { autoAlpha: 1 }); // hidden first in force-hide.css - make visible

    // gsap.set(".hero-container", { autoAlpha: 1 });

    // elements
    var title = $(".hero-container-room h1");
    var lines = $(".hero-container-room .room-hero-title-lines");
    // var subheader = $(".hero-container-room .subheader");
    var subtitle = $(".hero-container-room .subtitle");
    // var paragraph = $(".hero-container-room p:not(.subheader,.subtitle)");
    // var hero_section_text = $(".hero-container-room .hero-section-text");
    // var button = $(".gsapfadeinbtn");
    // var button = $(".hero-container-room .heroButtonsJsadded");
    // var bg = $(".hero-container-room .hero_bg");
    var mask_radial = $(".hero-container-room .mask.radial-gradient");
    var mask_dark = $(".hero-container-room .mask.dark");
    var arrow = $(".hero-container-room .room-hero-arrow-down");
    var main_header = $("body.single-room header.header");



    // var underline = $(".hero-container-room .svg_underline");

    // TITLE SplitText vars
    TitleCharsIn = new SplitText(title, { type: "words,chars" })
    TitleCharsIn_chars = TitleCharsIn.chars; //an array of all the divs that wrap each character
    SubTitleCharsIn = new SplitText(subtitle, { type: "words,chars" })
    SubTitleCharsIn_chars = SubTitleCharsIn.chars; //an array of all the divs that wrap each character


    var tl = gsap.timeline({ delay: 0.1 });

    tl.to(mask_radial, { duration: 12, backgroundImage: "radial-gradient(50% 100%,transparent 0, rgba(0,0,0,.2) 0%,#000 300%)", ease: "slow" });

    //tl.from(subtitle, { duration: 2, y: 20, autoAlpha: 0, ease: "slow" }, 1.5);
    tl.from(SubTitleCharsIn_chars, { duration: 1, autoAlpha: 0, filter: "blur(10px)", ease: "expo", stagger: 0.1 }, 1);
    tl.from(lines, { duration: 2, autoAlpha: 0, ease: "slow" }, 1.5);
    tl.from(mask_dark, { duration: 6, opacity: 0, ease: "slow" }, 5);
    tl.from(TitleCharsIn_chars, { duration: 2, autoAlpha: 0, filter: "blur(10px)", ease: "slow", stagger: 0.2 }, 2);
    //tl.from(title, { duration: 1, y: 20, autoAlpha: 0, ease: "slow" }, 0.5);   
    tl.from(arrow, { duration: 2, y: -30, autoAlpha: 0, ease: "slow" }, 4);
    tl.from(main_header, {duration: 3, autoAlpha: 0, ease: "slow"},4);


 // HERO BG FADES
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-container-room",
            start: "top center", // when the top of the trigger hits the top of the viewport
            // end: "+=1000", // end after scrolling 500px beyond the start
            //markers: true,
            // pin: true, // pin the trigger element while active
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
    });
    tl.to(arrow, { autoAlpha: 0, ease: "slow" });
    tl.set(".hero-container-room", { filter: "blur(0px) contrast(100%) saturate(100%) brightness(1)" }); // set on init to prevent flashes
    tl.to(".hero-container-room", { delay: 0.6, filter: "blur(10px) contrast(160%) saturate(90%) brightness(0.7)", ease: "sine" });
    tl.to(".hero-container-room", { opacity: 0, ease: "sine" });


// nav-room-next-lines-bottom > lines bottom animation


gsap.registerPlugin(DrawSVGPlugin);

var shapes = ".nav-room-next-lines-bottom path:not(#line4)",
        tl = gsap.timeline({repeat:-1, yoyo:false,  repeatDelay: 0,});

tl.fromTo(shapes, {drawSVG:"0%"}, {duration: 12, drawSVG:"0% 100%", stagger: 6, ease: "slow"})
  .fromTo(shapes, {drawSVG:"0% 100%"}, {duration: 12, drawSVG:"100% 100%", stagger: 6, ease: "slow"})
  // .fromTo(line4, {drawSVG:"0%"}, {duration: 4, delay:4, drawSVG:"0% 100%", ease: "slow"})


// nav-rooms-single > lines animation

var shapes1 = ".bg-lines path",
        tl1 = gsap.timeline({repeat:-1, yoyo:false,  repeatDelay: 0,});

tl1.fromTo(shapes1, {drawSVG:"0%"}, {duration: 12, drawSVG:"0% 100%", stagger: 3, ease: "slow"})
  .fromTo(shapes1, {drawSVG:"0% 100%"}, {duration: 12, drawSVG:"100% 100%", stagger: 3, ease: "slow"})


// nav-rooms-single > hover items animation

$(".nav-rooms-single nav ul li").hoverIntent(function() {

    // elements
    var dot = $(this).find(".image-container .dog");
    var image = $(this).find(".image-container img");
    var circles = $(this).find(".image-container svg");
    var room_title = $(this).find(".room-title");

    // gsap.set(room_title, { y:-10 });

    var tl = gsap.timeline({ delay: 0 });
    tl.to(dot, { duration: 0.3, scale:4, ease: "expo" });
    tl.to(image, { duration: 0.3, opacity:1, ease: "expo" },"-=0.2");
    tl.to(circles, { duration: 0.3, opacity:1, ease: "expo" },"-=0.2");
    tl.to(room_title, { duration: 0.3, opacity:1, y:4, ease: "expo" });

    }, function() {

    // elements
    var dot = $(this).find(".image-container .dog");
    var image = $(this).find(".image-container img");
    var circles = $(this).find(".image-container svg");
    var room_title = $(this).find(".room-title");

    // gsap.set(room_title, { y:4 });

    var tl = gsap.timeline({ delay: 0 });
    tl.to(dot, { duration: 0.3, scale:0, ease: "expo" });
    tl.to(image, { duration: 0.3, opacity:0, ease: "expo" },"-=0.2");
    tl.to(circles, { duration: 0.3, opacity:0, ease: "expo" },"-=0.2");
    tl.to(room_title, { duration: 0.3, opacity:0, y:-10, ease: "expo" });

    });

// arrow intro animation

gsap
  .timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
    defaults: { ease: "none", duration: 2 }
  })
  .from(".icon-next stop", { stopColor: "#fff" })
  .to(".icon-next stop", { stopColor: "#000" }, 0);






// button hover

$(".next-room-buttom").hoverIntent(function() {

tl = gsap.timeline();
tl.to(".bg_text", { duration: 1, opacity:0.2, ease: "expo" })
  .to(".image-container", { duration: 1, opacity:0.9, ease: "expo" },0)
  .to("svg.button-circles path", {transformOrigin:"50% 50%", duration: 1, scale: 0.85, ease: "expo" },0)
  .to(".arrow", { duration: 1, xPercent:75, ease: "expo" },0)
  

}, function() {

tl.to("svg.button-circles path", { transformOrigin:"50% 50%", duration: 0.3, scale: 1.00, ease: "expo" })
  .to(".arrow", { duration: 0.3, xPercent:0, ease: "expo" },"-=0.3")
  .to(".bg_text", { duration: 0.3, opacity:0.1, ease: "expo" },"-=0.3")
  .to(".image-container", { duration: 1, opacity:0.5, ease: "expo" },"-=0.3")

});



// zoom and pan image
//---------------------

// Dummy image
// document.getElementById("zoom_pan__image_container").innerHTML = '<img src="//localhost/stories-of-clay/wp-content/uploads/2021/09/Fig.11-scaled.jpg">';


$(".data_zoom_pan__button").click(function() {
// document.querySelector('.data_zoom_pan__button').addEventListener('click', function () {
  var data_zoom_pan__image = this.getAttribute('data_zoom_pan__image')
  document.getElementById("zoom_pan__image_container").innerHTML = '<img src="' + data_zoom_pan__image + '">';
  init_zoom_pan();
  // console.log('clicked')
});





function init_zoom_pan() {

gsap.registerPlugin(Draggable, InertiaPlugin);

let image = document.querySelector("#zoom_pan__image_container img");
let container = document.querySelector("#zoom_pan__image_container");

let containerWidth  = 513;
let containerHeight = 655;

let imageWidth  = 513;
let imageHeight = 655;

let zoom = {
  value: 1,
  min: 1,
  max: 5,
  step: 1,  
  factor: 1.1
};

container.addEventListener("wheel", wheelAction);

gsap.set(image, { scale: zoom.value, transformOrigin: "left top" });

// var transform = image._gsTransform;
let props = gsap.getProperty(image);

let draggable = new Draggable(image, {
  cursor: "inherit",
  onClick: onClick,
  inertia: true,
  minimumMovement: 10,
  // allowEventDefault: true,
  overshootTolerance: 0
});

setBounds();

function onClick(event) {

  let oldZoom = zoom.value;
  
  zoom.value = Math.floor((zoom.value + zoom.step) / zoom.step) * zoom.step;
  
  if (zoom.value > zoom.max) {
    zoom.value = zoom.min;
  }
  
  changeZoom(zoom.value - oldZoom, event);
}

function wheelAction(event) {
  
  event.preventDefault();
  
  let oldZoom = zoom.value;
  
  let wheel = event.deltaY / 100;
  
  if (wheel > 0) {
    zoom.value /= zoom.factor;
  } else {
    zoom.value *= zoom.factor;
  }
   
  zoom.value = gsap.utils.clamp(zoom.min, zoom.max, zoom.value);
  
  changeZoom(zoom.value - oldZoom, event);
}

function changeZoom(zoomDelta, event) {
    
  let scale = props("scaleX");
  let x = props("x");
  let y = props("y");
  
  let rect = container.getBoundingClientRect();  
  let globalX = event.clientX - rect.left;
  let globalY = event.clientY - rect.top;
  
  let localX = (globalX - x) / scale;
  let localY = (globalY - y) / scale;
    
  x += -(localX * zoomDelta);
  y += -(localY * zoomDelta);
  
  gsap.set(image, {
    scale: zoom.value,
    x: x,
    y: y,
  });
  
  setBounds();
}

function setBounds() {
  
  let dx = containerWidth  - (imageWidth  * zoom.value);
  let dy = containerHeight - (imageHeight * zoom.value);
  
  let width  = containerWidth  - dx * 2;
  let height = containerHeight - dy * 2;
  
  draggable.applyBounds({    
    left: dx,
    top: dy,
    width: width,
    height: height
  });
}

}

