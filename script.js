function logAnalytics(action) {
    console.log(`[Analytics] User intracted with ${action}`);


const ctaButton = document.querySelector(".cta-btn");

ctaButton.addEventListener("click", function () {
   logAnalytics("Get Started Button");


    ctaButton.disabled = true;

    ctaButton.textContent= "Loading...";

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"

    });

    setTimeout(() => {
        ctaButton.disabled= false;
        ctaButton.textContent="Get Started";
    }, 1000);
    
});