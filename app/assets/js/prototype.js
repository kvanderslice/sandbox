$(document).ready(function(){

	// Init Scrollmagic
	var controller = new ScrollMagic.Controller();

	// Pin the Intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#hero__prototype',
		triggerHook: 0,
		// duration: '49.75%'
		duration: '55.75%' //if you want the pin to unpin at some point you can add a duration, otherwise it fully covers it
	})
	.setPin('#hero__prototype', {pushFollowers: false})
	.addTo(controller);

	// Parallax Effect
	var parallaxTl = new TimelineMax(); //set the variable to a greensock timeline so you can controll multiple animated elements
	parallaxTl //set the parameters of what will occur within the timeline
		.from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene = new ScrollMagic.Scene({ //set the scene for ScrollMagic
		triggerElement: '.bcg-parallax', 
		triggerHook: 1, //bottom of page
		duration: '100%'
	})
	.setTween(parallaxTl) //Then pass the timeline you created to the Tween on the indicator you've decided on
	.addTo(controller);

	// Build Scene
	var sceneOne = new ScrollMagic.Scene({
		triggerElement: '#header-one h1',
		duration: '90%', // The duration of the animation is 90% of the viewport height (this is responsive)
		triggerHook: 0.9 // Change where the trigger hook is 
		// reverse: false // If you want to scene to only trigger once.  If you only want to trigger once you'll also need ot remove the duration
	})

	.setClassToggle( '#header-one', 'fade-in') // add class to header-one

	// Add Indicators
	// .addIndicators({
	// 	name: 'scene one',
	// 	colorTrigger: '#55B795',
	// 	colorStart: '#75C695',
	// 	colorEnd: 'black'
	// })
	.addTo(controller);

	// Build Scene
	var sceneTwo = new ScrollMagic.Scene({
		triggerElement: '#header-two' 
	})

	.setClassToggle( '#header-two', 'fade-in') // add class to header-one

	// Add Indicators
	// .addIndicators({
	// 	name: 'scene two',
	// 	colorTrigger: '#55B795',
	// 	// indent: 200,
	// 	colorStart: '#75C695'
	// })
	.addTo(controller);


	// Build Scene 
	var sceneThree = new ScrollMagic.Scene({
		triggerElement: '#panel-one',
		duration: '100%',
		reverse: false
	})

	.setClassToggle( '#heading-un', 'fade-out')

		// Add Indicators
		// .addIndicators({
		// 	name: 'un trigger',
		// 	colorTrigger: '#55B795',
		// 	// indent: 200,
		// 	colorStart: '#75C695'
		// })
		.addTo(controller);


	// Build Scene 
	var sceneFour = new ScrollMagic.Scene({
		triggerElement: '#panel-one',
		duration: '100%',
		reverse: false
	})

	.setClassToggle( '#move-title', 'move-left')

		// Add Indicators
		// .addIndicators({
		// 	name: 'un trigger',
		// 	colorTrigger: '#55B795',
		// 	// indent: 200,
		// 	colorStart: '#75C695'
		// })
		.addTo(controller);


	// Build Scene 
	var sceneFive = new ScrollMagic.Scene({
		triggerElement: '#panel-one',
		duration: '100%'
	})

	.setClassToggle( '#hero__prototype', 'img--overlay-blackout')

		// Add Indicators
		// .addIndicators({
		// 	name: 'un trigger',
		// 	colorTrigger: '#55B795',
		// 	// indent: 200,
		// 	colorStart: '#75C695'
		// })
		.addTo(controller);


});


// Looping through elements to trigger multiple events

// Init Scrollmagic
// var controller = new ScrollMagic.Controller();

// $('.height-full').each(function (){

// 	// console.log(this); // To find out what this is and maybe use that to find children elements

// 	// Build a Scene
// 	var sceneThree = new ScrollMagic.Scene({
// 		triggerElement: this.children[0],
// 	})
// 	.setClassToggle(this, 'fade-in')
// 	.addIndicators({
// 		name: 'fade panel'
// 	})
// 	.addTo(controller);

// });


