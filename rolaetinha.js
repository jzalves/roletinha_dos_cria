let container = document.querySelector(".container");
let btn = document.getElementById("girandin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}


const frases = [
	"Tá OK",
	"Ão ão ão meu pau na sua mão",
	"macaco",
	"Quem clickou é gay",
	"A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso"
];

function mostrarFrase() {
	const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
	document.getElementById('frase').textContent = fraseAleatoria;
}