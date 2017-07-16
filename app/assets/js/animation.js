// // My Animations

// //Lesson 1 (Applied to Hero section - This is focusing on Simple Tween function)
// (function($) {

// //jQuery Selectors
// var heroTitle 	  = $("#hero--title"),
// 		heroSubtitle  = $("#hero--subtitle"),
// 		line					= $("#line"); 

// //Simple Tween looks like this : TweenLite.to(elem, duration, {variables(the things you want to do)});
// TweenLite.to(heroTitle, 1.5, {y: 50, autoAlpha: 0});
// //Call tweenlite, apply it to the element in this case herotitle, determine the duration of the tween, then apply the styles, in this case move on the y axis 50 and change opacity to 0 to fade out
// TweenLite.to(heroSubtitle, 1.5, {y: -50, autoAlpha: 0});
// TweenLite.to(line, 3, { x: -1200});

// })(jQuery);




// //Lesson 2 (Applied to Second Section - This is incorporating the from, set and to and from Tween functions)
// (function($) {

// //Selectors 
// var bgImg 				= $("#walt-img"),
// 		sectionTitle 	= $(".section--title");

// //Simple Tween with From included
// // TweenLite.from(bgImg, 1, {x: -1800});
// // TweenLite.to(sectionTitle, 1, {autoAlpha: 0, delay: 1});

// //Simple Tween with FromTo included - difference is the second set of attributes that are applied
// TweenLite.fromTo(bgImg, 3, {x: -1800, autoAlpha: 0}, {x: 0, autoAlpha: 1});
// TweenLite.to(sectionTitle, 1, {autoAlpha: 0, delay: 3});

// //My own Tween
// // TweenLite.from(sectionTitle, 2, {autoAlpha: 0});
// // TweenLite.to(bgImg, 5, {autoAlpha: 1, delay: 1});

// })(jQuery);



// //Lesson 3 (Applied to Third Section - This is adding in easing effects from the Greensock Lib)
// (function($) {
// 	var inlineImg   			= $(".inline-img"),
// 			sectionTitleAlt   = $(".section--title-alt");

// 	TweenLite.from(inlineImg, 3, {x: -1900, ease: SlowMo.ease.config(0.3, 0.4, false)});

// })(jQuery);


// //Lesson 4 (Applied to Fourth Section - This is including a simple callback function)

// (function($) {
    
// 		var changeTitle 	= $("#change-title");



// 	// Simple Callback Functions
// 	//utilizing the Tween callback options, of onStart, onUpdate and onComplete run your own callback functions
// 	TweenLite.from(changeTitle, 1, {
// 		x: -200, 
// 		ease:Power1.easeInOut, 
// 		onStart: onStartFunc,
// 		onUpdate: onUpdateFunc,
// 		onComplete: onCompleteFunc
// 	});

// 	function onStartFunc(){
// 		console.log('animation started');
// 	}

// 	function onUpdateFunc(){
// 		console.log('animation is in progress');
// 		TweenLite.to(changeTitle, 1, {autoAlpha: 0 });
// 	}

// 	function onCompleteFunc(){
// 		console.log('animation completed');
// 		TweenLite.to(changeTitle, 1, {autoAlpha: 1 });
// 		changeTitle.text('Hello');
// 	}

// })(jQuery);


// //Lesson 5 (Applied to section five, this goes over adding Tweens to a timeline)
// (function ($) {

// //set variables as usual, and then set a variable to reference the timeline you are creating. In this case that variable is called timeline
// 	var timelineTitle 		= $( '#timeline-title'),
// 			timelineLine 			= $( '#timeline-line'),
// 			timelineSubtitle 	= $( '#timeline-subtitle'),
// 			timeline          = new TimelineLite();

// //once timeline is set you can update your tweens as a timeline instead of individual elements that you have to time.  You can also use -=duration, to have the timeline start ahead of its normal starting time
// //below is the example of this with the classic tween delay, and then with the timeline instead

// 	// TweenLite.from(timelineTitle, 0.5, {y: 405, autoAlpha: 0, ease:Power1.easeOut, delay: 0.2});
// 	// TweenLite.from(timelineLine, 0.5, {y: 505, autoAlpha: 0, ease:Power1.easeOut, delay: 0.4});
// 	// TweenLite.from(timelineSubtitle, 0.5, {y: 655, autoAlpha: 0, ease:Power1.easeOut, delay: 0.6});

