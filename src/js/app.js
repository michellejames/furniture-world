
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);	
});

//////// AUDIO ////////

$('#falling-audio').prop("volume", 0.0);
$('#room-audio').prop("volume", 0.0);


TweenMax.to((".cloud1"), 1, {x: 5, y: 3, yoyo: true, repeat: -1, ease: Power2.easeInOut});
TweenMax.to((".cloud2"), 1.5, {x: 3, y: 5, yoyo: true, repeat: -1, ease: Power2.easeInOut});
TweenMax.to((".cloud3"), 0.5, {x: 2, y: 2, yoyo: true, repeat: -1, ease: Power2.easeInOut});
TweenMax.to((".cloud4"), 0.75, {x: 3, y: 5, yoyo: true, repeat: -1, ease: Power2.easeInOut});

let castleDoor = document.querySelector(".castle-door");
castleDoor.onclick = function () {
	console.log("clicked on door");
	let cloudsTimeline = new TimelineMax({onComplete:flashFunction});
	$('#opening-audio').animate({volume: 0.0}, 1500);
	cloudsTimeline.to(".cloud1", 2, {left: "120%"}, 0.5);
	cloudsTimeline.to(".cloud2", 2, {left: "-60%"} , 0.5);
	cloudsTimeline.to(".opening", 2, {scale: 5, opacity: 0}, 0.5);
	cloudsTimeline.to(".cloud3", 2, {left: "-60%"} , 0.5);
	cloudsTimeline.to(".cloud4", 2, {left: "120%"} , 0.5);
};

TweenMax.to(".falling-item", 0.5, {x: 5, y: 3});

var flashFunction = function () {
	$('#falling-audio').animate({volume: 1.0}, 3000);
	let fallingTimeline = new TimelineMax({onComplete:roomFunction});
	fallingTimeline.to(".flash", .01, {opacity: 1, display: "block", position: "fixed"});
	fallingTimeline.to(".flash", 2, {opacity: 0, display: "none"});
	fallingTimeline.to("#falling-scene", 2, {opacity: 1});
	fallingTimeline.to(window, 15, {opacity: 1, scrollTo:"#room-scene"}, 0.5);
	fallingTimeline.to(".flash", .1, {opacity: 1, display: "block"});
	fallingTimeline.to(".flash", .1, {opacity: 0, display: "none"});
};


var roomFunction = function () {
	$('#falling-audio').animate({volume: 0.0}, 1500);
	$('#room-audio').animate({volume: 1.0}, 3000);
	let fallingTimeline = new TimelineMax({onComplete:roomFunction});
};

//////////// DIRECTIONS EFFECTS ////////////

TweenMax.fromTo(".directions", .05, {opacity: .5, yoyo: true, repeat: -1}, {opacity: 1, yoyo: true, repeat: -1});

//////////// PARALLAX EFFECTS ////////////
$(function () {
	new Parallax($('#room-scene').get(0));	
	new Parallax($('#opening-scene').get(0));	
	new Parallax($('#falling-scene').get(0));	
});


///////// SLIDER ///////////
var carousel = $(".carousel"),
    currdeg  = 0;

let carouselContainer = document.querySelector(".carousel-container");
var hammertime = new Hammer(carouselContainer);
hammertime.on('swiperight', function() {
	currdeg = currdeg - 36;
	spinCarouselToCurrDeg();
}).on('swipeleft', function() {
	currdeg = currdeg + 36;
	spinCarouselToCurrDeg();
});

var spinCarouselToCurrDeg = function() {
	TweenMax.to(carousel, 1, {shortRotationY: currdeg})
}

TweenMax.to(".flower", 2, {left: 5, top: 15, yoyo: true, repeat: -1, ease: Power2.easeInOut});

/////// Make slider clickable ////////

var furnitureClickGeneric = function(letter, rotation) {
	currdeg = rotation;
	spinCarouselToCurrDeg();

	let exitButton = document.querySelector(".details__image-"+letter+" .exit-product")
	let timelineImage = new TimelineMax();
	timelineImage.to(".details__image-"+letter, 0.1, {right: "0%", opacity: 1});
	timelineImage.to(".item", 0.1, {opacity: 0, delay: 0.4});
	timelineImage.to("."+letter, 0.1, {opacity: 1});
	timelineImage.to(".highlight-wrapper", 0.1, {display: "block"});

	exitButton.onclick = function () {
		timelineImage.reverse();
	};
}

let furnitureClickA = document.querySelector(".item-a-image");
furnitureClickA.onclick = function () {
	furnitureClickGeneric("a", 180);
};


let furnitureClickB = document.querySelector(".item-b-image");
furnitureClickB.onclick = function () {
	furnitureClickGeneric("b", 144);
};

let furnitureClickC = document.querySelector(".item-c-image");
furnitureClickC.onclick = function () {
	furnitureClickGeneric("c", 108);
};

let furnitureClickD = document.querySelector(".item-d-image");
furnitureClickD.onclick = function () {
	furnitureClickGeneric("d", 72);
};

let furnitureClickE = document.querySelector(".item-e-image");
furnitureClickE.onclick = function () {
	furnitureClickGeneric("e", 36);
};

let furnitureClickF = document.querySelector(".item-f-image");
furnitureClickF.onclick = function () {
	furnitureClickGeneric("f", 0);
};

let furnitureClickG = document.querySelector(".item-g-image");
furnitureClickG.onclick = function () {
	furnitureClickGeneric("g", 324);
};

let furnitureClickH = document.querySelector(".item-h-image");
furnitureClickH.onclick = function () {
	furnitureClickGeneric("h", 288);
};

let furnitureClickI = document.querySelector(".item-i-image");
furnitureClickI.onclick = function () {
furnitureClickGeneric("i", 252);
};

let furnitureClickJ = document.querySelector(".item-j-image");
furnitureClickJ.onclick = function () {
furnitureClickGeneric("j", 216);
};

///////// RAIN /////////////


var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function() {
  $('section').toggleClass('splat-toggle');
  $('.splat-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.back-row-toggle.toggle').on('click', function() {
  $('section').toggleClass('back-row-toggle');
  $('.back-row-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.single-toggle.toggle').on('click', function() {
  $('section').toggleClass('single-toggle');
  $('.single-toggle.toggle').toggleClass('active');
  makeItRain();
});

makeItRain();


