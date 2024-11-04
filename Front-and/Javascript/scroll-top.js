document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.scroll-top').addEventListener('click', () => {
      smoothScrollToTop();
    });
  });
  
  function smoothScrollToTop() {
    const scrollDuration = 600; // Duração da rolagem em milissegundos
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calcula o passo de rolagem
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 5); // A cada 15ms, rola um pouco mais
  }
  