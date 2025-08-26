// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const resultado = document.getElementById("resultado");
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    const amigo = document.getElementById("amigo");
    if (amigo.value === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    const listaAmigos = document.getElementById("listaAmigos");
    const newElement = document.createElement("li");
    newElement.textContent = amigo.value;
    listaAmigos.appendChild(newElement);

    amigos.push(amigo.value);

    amigo.value = "";
    
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }
    const amigo1 = amigos[Math.floor(Math.random() * amigos.length)];

    const listaAmigos = document.getElementById("listaAmigos");
    while (listaAmigos.hasChildNodes()) {
        listaAmigos.removeChild(listaAmigos.firstChild);
    }

    const resultado = document.getElementById("resultado");
    const newElement = document.createElement("li");
    newElement.textContent = `Tu amigo secreto es: ${amigo1}`;
    resultado.appendChild(newElement);

    amigos = [];


}
