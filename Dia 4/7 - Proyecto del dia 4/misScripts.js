function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function sumar(){
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;
    
    mostrarResultado(numero1 + numero2)
}

function restar(){
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;

    mostrarResultado(numero1 - numero2)
}

function multiplicar(){
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;

    mostrarResultado(numero1 * numero2);
}

function dividir(){
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;

    mostrarResultado(numero1 / numero2);
}

function raizCuadrada(){
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;

    mostrarResultado(Math.sqrt(numero1));
}

function potencia(){
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;

    mostrarResultado(Math.pow(numero1, numero2));
}

function valorAbsoluto(){
    let numero1 = +document.getElementById("primerNumero").value;
    let numero2 = +document.getElementById("segundoNumero").value;

    mostrarResultado(Math.abs(numero1));
}

function random(){
    let minimo = +document.getElementById("primerNumero").value;
    let maximo = +document.getElementById("segundoNumero").value;

    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function redondear(){
    let resultado = +document.getElementById("resultado").value;

    mostrarResultado(Math.round(resultado));
}

function redondearFloor(){
    let resultado = +document.getElementById("resultado").value;

    mostrarResultado(Math.floor(resultado));
}

function redondearCeil(){
    let resultado = +document.getElementById("resultado").value;

    mostrarResultado(Math.ceil(resultado));
}