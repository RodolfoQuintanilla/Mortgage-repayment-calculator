/* Funciones */
let numeUno = document.querySelector("#numeUno");
let numTres = document.querySelector("#numTres");
const radioUno = document.querySelector("#radioUno");
const radioDos = document.querySelector("#radioDos");
const btnCalcular = document.querySelector("#btnCalcular");




const select1 = document.querySelector("#select1");
let resultado;

function logica() {


    if (numeUno.value === '' || !radioUno.checked && !radioDos.checked) {
        
        errores();

    } else {
        switch (Number(select1.value)) {
            case 12:
                resultado = Number(numeUno.value) * 1.20;
                numTres.value = 20;
                res(resultado)
                break;
            case 24:
                resultado = Number(numeUno.value) * 1.25;
                numTres.value = 25;
                console.log(resultado);
                break;
            case 36:
                resultado = Number(numeUno.value) * 1.30;
                numTres.value = 30;
                console.log(resultado);
                break;
            default:
                resultado = Number(numeUno.value) * 1.35;
                numTres.value = 35;
                console.log(resultado);
                break;
        }
    }
}

function res(res) {
    if (radioUno.checked) {
        console.log('se imprime Reembolso' + res);

    } else {
        console.log('Solo intereses' + res);
    }
}

function limpiar() {
    numeUno.value = "";
    numTres.value = "";
    radioUno.checked = false;
    radioDos.checked = false;
}

/* Fata validaciones */ 


function errores() {
    console.log("no valida");
}