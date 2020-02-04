// Días del mes

// Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

const month = prompt("Elija un mes");

if (month === "enero" || month === "marzo" || month === "mayo" || month === "julio" || month === "agosto" || month === "octubre" || month === "diciembre") {
    alert(`El mes de ${month} tiene 31 días`);
} else if (month === "abril" || month === "junio" || month === "septiembre" || month === "noviembre") {
    alert(`El mes de ${month} tiene 30 días`);

} else if (month === "febrero") {
    alert("El mes de febrero tiene 29 días");
} else {
    alert("Escriba un nombre de mes válido, completo y en minúsculas")
};

