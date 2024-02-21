gsap.registerPlugin(ScrollTrigger);



gsap.to(".square", {
    x: 800,
    duration: 4,
    scrollTrigger: {
        trigger: ".square",
        start: "top 50%",
        end: "center 20%",
        toggleActions:"restart reverse resume reset",
                     //onenter onleave onenterback onleaveback
        markers: true,
        
        toggleClass:"red"
    }
});
