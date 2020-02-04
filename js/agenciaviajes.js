// Agencia de viajes

// Hacer un programa que muestre al usuario una lista de destinos con precio por día por persona(ofrecer 3 promos con destinos y precios distintos).Preguntarle cuál desea elegir.Una vez hecho eso, preguntarle cuántas personas y cuántos días desea hospedarse.Mostrarle el precio final y preguntarle si quiere editar algún dato.Si quiere hacerlo, preguntarle cuál de ellos: destino, personas o días, permitirle ingresar un nuevo valor y mostrar un mensaje con las opciones y el precio actualizado.

let chinaPrice = Number(1050);
let francePrice = Number(2010);
let mexicoPrice = Number(1500);

let destination = prompt(`Elija un destino: 
- China: ${chinaPrice} pesos x día x persona
- Francia: ${francePrice} pesos x día x persona
- México: ${mexicoPrice} pesos x día x persona`);
let people = Number(prompt("Cuántas personas viajan?"));
let days = Number(prompt("¿Por cuántos días?"));

if (destination === "china") {
    finalPrice = chinaPrice * people * days;

} else if (destination === "francia") {
    finalPrice = francePrice * people * days;

} else if (destination === "mexico") {
    finalPrice = mexicoPrice * people * days;

} else {
    alert("No ha ingresado una opción correcta")
};

alert(`Usted eligió viajar a ${destination}, con ${people} personas por ${days} días.
El precio final total es de ${finalPrice} pesos`);

let change = confirm("Desea cambiar algún dato?");

if (change) {
    optionChange = prompt("Elija qué opción quiere cambiar: destino, personas o días");

    if (optionChange === "destino") {
        destination = prompt(`Elija un destino: 
- China: ${chinaPrice} pesos x día x persona
- Francia: ${francePrice} pesos x día x persona
- México: ${mexicoPrice} pesos x día x persona`);

    } else if (optionChange === "personas") {
        people = Number(prompt("Cuántas personas viajan?"));
    } else if (optionChange === "días") {

        days = Number(prompt("¿Por cuántos días?"));
    } else {
        alert("No ingresó una opción correcta");
    }

    if (destination === "china") {
        finalPrice = chinaPrice * people * days;
    } else if (destination === "francia") {
        finalPrice = francePrice * people * days;
    } else {
        finalPrice = mexicoPrice * people * days;
    }

    alert(`La información actualizada de su viaje es: 
    Destino ${destination}, con ${people} personas por ${days} días.
    El precio final total es de ${finalPrice} pesos`);
} else {
    alert("Muchas gracias");
};

