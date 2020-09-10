var numero = prompt("Indica un número para calcular el factorial:");
var resultado = numero;

for(i=1; i<numero; i++){
    resultado *= i;
}

console.log(resultado);