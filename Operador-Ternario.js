/* O operador ternário é uma forma curta de escrever uma estrutura if-else. Ele avalia uma condição e retorna um valor dependendo se a condição é verdadeira ou falsa. A sintaxe é:

? -> IF (SE)
: -> ELSE (SENÃO)
&& -> (IF sem ELSE)
*/

const salario = 5000;

// Modo normal
if (salario < 3000){
    console.log("Salário baixo - Junior");
} else {
    console.log("Salário alto - Senior");
}

// Modo ternário (foi criado pra pequenos retornos)
salario < 3000 ? console.log("Salário baixo - Junior") : console.log("Salário alto - Senior");

//modo ternário com && 
const salarioSenior = 6000;
salarioSenior < 3000 && console.log ("Salario de Senior")