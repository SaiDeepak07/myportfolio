// Particles.js Config
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#6C63FF" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#6C63FF", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: true }
  }
});

// GSAP Animations
gsap.from(".hero-title span", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out"
});

// Animate skill bars on scroll
gsap.utils.toArray(".skill-progress").forEach(bar => {
  gsap.from(bar, {
    scrollTrigger: {
      trigger: bar,
      start: "top 80%",
    },
    width: 0,
    duration: 1.5,
    ease: "bounce.out"
  });
});