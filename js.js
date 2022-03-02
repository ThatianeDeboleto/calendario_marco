const today = new Date();
const cmnth = today.toLocaleString("BR", { month: "long" });
const cwday = today.toLocaleString("BR", { weekday: "long" });
const cday = today.getDate();
const cyear = today.getFullYear();
document.getElementById("cmnth").innerHTML = cmnth;
document.getElementById("cday").innerHTML = cday;
document.getElementById("cwday").innerHTML = cwday;

function myfun(cevent, dayno) {
	document.getElementById("cevent").innerHTML = cevent;
	document.getElementById("cday").innerHTML = dayno;
	var wdays = [
		"domingo",
		"segunda",
		"terça",
		"quarta",
		"quinta",
		"sexta",
		"sabado"
	];
	var wday = new Date("Março," + dayno + ", 2022");
	document.getElementById("cwday").innerHTML = wdays[wday.getDay()];
}
let cells = document.querySelectorAll("#calendar-table-range > li");
cells[today.getDate() + 1].style.color = "var(--myred)";
const cevents = [
    'De o seu melhor',
    'Deixe pra trás o que não te leva pra frente',
	'Viver não é esperar a tempestade passar, é aprender a dançar na chuva',
	'Não importa a cor do céu. Quem faz o dia bonito é você',
	'Quanto mais agradecemos, mais coisas boas acontecem',
	'Não coloque limites em seus sonhos, coloque fé',
	'As melhores coisas da vida não são coisas',
	'Nem tudo na vida são flores, mas quando for, regue',
	'Nada é em vão. Se não é bênção, é lição',
	'Assim como a lua, a vida tem fases',
	'Você pode mais do que imagina',
	'O amor não faz o mundo girar. O amor é o que faz o giro valer a pena',
	'Hoje é um dia perfeito para ser feliz',
	'Torne sua vida mais linda',
	'Alegria é viver assim, sendo você',
	'Alegria é aqui e agora',
	'Continue',
	'Não desanime',
	'Esteja perto de quem te quer bem',
	'Tudo passa',
	'Seja grato por hoje',
	'Doe sem esperar retorno',
	'Lei da realização',
	'Ame sua vida',
	'Transformar',
	'Traga paz',
	'Sendo luz',
	'Conquitas estão a sua espera',
	'Bendita seja a verdade dita, o abraço sincero e o amor recíproco',
	'Energia positiva é o melhor presente que a gente pode receber.',
	'As coisas boas chegam com o tempo. As melhores, de repente'

];
document.getElementById("cevent").innerHTML = cevents[today.getDate() - 1];
document.getElementById("cyear").innerHTML = cyear;