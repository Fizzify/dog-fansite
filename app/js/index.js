var tl = gsap.timeline();

tl.from(".home-title", {
  opacity: 0,
  y: "-30%",
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "=-1"
);

tl.from(
  ".stagger2",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "=-1.5"
);
