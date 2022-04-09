var controller = new ScrollMagic.Controller();
console.log(controller)
  var animPosition1 = {
    left: $("#anim-position-1").offset().left,
    top: $('#anim-position-1').offset().top,
    width: $('#anim-position-1').width(),
    height: $('#anim-position-1').height()
  }

  var animPosition2 = {
    left: $("#anim-position-2").offset().left,
    top: $('#anim-position-2').offset().top,
    width: $('#anim-position-2').width(),
    height: $('#anim-position-2').height()
  }

  var animPosition3 = {
    left: $("#anim-position-3").offset().left,
    top: $('#anim-position-3').offset().top,
    width: $('#anim-position-3').width(),
    height: $('#anim-position-3').height()
  }

  var animPosition4 = {
    left: $("#anim-position-4").offset().left,
    top: $('#anim-position-4').offset().top,
    width: $('#anim-position-4').width(),
    height: $('#anim-position-4').height()
  }

  var animPosition5 = {
    left: $("#anim-position-5").offset().left,
    top: $('#anim-position-5').offset().top,
    width: $('#anim-position-5').width(),
    height: $('#anim-position-5').height()
  }

  var firstAnimation = TweenMax.to("#moon", 1, {
    left: animPosition1.left -200,
    top: animPosition1.top,
    width: animPosition1.width,
    height: animPosition1.height
  });

  var secondAnimation = TweenMax.to("#moon", 1, {
    left: animPosition2.left - 200,
    top: animPosition2.top  - 100,
    width: animPosition2.width,
    height: animPosition2.height
  });

  var thirdAnimation = TweenMax.to("#moon", 1, {
    left: animPosition3.left -200,
    top: animPosition3.top -100,
    width: animPosition3.width,
    height: animPosition3.height
  });

  var fourthAnimation = TweenMax.to("#moon", 1, {
    left: animPosition4.left,
    top: animPosition4.top - 100,
    width: animPosition4.width,
    height: animPosition4.height
  });

  var fifthAnimation = TweenMax.to("#moon", 1, {
    left: animPosition5.left,
    top: animPosition5.top,
    width: animPosition5.height ,
    height: animPosition5.height
  });

  var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );


  var scene = new ScrollMagic.Scene(
    { triggerElement: "#moon-trigger", duration: animPosition1.top - 210, offset: 25, triggerHook: 0.5 }
  )
    .setTween(firstAnimation)
    // .addIndicators({ name: "tween css class 1" }) 
    .addTo(controller);

  var scene = new ScrollMagic.Scene(
    { triggerElement: "#moon-trigger", duration: animPosition2.top - 1000, offset: animPosition1.top - 200, triggerHook: 0.5 }
  )
    .setTween(secondAnimation)
    // .addIndicators({ name: "tween css class 2" }) 
    .addTo(controller);

  var scene = new ScrollMagic.Scene(
    { triggerElement: "#moon-trigger", duration: animPosition3.top - 1800, offset: animPosition2.top - 100, triggerHook: 0.5 }
  )
    .setTween(thirdAnimation)
    // .addIndicators({ name: "tween css class 3" }) 
    .addTo(controller);

  var scene = new ScrollMagic.Scene(
    { triggerElement: "#moon-trigger", duration: animPosition4.top - 2200, offset: animPosition3.top - 100, triggerHook: 0.5 }
  )
    .setTween(fourthAnimation)
    // .addIndicators({ name: "tween css class 4" }) 
    .addTo(controller);

  var scene = new ScrollMagic.Scene(
    { triggerElement: "#moon-trigger", duration: window.innerHeight - 700, offset: animPosition4.top + 200, triggerHook: 0.5 }
  )
    .setTween(fifthAnimation)
    // .addIndicators({ name: "tween css class 5" }) 
    .addTo(controller);

