anime({
    targets : '.navbar-brand',
    rotateZ : 360,
    duration : 5000,
    loop : true
});

anime({
    targets: '.photo',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 900},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });