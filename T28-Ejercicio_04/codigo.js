var valores = [true, 5, false, "hola", "adios", 2];

//Ejercicio 1
if(valores[3].length > valores[4].length){
    console.log(valores[3] + " es mayor a " + valores[4]);
}else{
    console.log(valores[4] + " es mayor a " + valores[3]);
}

//Ejercicio 2
if(valores[1] > valores[5]){
    console.log(valores[0])
}else{
    console.log(valores[2])
}

//Ejercicio 3
console.log("La suma entre " + valores[1] + " y " + valores[5] + " es " + (valores[1] + valores[5]));
console.log("La resta entre " + valores[1] + " y " + valores[5] + " es " + (valores[1] - valores[5]));
console.log("La multiplicación entre " + valores[1] + " y " + valores[5] + " es " + (valores[1] * valores[5]));
console.log("La división entre " + valores[1] + " y " + valores[5] + " es " + (valores[1] / valores[5]));
console.log("El resto entre " + valores[1] + " y " + valores[5] + " es " + (valores[1] % valores[5]));