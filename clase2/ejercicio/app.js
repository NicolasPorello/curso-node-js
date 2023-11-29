const readlineSync = require("readline-sync")
const {generarNumeroAleatorio,verificacion} = require("./adivinar")

function usuariosName(){
    return parseInt(  readlineSync.question("ingresar el numero: "))
}
function juegoadivinanza(){
    const numerosecreto = generarNumeroAleatorio()
    let numeroAdivinado = 0

    console.log("vienvenidos a adivinar numero secreto \nintenta adivinar el numero secreto del 1 al 100")
    while(numeroAdivinado !== numerosecreto){
        numeroAdivinado = usuariosName();
        verificacion(numerosecreto,numeroAdivinado)
    }
}
juegoadivinanza()