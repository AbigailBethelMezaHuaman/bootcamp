function resta(a,b){

    return a-b;

}

console.log(resta(5,4));


function suma(numero1,numero2){

    return numero1+numero2;

}

console.log( suma(20,5) ); //numero1 = 20  numero2 = 5

function mensaje(a,b){

    if((a+b)>10){
        return "LA SUMA ES MAYOR A 10"
    }
    else{
        return "LA SUMA NO ES MAYOR A 10"
    }

}

console.log(mensaje(8,1));

function ayuda(a,b){

    if((a*b)>20){
        return "LA MULTIPLICACIÓN SÍ ES MAYOR A 20";
    }

    else{
        return "NO ES MAYOR A 20";
    }

}

console.log(ayuda(5,8))