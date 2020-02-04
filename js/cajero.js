// Cajero

// Crear un programa que muestre el dinero inicial, y que permita retirar dinero hasta 3 veces preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación.Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.

let inAccount = 10000;

let withdrawal = confirm(`Usted tiene ${inAccount} pesos. ¿Desea retirar dinero?`);

if (withdrawal) {
    amount = Number(prompt(`Le quedan 3 extracciones.
    ¿Cuánto dinero desea retirar?`));
    if (inAccount > amount) {
        inAccount -= amount;
        withdrawal = confirm(`Usted tiene ${inAccount} pesos. ¿Desea retirar dinero?`);
        if (withdrawal) {
            amount = Number(prompt(`Le quedan 2 extracciones.
                ¿Cuánto dinero desea retirar?`));
            if (inAccount > amount) {
                inAccount -= amount;
                withdrawal = confirm(`Usted tiene ${inAccount} pesos. ¿Desea retirar dinero?`);
                if (withdrawal) {
                    amount = Number(prompt(`Le queda 1 extracción.
                        ¿Cuánto dinero desea retirar?`));
                    if (inAccount > amount) {
                        inAccount -= amount;
                        withdrawal = confirm(`Usted tiene ${inAccount} pesos. No le quedan extracciones.
                        Muchas gracias.`);
                    } else {
                        alert("El saldo es insuficiente. Muchas gracias.")
                    }
                } else {
                    alert("Muchas gracias.")
                }
            } else {
                alert("El saldo es insuficiente. Muchas gracias.")
            }
        } else {
            alert("Muchas gracias");
        }
    } else {
        alert("El saldo es insuficiente. Muchas gracias.")
    }
} else {
    alert("Muchas gracias");
}