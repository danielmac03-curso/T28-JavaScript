var cadena = prompt("Indique una cadena de texto:");
var cadenaAlReves = "";

for(i=1; i<(cadena.length+1); i++){
    cadenaAlReves += cadena[cadena.length-i];
}

cadenaFormateada = cadena.toLowerCase().split(' ').join('');
cadenaAlRevesFormateada = cadenaAlReves.toLowerCase().split(' ').join('');

if(cadenaFormateada == cadenaAlRevesFormateada){
    console.log("Es un políndromo");
}else{
    console.log("No es un políndromo");
}