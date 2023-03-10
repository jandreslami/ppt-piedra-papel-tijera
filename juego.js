
let $comenzar = document.getElementById("comenzar")
let $estado = document.getElementById("estado")
let $juego = document.getElementById("juego")
let $cantidadRondas = document.getElementById("cantidad-rondas")
let cantidadRondas = 0;

console.log($comenzar)

$comenzar.onclick = function(){
    iniciarJuego()
}

function iniciarJuego() {
    cantidadRondas =  Number($cantidadRondas.rondas.value)
    
    mostrarJuego();
    actualizarEstado("¡Comencemos! Es tu turno");    
    
}


function actualizarEstado(texto){

    $estado.textContent = texto;

    $estado.classList.remove("alert-dark");
    $estado.classList.add("alert-info");
}

function mostrarJuego(){
    $juego.classList.remove("d-none")
}

console.log($cantidadRondas)
console.log($cantidadRondas.rondas.value)