// 	timeline
// 		.from(timelineTitle, 0.5, {y: 465, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(timelineLine, 0.5, {y: 505, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 		.from(timelineSubtitle, 0.5, {y: 655, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');


// })(jQuery);

// //Lesson 6 (Applied to section six, this goes over modifying the Tween timeline)

// (function ($) {

// 	var timelineTitle 		= $( '#title-six'),
// 			timelineLine 			= $( '#line-six'),
// 			timelineSubtitle 	= $( '#subtitle-six'),
// 			timeline          = new TimelineLite();

// 	timeline
// 		.add('newTime') //You can add a timeline time stop (know in greensock as a label) and then determine animation delay from there.  The += basically sets the delay
// 		.from(timelineTitle, 0.5, {y: 465, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(timelineLine, 0.5, {y: 465, autoAlpha: 0, ease:Power1.easeOut}, 'newTime')
// 		.from(timelineSubtitle, 0.5, {y: 505, autoAlpha: 0, ease:Power1.easeOut}, 'newTime+=1');


// })(jQuery);


// //Lesson Seven (section seven- controlling timeline with Buttons)
// (function($) {
    
// 	var timelineTitle 		= $( '#title-seven'),
// 			timelineLine 			= $( '#line-seven'),
// 			timelineSubtitle 	= $( '#subtitle-seven'),
// 			timeline          = new TimelineLite();

// 	timeline
// 		.from(timelineTitle, 0.5, {y: 465, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(timelineLine, 0.5, {y: 465, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(timelineSubtitle, 0.5, {y: 505, autoAlpha: 0, ease:Power1.easeOut});

// 	timeline.pause(); //stop the timeline from playing until one of the btns is clicked and the function runs

// 	$('#btnPlay').on('click',function(){
// 		timeline.play();
// 	});

// 	$('#btnPause').on('click',function(){
// 		timeline.pause();
// 	});

// 	$('#btnResume').on('click',function(){
// 		timeline.resume();
// 	});

// 	$('#btnReverse').on('click',function(){
// 		timeline.reverse();
// 	});

// 	$('#btnSpeedUp').on('click',function(){
// 		timeline.timeScale(8);
// 	});

// 	$('#btnSlowDown').on('click',function(){
// 		timeline.timeScale(0.5);
// 	});

// 	$('#btnSeek').on('click',function(){
// 		timeline.seek(1);
// 	});

// 	$('#btnProgress').on('click',function(){
// 		timeline.progress(0.5);
// 	});

// 	$('#btnRestart').on('click',function(){
// 		timeline.restart();
// 	});

// })(jQuery);


// //Lesson Eight 
// //Lesson Seven (section seven- controlling timeline with Buttons)
// (function($) {
    
// 	var timelineTitle 		= $( '#title-eight'),
// 			timelineLine 			= $( '#line-eight'),
// 			timelineSubtitle 	= $( '#subtitle-eight'),
// 			buttons = $('button'),
// 			timeline          = new TimelineLite();

// 	timeline
// 		.from(timelineTitle, 0.5, {y: 465, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(timelineLine, 0.5, {y: 465, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 		.from(timelineSubtitle, 0.5, {y: 505, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 		.staggerFrom(buttons, .5, {cycle: {
// 			x: [50, -50],
// 			scale: [2, 0.5]
// 		}, autoAlpha: 0, ease:Power1.easeOut}, 0.5);

// 	$('#btnPlay8').on('click',function(){
// 		timeline.play();
// 	});

// 	$('#btnPause8').on('click',function(){
// 		timeline.pause();
// 	});

// 	$('#btnResume8').on('click',function(){
// 		timeline.resume();
// 	});

// 	$('#btnReverse8').on('click',function(){
// 		timeline.reverse();
// 	});

// 	$('#btnSpeedUp8').on('click',function(){
// 		timeline.timeScale(8);
// 	});

// 	$('#btnSlowDown8').on('click',function(){
// 		timeline.timeScale(0.5);
// 	});

// 	$('#btnSeek8').on('click',function(){
// 		timeline.seek(1);
// 	});

// 	$('#btnProgress8').on('click',function(){
// 		timeline.progress(0.5);
// 	});

// 	$('#btnRestart8').on('click',function(){
// 		timeline.restart();
// 	});

// })(jQuery);