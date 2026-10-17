// Variable para llevar el total de calorías acumuladas
let totalCalorias = 650; // Inicia con la suma de las 2 comidas del ejemplo (250 + 400)

// Esperar a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", function () {

    // Obtener los elementos del formulario mediante sus IDs
    const formulario = document.getElementById("form-alimento");
    const inputNombre = document.getElementById("nombre-alimento");
    const inputCalorias = document.getElementById("calorias-alimento");
    const contenedorComidas = document.getElementById("lista-comidas");
    const textoTotal = document.getElementById("total-calorias");

    // Escuchar el evento cuando el usuario envía el formulario
    formulario.addEventListener("submit", function (evento) {
        // Evitar que la página se recargue
        evento.preventDefault();

        // Obtener y limpiar los valores ingresados por el usuario
        const nombre = inputNombre.value.trim();
        const calorias = parseInt(inputCalorias.value, 10);

        // Validar que los campos no estén vacíos
        if (nombre === "" || isNaN(calorias) || calorias <= 0) {
            alert("Por favor ingresa un nombre válido y un número de calorías mayor a cero.");
            return;
        }

        // 1. Crear el nuevo elemento semántico <article>
        const nuevoArticulo = document.createElement("article");
        nuevoArticulo.className = "tarjeta-comida";

        // 2. Estructurar el contenido interno del artículo con la etiqueta obligatoria <time>
        nuevoArticulo.innerHTML = `
            <h4>Comida: ${nombre}</h4>
            <p><strong>Fecha de registro:</strong> <time datetime="2026-10-16">16 de Octubre</time></p>
            <p>Alimento registrado mediante el formulario web.</p>
            <p class="calorias-dato"><strong>Aporte:</strong> ${calorias} kcal</p>
        `;

        // 3. Añadir el nuevo <article> a la lista de comidas registradas
        contenedorComidas.appendChild(nuevoArticulo);

        // 4. Sumar las calorías al contador total y actualizarlo en pantalla
        totalCalorias += calorias;
        textoTotal.textContent = totalCalorias;

        // 5. Limpiar los campos del formulario para el siguiente registro
        formulario.reset();
        inputNombre.focus();
    });

});
