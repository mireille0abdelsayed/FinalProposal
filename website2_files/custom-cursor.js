// When the DOM is ready
//$(function() {

// CURSOR
var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    cursorText = $(".cursor-text")


var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });

        gsap.set(cursorText, {
            css: {
                left: posX - 24,
                top: posY - 24
            }
        });
    }
});



$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});




// Active
// $("a, button, input.button").on("mouseenter", function() {
//     cursor.addClass("active");
//     follower.addClass("active");
// });
// $("a, button, input.button").on("mouseleave", function() {
//     cursor.removeClass("active");
//     follower.removeClass("active");
// });




// Cursor Basic Actions

var cursorChanging = false;


// Active state on hover basic link elements
var tl = gsap.timeline();

var basicLinks = $("a:not(.no-cursor-follow, .cursor-msg-view, .cursor-msg-back), button:not(#main_nav_button_desktop), input.button, span.has-tip");

$(basicLinks).on("mouseenter", function() {
    // tl.to(follower, { duration: 0.5, scale: 2.2, ease: "expo" });
    // tl.to(cursor, { duration: 0.4, scale: 0.4, ease: "expo" }, '-=0.5');
    tl.to(follower, { duration: 0.5, scale: 2, ease: "expo" });
    tl.to(cursor, { duration: 0.4, scale: 1.5, ease: "expo" }, '-=0.5');
});
$(basicLinks).on("mouseleave", function() {
    tl.to(follower, { duration: 0.5, scale: 1, ease: "expo" });
    tl.to(cursor, { duration: 0.5, scale: 1, ease: "expo" }, '-=0.5');
});



// cursor messages

var tl = gsap.timeline();


function CursorMessageShow(content) {
    tl.set(cursorText, { text: content }); // set text
    tl.to(follower, { duration: 0.5, scale: 0, ease: "expo" });
    tl.to(cursorText, { duration: 0.5, scale: 1, ease: "expo" }, '-=0.5');
}

function CursorMessageHide(content) {
    tl.to(cursorText, { duration: 0.3, scale: 0, ease: "expo" });
    tl.to(follower, { duration: 0.3, scale: 1, ease: "expo" }, '-=0.3');
    tl.set(cursorText, { text: "" }); // remove text
}


// function CursorIconShow(content) {
//     tl.set(cursorText, { text: content }); // set text
//     tl.to(follower, { duration: 0.5, scale: 0, ease: "expo" });
//     tl.to(cursorText, { duration: 0.5, scale: 1, ease: "expo" }, '-=0.5');
// }

// function CursorIconHide(content) {
//     tl.to(cursorText, { duration: 0.3, scale: 0, ease: "expo" });
//     tl.to(follower, { duration: 0.3, scale: 1, ease: "expo" }, '-=0.3');
//     tl.set(cursorText, { text: "" }); // remove text
// }


// Cursor Style
// function CursorGoDark() {
//     tl.to(cursor, { duration: 0.3, filter: "invert(1)", ease: "expo" });
//     tl.to(follower, { duration: 0.3, filter: "invert(1)", ease: "expo" }, '-=0.3');
// }

// function CursorGoWhite() {
//     tl.to(cursor, { duration: 0.3, filter: "invert(0)", ease: "expo" });
//     tl.to(follower, { duration: 0.3, filter: "invert(0)", ease: "expo" }, '-=0.3');
// }



// invert cursor hover this elements

// var invertCursor = $("#main"); // listar elementos sobre los cuales se invertirá

// $(invertCursor).on("mouseenter", function() {
//     CursorGoDark();
// });
// $(invertCursor).on("mouseleave", function() {
//     CursorGoWhite();
// });





// language detect from URL
    function getLang() {
        if (window.location.href.indexOf("/es/") != -1) return 'es'; // 
        else if (window.location.href.indexOf("/en/") != -1) return 'en';
        else if (window.location.href.indexOf("/ca/") != -1) return 'ca';
        else return 'en'; // Default language
    }

// Cursor Messages
    if ( getLang() == 'en' ) {
        var locale_View = 'View';
        var locale_All = 'All';
        var locale_Back = 'Back';
        var locale_Loading = 'Loading';
        var locale_Zoom = 'Zoom';
    }
    // if ( getLang() == 'es' ) {
    //     var locale_View = 'Ver';
    //     var locale_All = 'Todos';
    //     var locale_Back = 'Volver';
    //     var locale_Zoom = 'Zoom';
    // }
    // if ( getLang() == 'ca' ) {
    //     var locale_View = 'Veure';
    //     var locale_All = 'Tots';
    //     var locale_Back = 'Tornar';
    //     var locale_Zoom = 'Zoom';
    // }


$(".cursor-msg-view").hoverIntent(function() {
    CursorMessageShow(locale_View);
}, function() {
    CursorMessageHide();
});

$(".cursor-msg-eye").hoverIntent(function() {
    CursorMessageShow('<svg class="icon white" viewBox="0 0 47 32"><use xlink:href="#eye"></use></svg>');
}, function() {
    CursorMessageHide();
});

$(".cursor-msg-back").hoverIntent(function() {
    // CursorMessageShow(locale_All);
    CursorMessageShow(locale_Back);
}, function() {
    CursorMessageHide();
});

$(".cursor-msg-zoom").hoverIntent(function() {
    // CursorMessageShow(locale_All);
    CursorMessageShow(locale_Zoom);
}, function() {
    CursorMessageHide();
});


// Swiper

$(".cursor-msg-slide").hoverIntent(function() {
    CursorMessageShow('<svg class="icon white" viewBox="0 0 52 32"><use xlink:href="#slide"></use></svg>');

}, function() {
    // CursorMessageHide();
    CursorMessageHide();
});





