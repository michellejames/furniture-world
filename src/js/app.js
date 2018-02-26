
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



///////// SLIDER ///////////
var carousel = $(".carousel"),
    currdeg  = 0;

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








