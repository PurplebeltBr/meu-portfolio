// Controle de navegação por setas (Exclusivo para o carrossel de Projetos)
function scrollSlider(direction) {
  // Captura o carrossel de projetos pelo ID correto
  const slider = document.getElementById('meuCarrossel');
  if (slider) {
    slider.scrollBy({
      left: direction * 300, // Move 300px para a esquerda ou direita
      behavior: 'smooth'     // Rolagem suave profissional
    });
  }
}

// Efeito de Lanterna Seguidora (Performance Otimizada com RequestAnimationFrame)
let ticking = false;

document.addEventListener('mousemove', (e) => {
  if (!ticking) {
    ticking = true; 
    window.requestAnimationFrame(() => {
      document.body.style.setProperty('--x', e.clientX + 'px');
      document.body.style.setProperty('--y', e.clientY + 'px');
      ticking = false; 
    });
  }
});