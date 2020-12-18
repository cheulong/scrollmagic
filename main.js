// init
var controller = new ScrollMagic.Controller();

//scene
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#second",
  duration: "30%",
  triggerHook: 0.7, //0-1
})
  .setClassToggle("#second", "fade-in")
  .addIndicators({
    name: "fade scene",
    colorTrigger: "white",
    indent: 200,
    colorStart: "black",
    colorEnd: "black",
  })
  .addTo(controller);
