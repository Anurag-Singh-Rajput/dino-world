anime({
  targets: '.photo',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 900},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
});


anime({
  targets: '.home-button',
  scaleY: [
    { value: [1, 1], duration: 1200 },
    { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 900 },
    { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
anime({
  targets: '.about-img',
  scaleX: [
    { value: [1, 1], duration: 1200 },
    { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 900 },
    { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
});




