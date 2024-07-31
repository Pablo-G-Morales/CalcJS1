// Función para realizar las operaciones
function calcular(operador, num1, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: División por cero';
            }
            return num1 / num2;
        default:
            return 'Operador no válido';
    }
}

// Función principal para interactuar con el usuario
function iniciarCalculadora() {
    let continuar = true;
    
    while (continuar) {
        let operador = prompt('Ingrese el operador (+, -, *, /):');
        let num1 = parseFloat(prompt('Ingrese el primer número:'));
        let num2 = parseFloat(prompt('Ingrese el segundo número:'));
        let resultado = calcular(operador, num1, num2);
        
        console.log(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
        alert(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);
        
                // Preguntar al usuario si quiere realizar otra operación
                let respuesta = prompt('¿Desea realizar otra operación? (s/n):');
                if (respuesta.toLowerCase() !== 's') {
                    continuar = false;
                }

        // Mostrar el resultado en el HTML
        document.getElementById('resultado').textContent = `El resultado de ${num1} ${operador} ${num2} es: ${resultado}`;
        
    }
    
    alert('Gracias por usar la calculadora.');
}

// Iniciar la calculadora
iniciarCalculadora();
