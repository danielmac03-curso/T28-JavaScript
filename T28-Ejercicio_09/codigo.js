var cadena = prompt("Indique una cadena de texto:");

if(cadena == cadena.toUpperCase()){
    console.log("La cadena esta formada solo por mayúsculas");
}else if(cadena == cadena.toLowerCase()){
    console.log("La cadena esta formada solo por minúsculas");
}else{
    console.log("La cadena esta formada por mayúsculas y minúsculas");
}