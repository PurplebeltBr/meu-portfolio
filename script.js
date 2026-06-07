function scrollSlider(direction) {
  var slider = document.getElementById('meuCarrossel');
  slider.scrollBy({
    left: direction * 300,
    behavior: 'smooth'
  });
}