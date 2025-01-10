let blr = document.querySelector("#box2");
document.addEventListener("mousemove", function(details) {
    blr.style.left = details.x + "px";
    blr.style.top = details.y + "px";

})
document.addEventListener("mousemove", function(details) {


    gsap.to("#box", { //gsap concepts(methods) chatGPT se uthaye hai
        left: details.clientX + "px",
        top: details.clientY + "px",
        duration: 0.5,
        ease: "Power2.easeOut",
    });
});