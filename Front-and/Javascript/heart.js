document.querySelector('.love-box').addEventListener('click', function() {
    const heartRed = document.querySelector('.heart-red');
    const heartGray = document.querySelector('.heart-gray');

    if (heartRed.style.opacity === '0' || heartRed.style.opacity === '') {
        // Exibe heart-red e oculta heart-gray
        heartRed.style.opacity = '1';
        heartGray.style.opacity = '0';

        setTimeout(() => {
            heartGray.style.display = 'none';
            heartRed.style.display = 'block';
        }, 300); // Ajuste do display após a transição
    } else {
        // Exibe heart-gray e oculta heart-red
        heartGray.style.opacity = '1';
        heartRed.style.opacity = '0';

        setTimeout(() => {
            heartRed.style.display = 'none';
            heartGray.style.display = 'block';
        }, 200); // Ajuste do display após a transição
    }
});
