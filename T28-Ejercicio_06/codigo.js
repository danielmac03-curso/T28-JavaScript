var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function comprobar(){
    numeroUsuario = document.getElementById("numero").value;
    letraUsuario = document.getElementById("letra").value;

    console.log(numeroUsuario)

    if(numeroUsuario > 0 && numeroUsuario < 99999999){
        var letraDni = letras[numeroUsuario%23];

        if(letraUsuario == letraDni){
            console.log("El número y la letra es correcta");
        }else{
            console.log("La letra que ha indicado no es correcta");
        }

    }else{
        console.log("El número indicado no es válido");
    }

}