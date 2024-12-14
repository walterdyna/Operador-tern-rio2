/* O operador ternário é uma forma curta de escrever uma estrutura if-else. Ele avalia uma condição e retorna um valor dependendo se a condição é verdadeira ou falsa. A sintaxe é:

? -> IF (SE)
: -> ELSE (SENÃO)
&& -> (IF sem ELSE)
*/

const salarioCmIFeElse = 5000;

// Modo normal
if (salarioCmIFeElse < 3000){
    console.log("Salário baixo - Junior");
} else if ( salarioCmIFeElse >= 3000 && salarioCmIFeElse < 10000 ){
    console.log("Salário alto - Senior");
} else {
    console.log("Salário muito alto - CEO");
}


// Modo ternário (foi criado pra pequenos retornos)
salarioTernario < 3000 ? console.log("Salário baixo - Junior") : console.log("Salário alto - Senior");

//modo ternário com && (soIF)
const salarioTernarioComComercial = 6000;
salarioTernarioComComercial < 3000 && console.log ("Salario de Senior")

//modo ternário elseIF

const salarioTernarioElseIF = 4000;
salarioTernarioElseIF < 3000 ? console.log("Ele e Junior") :salarioTernarioElseIF >= 3000 && salarioTernarioElseIF < 10000 ? console.log("Ele e CEO") : console.log("Salário muito alto - CEO");