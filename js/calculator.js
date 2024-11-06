let screen = document.getElementById('screen'); // Obtiene el elemento con el id 'screen' y lo asigna a la variable 'screen'
const buttons = document.querySelectorAll("#buttons a"); // Selecciona todos los enlaces dentro del elemento con id 'buttons' y los asigna a la constante 'buttons'

for (const button of buttons) { // Itera sobre cada botón en la colección 'buttons'
    button.addEventListener('click', function(e) { // Añade un evento 'click' a cada botón
        e.preventDefault(); // Previene el comportamiento por defecto del enlace

        if (e.target.dataset.key == 'equal') { // Si el atributo 'data-key' del botón es 'equal'
            screen.textContent = eval(screen.textContent); // Evalúa la expresión en la pantalla y muestra el resultado
            if (screen.textContent.length > 8) { // Si el resultado tiene más de 8 caracteres
                screen.textContent = eval(screen.textContent).toFixed(8); // Redondea el resultado a 8 decimales
            }
        } else if (e.target.dataset.key == 'clear') { // Si el atributo 'data-key' del botón es 'clear'
            screen.textContent = ''; // Limpia la pantalla
        } else { // Para cualquier otro valor de 'data-key'
            screen.textContent = screen.textContent + e.target.dataset.key; // Añade el valor del 'data-key' a la pantalla
        }   
    });
}
