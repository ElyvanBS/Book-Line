document.addEventListener('DOMContentLoaded', () => {
    const minRange = document.getElementById('minRange');
    const maxRange = document.getElementById('maxRange');
    const minValue = document.getElementById('minValue');
    const maxValue = document.getElementById('maxValue');
    const minDisplay = document.getElementById('minDisplay');
    const maxDisplay = document.getElementById('maxDisplay');
  
    const updateRangeStyles = (range) => {
      const value = (range.value - range.min) / (range.max - range.min) * 100;
      range.style.setProperty('--value', value + '%');
    };
  
    // Inicializa o estilo do range
    updateRangeStyles(minRange);
    updateRangeStyles(maxRange);
  
    // Atualiza o display do valor mínimo e sincroniza o campo de texto
    minRange.addEventListener('input', () => {
      const min = parseFloat(minRange.value);
      minDisplay.textContent = `Min: ${min}`;
      minValue.value = min; 
      updateRangeStyles(minRange);
      
      if (min > parseFloat(maxRange.value)) {
        maxRange.value = min;
        maxDisplay.textContent = `Max: ${min}`;
      }
    });
  
    // Atualiza o display do valor máximo e sincroniza o campo de texto
    maxRange.addEventListener('input', () => {
      const max = parseFloat(maxRange.value);
      maxDisplay.textContent = `Max: ${max}`;
      maxValue.value = max;
      updateRangeStyles(maxRange);
      
      if (max < parseFloat(minRange.value)) {
        minRange.value = max;
        minDisplay.textContent = `Min: ${max}`;
      }
    });
  
    // Validação de valores entre 1 e 500 nos campos de texto
    minValue.addEventListener('change', () => {
      let value = Math.min(Math.max(parseFloat(minValue.value) || 1, 1), 500);
      minRange.value = value;
      minDisplay.textContent = `Min: ${value}`;
      updateRangeStyles(minRange);
    });
  
    maxValue.addEventListener('change', () => {
      let value = Math.min(Math.max(parseFloat(maxValue.value) || 500, 1), 500);
      maxRange.value = value;
      maxDisplay.textContent = `Max: ${value}`;
      updateRangeStyles(maxRange);
    });
  });

  
  // JavaScript para categoria-one-box
let originalHeightOne = '270px'; // Armazena a altura original da categoria-one-box

function toggleContentOneBox() {
    const categoriaBox = document.querySelector('.categoria-one-box');
    const categName = document.querySelector('.categ-name-one');
    
    // Calcula a altura da categ-name-one
    const newHeight = categName.offsetHeight + 'px';

    // Seleciona os elementos de filtro e range
    const valueFiltro = document.querySelector('.value-filtro');
    const rangeSlider = document.querySelector('.range-slider');

    // Verifica se o conteúdo está visível
    if (valueFiltro.style.visibility !== 'hidden') {
        categoriaBox.style.height = newHeight; // Ajusta a altura da categoria-one-box
        setTimeout(() => {
            valueFiltro.style.visibility = 'hidden';
            rangeSlider.style.visibility = 'hidden';
        }, 100);
    } else {
        valueFiltro.style.visibility = 'visible';
        rangeSlider.style.visibility = 'visible';
        categoriaBox.style.height = originalHeightOne;
    }
}

// Adiciona o evento de clique à categoria-one-box
document.querySelector('.categ-name-one').addEventListener('click', toggleContentOneBox);

// JavaScript para categoria-second-box
let originalHeightSecond = '270px'; // Armazena a altura original da categoria-second-box

function toggleContentSecondBox() {
    const categoriaBoxSecond = document.querySelector('.categoria-second-box');
    const categNameSecond = document.querySelector('.categ-name-second');
    const filtroFormato = document.querySelector('.filtro-formato');

    // Calcula a altura da categ-name-second
    const newHeightSecond = categNameSecond.offsetHeight + 'px';

    // Verifica se o conteúdo está visível
    if (filtroFormato.style.visibility !== 'hidden') {
        categoriaBoxSecond.style.height = newHeightSecond; // Ajusta para a altura mínima
        setTimeout(() => {
            filtroFormato.style.visibility = 'hidden';
        }, 100); // Esconde após a transição
    } else {
        filtroFormato.style.visibility = 'visible';
        categoriaBoxSecond.style.height = originalHeightSecond; // Volta à altura original
    }
}

// Adiciona o evento de clique à categoria-second-box
document.querySelector('.categ-name-second').addEventListener('click', toggleContentSecondBox);
