// GSAP TIMELINE
function cookieAnimation() {
  let cookieTL = gsap.timeline({
    defaults: { duration: 0.75, ease: "power1.out" },
  });
  cookieTL.fromTo(
    ".cookie-container",
    { scale: 0 },
    { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
  );
  cookieTL.fromTo(
    "#cookie",
    { opacity: 0, x: -50, rotation: "-45deg" },
    { opacity: 1, x: 0, rotation: "0deg" },
    "<50%"
  );
  cookieTL.fromTo(
    ".cookie-text ",
    { x: 30, opacity: 0 },
    { x: 0, opacity: 1 },
    "<"
  );
  // ! https://greensock.com/cheatsheet/:
  // "<" - will align start of most recently-added child
  // "<0.2" - 0.2 seconds after ^^
  // "-=50%" - overlap half of inserting animation's duration
  // "<25%" - 25% into the previous animation (from its start)
  cookieTL.fromTo(
    "#cookie",
    { y: 0 },
    { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
  );
  cookieTL.fromTo(
    "#crumbs",
    { y: 0 },
    { y: -10, rotation: "-20deg", yoyo: true, repeat: -1 },
    "<"
  );
}

// FADING THE COOKIE POPUP OUT
let button = document
  .querySelector(".cookie-button")
  .addEventListener("click", () => {
    gsap.to(".cookie-container", {
      opacity: 0,
      y: 100,
      duration: 0.25,
      ease: "power1.out",
    });
  });

// INVOKES ON READ
cookieAnimation();
