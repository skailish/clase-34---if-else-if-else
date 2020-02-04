// Cambio de contraseña

// Hacer un programa que permita cambiar la contraseña de usuario.Para eso tiene que responder las tres preguntas de seguridad.Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada.En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo.Definir de antemano(hardcodear) preguntas y respuestas.

const perro = "firulais";
const nacimiento = "1982";
const pais = "argentina";
let pass = "";

let respuesta = prompt("Para cambiar su contraseña, responda a la 1er pregunta de seguridad: ¿cómo es el nombre de su primer perro?");

if (respuesta === perro) {
    respuesta = prompt("Respuesta correcta. Faltan 2 preguntas. ¿cuál es su fecha de nacimiento?");

    if (respuesta === nacimiento) {
        respuesta = prompt("Respuesta correcta. Falta 1 pregunta. ¿cuál es su país de origen?");
        if (respuesta === pais) {
            pass = prompt("Elija la nueva contraseña");
            alert("Su contraseña fue cambiada correctamente.")
        } else {
            alert("La respuesta es incorrecta.");
        }
    } else {
        alert("La respuesta es incorrecta.");
    }
} else {
    alert("La respuesta es incorrecta.");
}