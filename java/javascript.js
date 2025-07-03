const piedra = document.getElementById('piedra');
const tijeras = document.getElementById('tijeras');
const papel = document.getElementById('papel');

let mensaje = document.getElementById('mensaje')

piedra.addEventListener('click', function jugar(eleccionUsuario) {
    const opciones = ["piedra", "papel", "tijeras"];
    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];

    if (eleccionUsuario === eleccionMaquina) {
        mensaje.innerHTML = "¡Empate!";
    } else if (
        (eleccionUsuario === "piedra" && eleccionMaquina === "tijeras") ||
        (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionMaquina === "papel")
    ) {
        mensaje.innerHTML = "¡Ganaste!";
    } else {
        mensaje.innerHTML = "¡Perdiste!";
    }

})