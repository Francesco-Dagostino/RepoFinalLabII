document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("BotonHola");

    if (boton) {
        boton.addEventListener("click", function (event) {
            event.preventDefault(); // Evita la redirección del <a>
            alert("¡Hola!");
        });
    } else {
        console.error("No se encontró el botón con ID 'BotonHola'");
    }
});
