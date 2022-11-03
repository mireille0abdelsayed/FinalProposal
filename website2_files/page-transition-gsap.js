
/*! Fades out the whole page when clicking links */
// $('.menu a, .site-logo a, .team-list .item a, .project-item a, a.button').click(function(e) {

$('a:not(.anchor-link,.external,.download)').click(function(e) {

	e.preventDefault();
	newLocation = this.href;

	// Loader IN
	var tl = gsap.timeline({ });
	// tl.add( function(){ CursorMessageShow(locale_Loading); }  )
	tl.set("#logo", {left: "50%"});
	tl.to("#logo", {duration: 0.6, opacity:1, delay:0,  ease: "none" },"-=0.3");
	tl.to("#loader_blur", {duration: 0.6, left: "0%", delay:0,  ease: "none" });
	tl.to("#loader", {duration: 0.6, left: "0%", delay:0,  ease: "none" },"-=0.3");
	
	// tl.fromTo("#logo", {opacity:0, scale:1}, {duration: 0.5, opacity:0.2, yoyo: true, repeat:-1,  ease: "none"},"-=0.5");
	tl.add( function(){ window.location = newLocation; }  )

	

});

// function newpage() {
// window.location = newLocation;
// }

$(document).ready(function(){



// Loader OUT

var tl = gsap.timeline({ });
// tl.add( function(){ CursorMessageShow(locale_Loading); }  )
tl.to("#logo", {duration: 0.6, opacity:0, delay:0, ease: "none" });
tl.to("#loader", {duration: 0.6, left: "-350%", delay:0, ease: "none" });
tl.to("#loader_blur", {duration: 1.2, left: "-350%", delay:0, ease: "none" },"-=0.5");
tl.set("#logo", {left: "-350%"});
// tl.add( function(){ CursorMessageHide(); }  )

}); 

/*! Reloads page on every visit */
function Reload() {
try {
var headElement = document.getElementsByTagName("head")[0];
if (headElement && headElement.innerHTML)
headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
}
catch (e) {}
}


/*! Reloads on every visit in mobile safari */
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
window.onpageshow = function(evt) {
if (evt.persisted) {
document.body.style.display = "none";
location.reload();
}
};
}