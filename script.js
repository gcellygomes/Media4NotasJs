alert ("Média de 4 notas");

let nota1 = parseInt(prompt("Digite sua primeira nota:"));
let nota2 = parseInt(prompt("Digite sua segunda nota:"));
let nota3 = parseInt(prompt("Digite sua terceira nota:"));
let nota4 = parseInt(prompt("Digite sua quarta nota:"));

let Média;
let resultado;

if (    nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10 ||
        nota4 < 0 || nota4 > 10) {
        alert ("Digite somente nots entre 0 a 10.");  
} else {
    media = (nota1 + nota2 + nota3 + nota4) / 4;

    if(media < 5) {
        resultado = "Reprovado";
    } else if (media >= 6) {
        resultado = "Aprovado";
    } else{
        resultado = "Em recuperação";
    }

}

    alert ("Voce ficou com a média: " +media + " , " + "Resultado: " +resultado);

