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
	"A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso",
	"Agaragã comi tua mãe e tua irmã",
	"O único lugar onde o sucesso vem antes do trabalho é no dicionário",
	"Pedro gay",
	"Matheus gay",
	"comi a Helena ontem",
	"A maior glória em viver não está em nunca cair, mas em nos levantar a cada queda",
	"A vida é 10% o que acontece com você e 90% como você reage a isso."

];

function mostrarFrase() {
	const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
	document.getElementById('frase').textContent = fraseAleatoria;
}