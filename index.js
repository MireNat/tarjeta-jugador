// Obtener elementos del DOM
const verDetallesButton = document.getElementById('verDetalles');
const volverButton = document.getElementById('volver');
const tarjeta = document.querySelector('.tarjeta');
const caraFrontal = document.querySelector('.frontal');
const caraPosterior = document.querySelector('.posterior');

// Función para voltear la tarjeta
function voltearTarjeta() {
    caraFrontal.style.transform = 'rotateY(180deg)';
    caraPosterior.style.transform = 'rotateY(0deg)';
}

// Función para volver a la cara frontal
function volverAlFrente() {
    caraFrontal.style.transform = 'rotateY(0deg)';
    caraPosterior.style.transform = 'rotateY(180deg)';
}

// Añadir eventos a los botones
verDetallesButton.addEventListener('click', voltearTarjeta);
volverButton.addEventListener('click', volverAlFrente);
