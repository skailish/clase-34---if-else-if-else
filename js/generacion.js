// A qué generación pertenece

// Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece(baby boomer, gen y, millenial, centennial, o ninguna de ellas).

const year = Number(prompt("Escriba el año de su nacimiento"));

if (year >= 1994 && year <= 2010) {
    alert("Usted pertenece a la generación Z, los irreverentes");
} else if (year >= 1981 && year <= 1993) {
    alert("Usted pertenece a la generación Y, los millenials, todo frustración");
} else if (year >= 1969 && year <= 1980) {
    alert("Usted pertenece a la generación X, obsesión por el éxito");
} else if (year >= 1949 && year <= 1968) {
    alert("Usted pertenece a la generación BabyBoom, pura ambición");
} else if (year >= 1930 && year <= 1948) {
    alert("Usted pertenece a la generación Silent, los niños de la postguerra, auteridad");
} else {
    alert("Solo tenemos info sobre los años comprendidos entre 1930 y 2010");
}