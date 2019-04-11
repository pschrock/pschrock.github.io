const controller = new ScrollMagic.Controller();

// ScrollMagic - Navbar
const shrinkNavbar = new TweenMax.to('.navbar ul', .5, {padding: 0, background: '#263a50'});
const scene1 = new ScrollMagic.Scene({
  triggerElement: ".navbar", // point of execution
  duration: $('.main').height(), // pin element for the 'main' height
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin('.navbar')
.setTween(shrinkNavbar)
.addTo(controller);

//ScrollMagic - About Heading Pinned
const bounceAboutImg = new TweenMax.from('.about .about-wrap-left', 1, {scale: 0.25, opacity: 0, ease:Bounce.easeOut});
const scene2 = new ScrollMagic.Scene({
  triggerElement: '.about'
})
.setTween(bounceAboutImg)
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".about-wrap-left", // point of execution
  duration: $('.about .about-wrap-right').height() - 400, // pin element for the 'main' height
  triggerHook: 0.15, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin('.about-wrap-left')
.addTo(controller);

//ScrollMagic - Portfolio Heading Pinned
const bouncePrtfolioImg = new TweenMax.from('.portfolio .port-wrap-left', 1, {scale: 0.25, opacity: 0, ease:Bounce.easeOut});
const scene4 = new ScrollMagic.Scene({
  triggerElement: '.portfolio'
})
.setTween(bouncePrtfolioImg)
.addTo(controller);

//ScrollMagic - Portfolio Heading Pinned
const scene5 = new ScrollMagic.Scene({
  triggerElement: ".port-wrap-left", // point of execution
  duration: $('.portfolio .port-wrap-right').height() - 400, // pin element for the 'main' height
  triggerHook: 0.15, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin('.port-wrap-left')
.addTo(controller);

// ScrollMagic - Navigation to Pages
$('.navbar li').click(function(e) {
  const currentSelected = '.' + $(e.target).html().toLowerCase();

  if(currentSelected == '.home') {
    TweenMax.to(window, 1, {
      scrollTo:{
        y:currentSelected,
        offsetY: 225},
      ease:Power2.easeOut
    });
  } else {
    TweenMax.to(window, 1, {
      scrollTo:{
        y:currentSelected,
        offsetY:0},
      ease:Power2.easeOut
    });
  }
});

const cards = $('div.card');
for (i = 0; i<cards.length; i += 1){
  cards[i].addEventListener('mouseover', (e) => {
    if(e.bubbles) {
      const card = new TweenMax.to(cards[i]+'>div>.overlay', 1, {right: 0});
      const scene6 = new ScrollMagic.Scene({
        triggerElement: cards[i]+'>div>.overlay'
      })
      .setTween(card)
      .addTo(controller);
    }
  });
}


// scroll Bind to page
$(function() {
  $.scrollify({
     section : ".panel",
     // sectionName : "Home",
     easing: "easeOutExpo",
     scrollSpeed: 1100,
     touchScroll:true,
     scrollbars: false
  });
});


// send Message - validates fields are not empty
$('#sendButton').click((e) => {
  if ($('#name').val() == "") {
    e.preventDefault();
    alert("Please input your name.");
  } else if ($('#email').val() == "") {
    e.preventDefault();
    alert("Please input an email to receive a reply.");
  } else if ($('#message').val() == "") {
    e.preventDefault();
    alert("Please input a message you would like to send.");
  } else {
    alert("Your message has been sent.");
  }
});
