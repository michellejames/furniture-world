<<<<<<< HEAD
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
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
	let scene = $('#room-scene').get(0);
	let parallax = new Parallax(scene);	
});

$(function () {
	let scene = $('#opening-scene').get(0);
	let parallax = new Parallax(scene);	
});

$(function () {
	let scene = $('#falling-scene').get(0);
	let parallax = new Parallax(scene);	
});
=======

//TweenMax.fromTo(".background-image", 1.5, {y: "200vh"}, {y: "0vh"});

let box = document.querySelector(".box");

// let tunnelAnimation = new TimelineMax();
// tunnelAnimation.to(".tunnel", 1, {x:0, y:-300,z:0, repeat: -1, ease: Linear.easeNone});

// let falling = new TimelineMax();
// falling.fromTo(".chair", 1.5, {top: "105vh"}, {top: "-60vh"});
// falling.fromTo(".table", 1.5, {top: "105vh"}, {top: "-60vh"});
// falling.fromTo(".drum", 1.5, {top: "105vh"}, {top: "-60vh"});
// falling.to(".box", 2, {left: "300px", top: "85%", rotation: 450});
// falling.eventCallback("onComplete", leaveTunnel);

// function leaveTunnel () {
// 	console.log("it worked");

// 	TweenMax.fromTo(".container-page", 2, {y: "0%", ease: Linear.easeNone}, {y: "-100%", ease: Linear.easeNone});
// 	tunnelAnimation.kill();
// }

$(function () {

	var scene = $('#scene').get(0);

	var parallax = new Parallax(scene);	
});


>>>>>>> 9346f3614678dc4a4a8f5adfda1463079ce8003b

///////// SLIDER ///////////
var carousel = $(".carousel"),
    currdeg  = 0;

<<<<<<< HEAD

let carouselContainer = document.querySelector(".carousel-container");
var hammertime = new Hammer(carouselContainer);
hammertime.on('swiperight', function() {
	currdeg = currdeg - 36;
	spinCarouselToCurrDeg();
});
hammertime.on('swipeleft', function() {
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
=======
$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 36;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 36;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}


let nextButton = document.querySelector(".next");
let previousButton = document.querySelector(".prev");

let furnitureClickA = document.querySelector(".item-a-image");
furnitureClickA.onclick = function () {
	let timelineImageA = new TimelineMax();
	timelineImageA.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageA.to(".headline__image-a", .1, {left: "10%", opacity: 1});
	timelineImageA.to(".details__image-a", .1, {right: "10%", opacity: 1});
	timelineImageA.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageA.to(".a", .1, {opacity: 1});
	timelineImageA.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageA.reverse();
	}

	previousButton.onclick = function () {
		timelineImageA.reverse();
	}
}

let furnitureClickB = document.querySelector(".item-b-image");
furnitureClickB.onclick = function () {
	// TweenMax.to(".carousel-container", 1, {scale: 7, ease: Linear.easeNone});
	// TweenMax.to(".headline__image-b", 1, {left: "10%", opacity: 1});
	// TweenMax.to(".details__image-b", 1, {right: "10%", opacity: 1});
	// TweenMax.to(".item", 1, {opacity: 0});
	// TweenMax.to(".b", 1, {opacity: 1});

	let timelineImageB = new TimelineMax();
	timelineImageB.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageB.to(".headline__image-b", .1, {left: "10%", opacity: 1});
	timelineImageB.to(".details__image-b", .1, {right: "10%", opacity: 1});
	timelineImageB.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageB.to(".b", .1, {opacity: 1});
	timelineImageB.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageB.reverse();
	}

	previousButton.onclick = function () {
		timelineImageB.reverse();
	}
}

let furnitureClickC = document.querySelector(".item-c-image");
furnitureClickC.onclick = function () {
	let timelineImageC = new TimelineMax();
	timelineImageC.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageC.to(".headline__image-c", .1, {left: "10%", opacity: 1});
	timelineImageC.to(".details__image-c", .1, {right: "10%", opacity: 1});
	timelineImageC.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageC.to(".c", .1, {opacity: 1});
	timelineImageC.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageC.reverse();
	}

	previousButton.onclick = function () {
		timelineImageC.reverse();
	}
}

