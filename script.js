/*Script para el dropdown menu en la navbar*/
$(document).ready(function () { 
    $('.dropdown').hover(function () { 
        $(this).addClass('show'); 
        $(this).find('.dropdown-menu').addClass('show'); 
    }, function () { 
        $(this).removeClass('show'); 
        $(this).find('.dropdown-menu').removeClass('show'); 
    }); 
}); 

// Script para carusel panel de control
$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
        next.children(':first-child').clone().appendTo($(this));
    for (var i = 0; i < minPerSlide; i++) { 
        next=next.next(); 
    if (!next.length) { 
        next=$(this).siblings(':first'); 
    } next.children(':first-child').clone().appendTo($(this)); 
} });

  // Script para mostrar imagen seleccionada
function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Script para maximo de 200 palabras, text area de nueva liga Panel de control
function limitarPalabras(elemento, limite) {
    let texto = elemento.value;
    let palabras = texto.split(/\s+/);
    if (palabras.length > limite) {
        palabras = palabras.slice(0, limite);
        elemento.value = palabras.join(" ");
    }
}
// Script para mostrar palabras restantes disponibles
function mostrarPalabrasRestantes(elemento, limite) {
    let texto = elemento.value;
    let palabras = texto.split(/\s+/);
    let palabrasRestantes = limite - palabras.length;
    let feedbackElemento = document.getElementById("feedbackPalabrasRestantes");
    if (palabrasRestantes >= 0) {
        feedbackElemento.textContent = `Palabras restantes: ${palabrasRestantes}`;
    } else {
        feedbackElemento.textContent = "¡Límite de palabras alcanzado!";
    }
}

// Script para el datepicker en panel de control
$('#toggleFechaInicio').click(function() {
    $('#fechaInicio').datepicker('show');
});

// Manejo del clic en el botón para mostrar/ocultar el datepicker para el campo de fin
$('#toggleFechaFin').click(function() {
    $('#fechaFin').datepicker('show');
});

// Script para sidebar admin
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});