//Example One
// $(function() {
  
//   $('[data-scrollmagic]').each(function (index, elem) {
//     // Init ScrollMagic Controller
//     var scrollMagicController = new ScrollMagic();
     
//     // Create Animations
//     var title = $(elem).find('h3'),
//         text = $(elem).find('p'),
//         btn = $(elem).find('a');
    
//     var tl = new TimelineMax({pause: true});    
//     tl.add("start") // add timeline label
//       .fromTo(title, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
//       .fromTo(text, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
//       .fromTo(btn, 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
    
//     // Create the Scene and trigger when visible
//     var scene = new ScrollScene({
//       triggerElement: elem,
//       offset: 0 /* offset the trigger Npx below scene's top */
//     })
//     .setTween(tl)
//     .addTo(scrollMagicController);

//     // Add debug indicators fixed on right side
//      scene.addIndicators(); 
//   });
// });

//Example Two
// (function($) {
//   $(document).ready(function() {
//     var controller = new ScrollMagic.Controller(),
//         count = $('.animate').length,
//         i = 0,
//         blockTween,
//         scene;
    
//     $('.animate').css('width', $(window).width() / count);
    
//     for (; i < count; i++) {
//       blockTween = new TweenMax.to('#animate' + i, 1.5, {
//         css: {
//           backgroundColor: '#9B59B6',
//           transform: 'scale(' + (2 + (i / count)) + ') ' +
//                      'translateY(' + ((i / (count / 2)) * -100) + 'px) ' +
//                      'rotate(' + ((1 + (i / count)) * 360) + 'deg)'
//         }
//       });
      
//       scene
//           = new ScrollMagic.Scene({
//             duration: 250,
//             offset: 100
//           })
//         .setTween(blockTween)
//         .setPin('#animate' + i)
//         .addTo(controller);
//     }
    
//     //title parrallax
//      blockTween = new TweenMax.to('#title', 1.5, {
//         css: {
//           transform: 'translateY(' + 100 + 'px)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             duration: 250,
//             offset: 0
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //fly in right
//     blockTween = new TweenMax.to('#fly-right', 1.5, {
//         css: {
//           transform: 'translate(0)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#fly-right').offset().top - 100,
//             duration: 400
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //fly in left
//     blockTween = new TweenMax.to('#fly-left', 1.5, {
//         css: {
//           transform: 'translate(0)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#fly-left').offset().top - 100,
//             duration: 400
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //tilt
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#tilt').offset().top - 320,
//             duration: 320
//           })
//         .setPin('#tilt')
//         .addTo(controller);
    
//     //1
//     blockTween = new TweenMax.to('#tilt1', 1.5, {
//         css: {
//           transform: 'rotateY(45deg) translateZ(-100px) perspective(600px)',
//           boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#tilt').offset().top - 320,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //2
//     blockTween = new TweenMax.to('#tilt2', 1.5, {
//         css: {
//           transform: 'rotateY(45deg) perspective(600px)',
//           boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#tilt').offset().top - 320,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //3
//     blockTween = new TweenMax.to('#tilt3', 1.5, {
//         css: {
//           transform: 'rotateY(45deg) translateZ(100px) perspective(600px)',
//           boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#tilt').offset().top - 320,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //grow
//     blockTween = new TweenMax.to('#grow', 1.5, {
//         css: {
//           width: '100vw'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#stripe-container').offset().top - ($(window).height() * 0.05),
//             duration: $(window).height()
//           })
//         .setTween(blockTween)
//         .setPin('#stripe-container')
//         .addTo(controller);
    
//     //spread
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#spread').offset().top - 320,
//             duration: 320
//           })
//         .setPin('#spread')
//         .addTo(controller);
    
//     //1
//     blockTween = new TweenMax.to('#spread1', 1.5, {
//         css: {
//           transform: 'translateX(-200px) scale(0.9)',
//           boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#spread').offset().top - 320,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //2
//     blockTween = new TweenMax.to('#spread2', 1.5, {
//         css: {
//           transform: 'translateX(200px) scale(0.9)',
//           boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#spread').offset().top - 320,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //3
//     blockTween = new TweenMax.to('#spread3', 1.5, {
//         css: {
//           transform: 'translateX(-100px)',
//           boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#spread').offset().top - 320,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //4
//     blockTween = new TweenMax.to('#spread4', 1.5, {
//         css: {
//           transform: 'translateX(100px)',
//           boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#spread').offset().top - 320,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //5
//     blockTween = new TweenMax.to('#spread5', 1.5, {
//         css: {
//           transform: 'scale(1.1)',
//           boxShadow: '1px 0 5px rgba(100, 100, 100, 0.6)'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#spread').offset().top - 320,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .addTo(controller);
    
//     //fade in
//     blockTween = new TweenMax.to('#fade-in', 1.5, {
//         css: {
//           opacity: '1'
//         }
//       });
    
//     scene
//           = new ScrollMagic.Scene({
//             offset: $('#fade-in').offset().top - 210,
//             duration: 320
//           })
//         .setTween(blockTween)
//         .setPin('#fade-in')
//         .addTo(controller);
    
//     blockTween = null;
//     scene = null;
//   });
// })(jQuery);

//Example Three
//simulate activation
// $('.scroll-deck1 h1').addClass('active');


// // init controller
// var controller = new ScrollMagic.Controller();

// var tweenHi = new TimelineMax();
// tweenHi.add([
//   TweenMax.from(".scroll-deck1 h1", 0.5, {
//     opacity: 1,
//     x: 0,
//     ease: Back.ease
//   }),
//   TweenMax.to(".scroll-deck1 h1", 0.5, {
//     opacity: 0,
//     x: 20,
//     ease: Back.ease
//   })
// ]);

// var sceneHi = new ScrollMagic.Scene({
//     duration: '100%'
//   })
//   .setTween(tweenHi)
//   //.addIndicators({ name: "Hi (duration: 500)" })
//   .setPin(".scroll-deck1")
//   .addTo(controller);


//   //Example Four
//   /* Using jQuery */
// (function($) {
 
//     // Init ScrollMagic
//     var ctrl = new ScrollMagic.Controller({
//         globalSceneOptions: {
//             triggerHook: 'onLeave'
//         }
//     });
 
//   // Create scene
// $("section").each(function() {
 
//     new ScrollMagic.Scene({
//         triggerElement: this
//     })
//     .setPin(this)
//     .addTo(ctrl);
 
// });
  
// })(jQuery);


//Example Five 

// $( document ).ready(function() {
//  /**
//   * Example Five
//   **/
// window.addEventListener('scroll', function(event) {
//   var depth, i, layer, layers, len, movement, topDistance, translate3d;
//   topDistance = this.pageYOffset;
//   layers = document.querySelectorAll("[data-type='parallax']");
//   for (i = 0, len = layers.length; i < len; i++) {
//     layer = layers[i];
//     depth = layer.getAttribute('data-depth');
//     movement = -(topDistance * depth);
//     translate3d = 'translate3d(0, ' + movement + 'px, 0)';
//     layer.style['-webkit-transform'] = translate3d;
//     layer.style['-moz-transform'] = translate3d;
//     layer.style['-ms-transform'] = translate3d;
//     layer.style['-o-transform'] = translate3d;
//     layer.style.transform = translate3d;
//   }
// });


// });