let furnitureClickD = document.querySelector(".item-d-image");
furnitureClickD.onclick = function () {
	let timelineImageD = new TimelineMax();
	timelineImageD.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageD.to(".headline__image-d", .1, {left: "10%", opacity: 1});
	timelineImageD.to(".details__image-d", .1, {right: "10%", opacity: 1});
	timelineImageD.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageD.to(".d", .1, {opacity: 1});
	timelineImageD.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageD.reverse();
	}

	previousButton.onclick = function () {
		timelineImageD.reverse();
	}
}


let furnitureClickE = document.querySelector(".item-e-image");
furnitureClickE.onclick = function () {
	let timelineImageE = new TimelineMax();
	timelineImageE.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageE.to(".headline__image-e", .1, {left: "10%", opacity: 1});
	timelineImageE.to(".details__image-e", .1, {right: "10%", opacity: 1});
	timelineImageE.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageE.to(".e", .1, {opacity: 1});
	timelineImageE.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageE.reverse();
	}

	previousButton.onclick = function () {
		timelineImageE.reverse();
	}
}

let furnitureClickF = document.querySelector(".item-f-image");
furnitureClickF.onclick = function () {
	let timelineImageF = new TimelineMax();
	timelineImageF.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageF.to(".headline__image-f", .1, {left: "10%", opacity: 1});
	timelineImageF.to(".details__image-f", .1, {right: "10%", opacity: 1});
	timelineImageF.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageF.to(".f", .1, {opacity: 1});
	timelineImageF.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageF.reverse();
	}

	previousButton.onclick = function () {
		timelineImageF.reverse();
	}
}

let furnitureClickG = document.querySelector(".item-g-image");
furnitureClickG.onclick = function () {
	let timelineImageG = new TimelineMax();
	timelineImageG.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageG.to(".headline__image-g", .1, {left: "10%", opacity: 1});
	timelineImageG.to(".details__image-g", .1, {right: "10%", opacity: 1});
	timelineImageG.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageG.to(".g", .1, {opacity: 1});
	timelineImageG.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageG.reverse();
	}

	previousButton.onclick = function () {
		timelineImageG.reverse();
	}
}

let furnitureClickH = document.querySelector(".item-h-image");
furnitureClickH.onclick = function () {
	let timelineImageH = new TimelineMax();
	timelineImageH.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageH.to(".headline__image-h", .1, {left: "10%", opacity: 1});
	timelineImageH.to(".details__image-h", .1, {right: "10%", opacity: 1});
	timelineImageH.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageH.to(".h", .1, {opacity: 1});
	timelineImageH.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageH.reverse();
	}

	previousButton.onclick = function () {
		timelineImageH.reverse();
	}
}

let furnitureClickI = document.querySelector(".item-i-image");
furnitureClickI.onclick = function () {
	let timelineImageI = new TimelineMax();
	timelineImageI.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageI.to(".headline__image-i", .1, {left: "10%", opacity: 1});
	timelineImageI.to(".details__image-i", .1, {right: "10%", opacity: 1});
	timelineImageI.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageI.to(".i", .1, {opacity: 1});
	timelineImageI.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageI.reverse();
	}

	previousButton.onclick = function () {
		timelineImageI.reverse();
	}
}

let furnitureClickJ = document.querySelector(".item-j-image");
furnitureClickJ.onclick = function () {
	let timelineImageJ = new TimelineMax();
	timelineImageJ.to(".carousel-container", .1, {scale: 7, ease: Linear.easeNone});
	timelineImageJ.to(".headline__image-j", .1, {left: "10%", opacity: 1});
	timelineImageJ.to(".details__image-j", .1, {right: "10%", opacity: 1});
	timelineImageJ.to(".item", .1, {opacity: 0, delay: .4});
	timelineImageJ.to(".j", .1, {opacity: 1});
	timelineImageJ.to(".highlight-wrapper", .1, {display: "block"});

	nextButton.onclick = function () {
		timelineImageJ.reverse();
	}

	previousButton.onclick = function () {
		timelineImageJ.reverse();
	}
}



let dragFurniture = document.querySelector(".carousel-container")
Draggable.create(dragFurniture, {
	// bounds:".test-bounds",
	type: 'x',
	onDrag: function() {
		console.log("onDrag");

	// if window.innerWidth is < than 30% or > than 70%
	},
	onDragEnd: function(){
		console.log("onDragEnd");
	}
})







>>>>>>> 9346f3614678dc4a4a8f5adfda1463079ce8003b

