function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1

}
function verificacion(secreto, adivinado) {
    if (secreto == adivinado) {
        console.log("adivinaste el numero")
    }
    else if (secreto < adivinado) {
        console.log("el tumero tiene que ser menor")
    }
    else if (secreto > adivinado) {
        console.log("el numero tiene que ser mayor")
    }
}
module.exports = {
    generarNumeroAleatorio,
    verificacion
}