// //Tutorial Stuff

// (function($) {
    
// 	// jQuery Selectors
// 	// var header = $("#header"),    // jQuery ID
// 	//     h1 = $("h1"),             // jQuery tag
// 	//     intro = $(".intro"),      // jQuery class
// 	//     firstItem = $("li:first-child"),    // jQuery first item
// 	//     secondItem = $("li:nth-child(2)"),    // jQuery second item
// 	//     lastItem = $("li:last-child");      // jQuery last item

// 	// JavaScript Selectors
// 	var header = document.getElementById("header"),
// 	    h1 = document.getElementsByTagName("h1"),
// 	    intro = document.getElementsByClassName("intro");
// 	    // firstItem = document.getElementsByClassName("list")[0].firstElementChild,
// 	    // secondItem = document.getElementsByClassName("list")[0].children[1],
// 	    // lastItem = document.getElementsByClassName("list")[0].lastElementChild;
	
// 	// JavaScript querySelector
// 	var	select = function(s) {
// 		return document.querySelector(s);
// 	};

// 	// JavaScript querySelectorAll
// 	var selectAll = function(s) {
// 		return document.querySelectorAll(s);
// 	};

// 	var intro2 = select('.intro');
// 	var allItems = selectAll('li');

// 	// Simple Tween
// 	TweenLite.to(allItems, 1.5, {y: 50, autoAlpha: 0});

// })(jQuery);



// //Lesson Two
// (function($) {
    
// 	var img = $('#img1'),
// 		h2 = $('h2');

// 	// Simple Tween
// 	TweenLite.from(img, 1, {x: -200});
// 	TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});

// })(jQuery);



// //Lesson Three
// (function($) {
    
// 	var img = $('#img1'),
// 		h2 = $('h2');

// 	// Simple Tween
// 	//TweenLite.from(img, 1, {x: -200, ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})});
// 	//TweenLite.from(img, 1, {x: -200, ease: SlowMo.ease.config(0.7, 0.7, false)});
// 	TweenLite.from(img, 1, {x: -200, ease: SteppedEase.config(20)});
// 	//TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});

// })(jQuery);



// //Lesson Four
// (function($) {
    
// 	var img = $('#img1'),
// 		h2 = $('h2'),
// 		i = 0;

// 	// Simple Callback Functions
// 	TweenLite.from(img, 1, {
// 		x: -200, 
// 		ease:Power1.easeInOut, 
// 		onStart: onStart,
// 		onUpdate: onUpdate,
// 		onComplete: onComplete
// 	});

// 	function onStart(){
// 		console.log('animation started');
// 	}

// 	function onUpdate(){
// 		//console.log('animation is in progress');
// 		h2.text(i++);
// 	}

// 	function onComplete(){
// 		console.log('animation completed');
// 	}

// })(jQuery);


// //Lesson Five
// (function($) {
    
// 	var img = $('#img1'),
// 		h2 = $('#h2'),
// 		h1 = $('#h1'),
// 		intro = $('.intro'),
// 		listItem = $('ul li'),
// 		tl = new TimelineLite();

// 	// Animating Multiple Objects
// 	// TweenLite.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.2});
// 	// TweenLite.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.4});
// 	// TweenLite.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.6});
// 	// TweenLite.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.8});
// 	// TweenLite.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 1});

// 	tl
// 		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
// 		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');

// })(jQuery);


// //Lesson Six
// (function($) {
    
// 	var img = $('#img1'),
// 		h2 = $('#h21'),
// 		h1 = $('#h11'),
// 		intro = $('.intro1'),
// 		listItem = $('#ul li'),
// 		tl = new TimelineLite();

// 	// Adding Tweens To A Timeline
// 	tl
// 		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
// 		.add('intro')
// 		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro')
// 		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=3')
// 		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro');

// })(jQuery);


// (function($) {
    
// 	var img = $('#img'),
// 		h2 = $('#h2'),
// 		h1 = $('#h1'),
// 		intro = $('.intro'),
// 		listItem = $('#ul li'),
// 		tl = new TimelineLite();

// 	// Controlling Timeline Playback
// 	tl
// 		.from(h1, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(intro, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(img, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(h2, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
// 		.from(listItem, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut});

// 	tl.pause();

// 	$('#1btnPlay').on('click',function(){
// 		tl.play();
// 	});

// 	$('#1btnPause').on('click',function(){
// 		tl.pause();
// 	});

// 	$('#1btnResume').on('click',function(){
// 		tl.resume();
// 	});

// 	$('#1btnReverse').on('click',function(){
// 		tl.reverse();
// 	});

// 	$('#1btnSpeedUp').on('click',function(){
// 		tl.timeScale(8);
// 	});

// 	$('#1btnSlowDown').on('click',function(){
// 		tl.timeScale(0.5);
// 	});

// 	$('#1btnSeek').on('click',function(){
// 		tl.seek(1);
// 	});

// 	$('#1btnProgress').on('click',function(){
// 		tl.progress(0.5);
// 	});

// 	$('#1btnRestart').on('click',function(){
// 		tl.restart();
// 	});

// })(jQuery);










