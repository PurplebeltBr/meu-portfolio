function scrollSlider(direction) {
  var slider = document.getElementById('meuCarrossel');
  slider.scrollBy({
    left: direction * 300,
    behavior: 'smooth'
  });
}

// Captura o movimento do mouse na tela inteira
document.addEventListener('mousemove', (e) => {
    // Define as variáveis --x e --y no elemento body com a posição atual do cursor
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});