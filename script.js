function scslider(direction) {
  var slider = document.getElementById('Carrossel');
  slider.scrollBy({
    left: direction * 300,
    behavior: 'smooth'
  });
}

function scrollSlider(direction) {
  var slider = document.getElementById('meuCarrossel');
  slider.scrollBy({
    left: direction * 300,
    behavior: 'smooth'
  });
}

let ticking = false;

document.addEventListener('mousemove', (e) => {
  if (!ticking) {
    // Bloqueia novos disparos até que este frame seja desenhado
    ticking = true; 
    
    window.requestAnimationFrame(() => {
      document.body.style.setProperty('--x', e.clientX + 'px');
      document.body.style.setProperty('--y', e.clientY + 'px');
      
      // Libera o próximo disparo APENAS depois que o frame rodou
      ticking = false; 
    });
  }
});