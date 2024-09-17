const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
  
});

//gsap animation

gsap.from(".nav-links",{
y:10,
duration:2,
stagger:.1,
ease:Power3,
opacity:1,
})


Shery.textAnimate(".eph-heading h1", {
//Parameters are optional.
style: 2,
y: 30,
delay:.3,
duration: 2,
ease: "cubic-bezier(0.23, 1, 0.320, 1)",
multiplier: 0.1,
});

Shery.imageEffect(".eph-img",{
style:3,
config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":43.51,"range":[0,100]},"geoVertex":{"range":[1,64],"value":14.95},"zindex":{"value":"-1","range":[-9999999,9999999]},"aspect":{"value":0.8125},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.35,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
}
)

gsap.from(".eph-img img",{
  z:'-5',
  ease:Power3,
  duration:1,
  opacity:0,
  y:-100,
})

Shery.imageEffect(".product-img",{
  style:5,
  gooey:true,
  config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.4286628310524367},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.199989,"range":[0,2],"_gsap":{"id":43}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})



//gsap animation

gsap.from(".nav-links",{
y:10,
duration:2,
stagger:.1,
ease:Power3,
opacity:0,
})

Shery.textAnimate(".animtion-hero h1", {
//Parameters are optional.
style: 2,
y: 30,
delay:.3,
duration: 2,
ease: "cubic-bezier(0.23, 1, 0.320, 1)",
multiplier: 0.1,
});

Shery.imageEffect(".animation-image1",{
style:5,
config:{"a":{"value":6.64,"range":[0,30]},"b":{"value":0.88,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5333333333333333},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})



gsap.from(".animtion-hero",{
  y:30,
  opacity:0,
  duration:2,
  delay:.3,
  ease:Power3,
})
function video(){
    var video = document.querySelector("#video video");
    var btu = document.querySelector(".btu");
    btu.addEventListener("mouseenter", function(){
        if (video.style.opacity === "1") {
            video.style.opacity = "0"
          } else {
            video.style.opacity = "1"
          }
    })
    btu.addEventListener("mouseleave",function(){
      if (video.style.opacity === "1") {
        video.style.opacity = "0"
      } else {
        video.style.opacity = "1"
      }
    })
}
video()