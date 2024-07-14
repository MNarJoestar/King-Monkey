
    document.addEventListener('DOMContentLoaded', function() {
  const porcentajeInput = document.getElementById('porcentajeInput');
  const enteroInput = document.getElementById('enteroInput');
  const resultadoPorcentaje = document.getElementById('resultadoPorcentaje');

  porcentajeInput.addEventListener('input', calcularPorcentaje);
  enteroInput.addEventListener('input', calcularPorcentaje);

  function calcularPorcentaje() {
    const porcentaje = parseFloat(porcentajeInput.value);
    const entero = parseFloat(enteroInput.value);

    if (!isNaN(porcentaje) && !isNaN(entero)) {
      const resultado = (porcentaje / 100) * entero;
      resultadoPorcentaje.textContent = resultado.toFixed(2); // Mostrar el resultado con dos decimales
    } else {
      resultadoPorcentaje.textContent = ''; // Si alguno de los campos no es un número válido, se borra el resultado
    }
  }
});

// codigo para los puntos de fundicion

// Obtener el elemento select
const selectMaterial = document.getElementById('matls');

// Obtener el elemento span donde mostraremos el resultado
const resultadoFundicion = document.getElementById('resultadoFundicion');

// Asociar un evento de cambio al select
selectMaterial.addEventListener('change', function() {
    // Obtener el valor seleccionado
    const materialSeleccionado = selectMaterial.value;

    // Definir el punto de fusión para cada material en Celsius
    let puntoDeFusion = '';
    switch (materialSeleccionado) {
        case 'seleccionar':
            puntoDeFusion = 'Elige un material';
            break;
        case 'hierro':
            puntoDeFusion = '1538 °C';
            break;
        case 'acero':
            puntoDeFusion = '1400-1530 °C';
            break;
        case 'cobre':
            puntoDeFusion = '1083 °C';
            break;
        case 'cobalto':
            puntoDeFusion = '1495 °C';
            break;
        case 'estano':
            puntoDeFusion = '231.9 °C';
            break;
        case 'zinc':
            puntoDeFusion = '419.5 °C';
            break;
        case 'cadmio':
            puntoDeFusion = '321.1 °C';
            break;
        case 'laton':
            puntoDeFusion = '900-940 °C';
            break;
            case 'hielo':
            puntoDeFusion = 'Quien diablos funde hielo?';
            break;
            case 'baterias':
            puntoDeFusion = 'No lo recomiendo';
            break;
            case 'chisme':
            puntoDeFusion = 'Depende qué tan bueno es';
            break;
            case 'tulengua':
            puntoDeFusion = 'Mira chisme de nuevo';
            break;
        default:
            puntoDeFusion = 'No especificado';
    }

    // Mostrar el resultado en el span
    resultadoFundicion.textContent = `${puntoDeFusion}`;
});
// guardar
window.addEventListener('beforeunload', function(event) {
    // Obtener el contenido que deseas guardar (por ejemplo, el texto de un elemento)
    var contenido = document.getElementById('contenido').innerHTML;

    // Guardar el contenido en el almacenamiento local del navegador
    localStorage.setItem('contenidoGuardado', contenido);
});
window.addEventListener('load', function(event) {
    // Obtener el contenido guardado desde el almacenamiento local
    var contenidoGuardado = localStorage.getItem('contenidoGuardado');

    // Restaurar el contenido en la página
    if (contenidoGuardado) {
        document.getElementById('contenido').innerHTML = contenidoGuardado;
    }
});

//Ruleta 
function empezarRuleta() {
        var opciones = ['Musica ingles', 'Jugar', 'Jugar con musica', 'Ver Social media', 'Musica español'];
        var contador = 0;
        var intervalo = setInterval(function() {
            document.getElementById('resultado').innerText = opciones[Math.floor(Math.random() * opciones.length)];
            contador++;
            if (contador > 30) {  // Cambia 30 por el número de iteraciones que desees
                clearInterval(intervalo);
                var opcionFinal = opciones[Math.floor(Math.random() * opciones.length)];
                document.getElementById('resultado').innerText = opcionFinal;
            }
        }, 100);  // Velocidad de actualización en milisegundos (más pequeño para más rápido)
    }
