document.addEventListener("DOMContentLoaded", function() {
    const carruseles = document.querySelectorAll('.carrusel');

    carruseles.forEach(carrusel => {
        const imagenes = carrusel.querySelectorAll('.imagenes img, .imagenes video');
        let currentIndex = 0;

        // Mostrar la primera imagen/video
        imagenes[currentIndex].classList.add('active');

        // Función para cambiar la imagen/video
        function cambiarImagen(event, n) {
            imagenes[currentIndex].classList.remove('active'); // Ocultar la actual
            currentIndex = (currentIndex + n + imagenes.length) % imagenes.length; // Calcular el nuevo índice
            imagenes[currentIndex].classList.add('active'); // Mostrar la nueva
        }

        // Asignar la función a los botones
        carrusel.querySelector('.prev').addEventListener('click', (event) => cambiarImagen(event, -1));
        carrusel.querySelector('.next').addEventListener('click', (event) => cambiarImagen(event, 1));
    });
});