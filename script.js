window.addEventListener("mousemove", function(details) {

    gsap.to("#box", { //gsap concepts(methods) chatGPT se uthaye hai
        left: details.clientX + "px",
        ease: Power3,
    });
});