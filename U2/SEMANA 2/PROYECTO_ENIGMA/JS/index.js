document.getElementById("msg").addEventListener("keyup", function(){

    this.value = this.value.toUpperCase();
})

var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var desplazamiento = 10;

function encriptar(){

    var passSistema = "8D4j@9EP7B%Z";
    var msgError = "Error en la contraseña, vuelve a interlo";
    var password =document.getElementById("pass").value;
    var mensaje = document.getElementById("msg").value;
    var resultadoEncriptado = "";
    if(password === passSistema){
      document.getElementById("error").innerHTML = "";

      for(let i=0; i < mensaje.length; i++  ){
        //validando que sea una letra
       
        if(letras.indexOf(mensaje[i]) !=-1){
            //CONVERSION A CODIGO CESAR:
            var asciiEncriptado = mensaje.charCodeAt(i);
            var formulaCesar = ( asciiEncriptado - 65 + desplazamiento  ) % 26 + 65;

            var nuevaLetra = String.fromCharCode(formulaCesar);

            resultadoEncriptado = resultadoEncriptado + nuevaLetra;
        }

        else{
            resultadoEncriptado = resultadoEncriptado + mensaje[i];
        }
      }

      document.getElementById("deno1").innerHTML = resultadoEncriptado;
    
      

    }

    else{
        document.getElementById("error").innerHTML = msgError;

    }
}