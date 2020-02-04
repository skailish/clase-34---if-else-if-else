// Número par o impar

// Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.

const number = Number(prompt("Elija un número"));

if ((number % 2) == 0) {
    alert(`El número ${number} es par`);
} else {
    alert(`El número ${number} es impar`)
};