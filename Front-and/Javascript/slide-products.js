class Carousel {
    constructor(carouselSelector, prevButtonSelector, nextButtonSelector, sectionIndicatorSelector) {
        this.carousel = document.querySelector(carouselSelector); // Seleciona o carrossel
        this.prevButton = document.querySelector(prevButtonSelector); // Botão anterior
        this.nextButton = document.querySelector(nextButtonSelector); // Botão próximo
        this.sectionIndicator = document.querySelector(sectionIndicatorSelector); // Indicador de seção
        this.totalProducts = this.carousel.querySelectorAll('.box-product').length; // Total de produtos no carrossel
        this.productsPerPage = 5; // Número de produtos exibidos por vez
        this.currentIndex = 0; // Índice atual

        // Inicializa o carrossel
        this.updateCarousel();

        // Adiciona eventos de clique aos botões
        this.nextButton.addEventListener('click', () => this.next());
        this.prevButton.addEventListener('click', () => this.prev());
    }

    // Atualiza a posição do carrossel, a visibilidade dos botões e o indicador de seção
    updateCarousel() {
        const translateXValue = -(this.currentIndex * (100 / (this.totalProducts / this.productsPerPage)));
        this.carousel.style.transform = `translateX(${translateXValue}%)`;

        // Atualiza o indicador de seção
        const totalSections = Math.ceil(this.totalProducts / this.productsPerPage);
        this.sectionIndicator.textContent = `Seção ${String(this.currentIndex + 1).padStart(2, '0')} - ${String(totalSections).padStart(2, '0')}`;

        this.prevButton.style.display = this.currentIndex === 0 ? "none" : "block"; // Mostra/oculta o botão anterior
        this.nextButton.style.display = this.currentIndex >= totalSections - 1 ? "none" : "block"; // Mostra/oculta o botão próximo
    }

    // Avança para a próxima página de produtos
    next() {
        if (this.currentIndex < Math.ceil(this.totalProducts / this.productsPerPage) - 1) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }

    // Retorna para a página anterior de produtos
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
}

// Para cada carrossel, crie uma nova instância da classe
const carousel1 = new Carousel('.carousel', 'button.prev1', 'button.next1', '#section-indicator');
const carousel2 = new Carousel('.carousel2', 'button.prev2', 'button.next2', '#section-indicator2');
const carousel3 = new Carousel('.carousel3', 'button.prev3', 'button.next3', '#section-indicator3');
