let array = [8,7,9,10,3];

function listarNotas(){
    let lista = document.getElementById("listaNotas");

    for(let nota of array){
        let item = document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}

function calcularPromedio(){
    let suma = 0;

    for(i=0; i<5; i++) {
        suma += array[i];
    }

    let promedio = (suma / 5);
    document.getElementById("promedio").textContent = promedio;
}

function identificarNotaMasAlta(){
    let nota = 0;
    let i = 0;

    while(i < 5){
        if(array[i] > nota){
            nota = array[i];
        }
        i++;
    }

    document.getElementById("notaMasAlta").textContent = nota;
}

function identificarAplazo(){
    let aplazo = "No";
    let i = 0;

    do{
        if(array[i] < 4){
            aplazo = "Si";
            break;
        } 
        i++;
    } while (i < 5)
    
    document.getElementById("aplazo").textContent = aplazo;
}