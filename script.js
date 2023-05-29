// Adicione a biblioteca GSAP no seu projeto

// Função para adicionar um pequeno deslocamento após o término do scroll
function addAdditionalScroll() {
    const targetPosition = window.innerHeight; // Define a posição de destino após o término do scroll
    const duration = 0.5; // Duração da animação em segundos
    const delay = 0.5; // Atraso antes de executar o deslocamento adicional
  
    // Cria uma nova animação com GSAP
    const tl = gsap.timeline();
  
    tl.to(window, {
      duration: duration,
      scrollTo: {
        y: targetPosition,
        autoKill: false // Mantém o scroll após a animação
      },
      ease: "power2.inOut"
    });
  
    // Atrasa a animação com GSAP
    tl.delay(delay);
  }
  
  // Adicionar evento de scroll ao documento
  document.addEventListener('scroll', addAdditionalScroll);
  