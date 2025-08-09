let vectornumerosaleatorios = [];
let numerosecreto = generarNumeroSecreto();
let intentos = 0;
mensajesdeEntrada();

function mensajesdeEntrada(){
   asignacionDeTextoElemento("h1", "Juego del Numero Secreto, en 5 intentos");
   asignacionDeTextoElemento("p", "Escoge un Numero del 1 al 10");
   intentos = 0;
}

function asignacionDeTextoElemento(elemento, texto){
    let elemenmtoHTML = document.querySelector(elemento);
    elemenmtoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroSecretoFuncion = Math.floor(Math.random()*10)+1;

    if(vectornumerosaleatorios.length == 10){
       asignacionDeTextoElemento("p", "Juego finalizado");

    }
    else{
        if(vectornumerosaleatorios.includes(numeroSecretoFuncion)){
           return generarNumeroSecreto();
        }
       else{
           vectornumerosaleatorios.push(numeroSecretoFuncion);
           console.log(vectornumerosaleatorios);
           return numeroSecretoFuncion;
        }
    }
    
}

function verificarIntento(){

       let numeroingresado = parseInt(document.getElementById("01").value);
       console.log(numerosecreto);
       console.log(typeof(numerosecreto));
       console.log(numeroingresado);
       console.log(typeof(numeroingresado));

       if(numerosecreto > numeroingresado){
          asignacionDeTextoElemento("p","Fallaste el numero es mayor");
          intentos++;
          limpiarCaja();
        }
        else if(numerosecreto < numeroingresado) {
          asignacionDeTextoElemento("p","Fallaste el numero es menor ");
          intentos++;
          limpiarCaja();
        }
        else if((numerosecreto == numeroingresado)){
          intentos++;
          asignacionDeTextoElemento("p",`Ganates el juego en ${intentos} ${(intentos == 1)? "vez":"veces"}`);
          document.getElementById("reiniciar").removeAttribute("disabled")
        }
}

function limpiarCaja(){
    let valorcaja = document.getElementById("01");
    valorcaja.value="";
}

function reinicarJuego(){
    mensajesdeEntrada();
    limpiarCaja();
    numerosecreto = generarNumeroSecreto();
    verificarIntento();
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}


/* Desafio, llenado de un vector y luego mostrar ese vector invertido 

let lenguajesDeProgramacion = ["javascript", "C", "C++", "kotlin", "Python"];
let vectorinverso = [];

lenguajesDeProgramacion.push("java");
lenguajesDeProgramacion.push("ruby");
lenguajesDeProgramacion.push("golang");

lenguajesEnPantalla();
function lenguajesEnPantalla(){
    console.log(lenguajesDeProgramacion);
}

vectorLenguajesInvertido();
function vectorLenguajesInvertido(){
    for(let i = 0; i < lenguajesDeProgramacion.length; i++){

        vectorinverso.push(lenguajesDeProgramacion[lenguajesDeProgramacion.length - i -1]);
    }
    console.log(vectorinverso);
}
*/


/* Desafio, salcular el promedio de numeros en un vector

let vectornumero = [3,4,5,3,6,3,7,9,9];
let sumaAcumulada = 0;

console.log(vectornumero);
console.log(promedioDelVector());

function promedioDelVector(){

    for(let i = 0; i < vectornumero.length; i++){
        sumaAcumulada += vectornumero[i];
    }
    console.log(sumaAcumulada);

    let promedio = (sumaAcumulada)/(vectornumero.length);
    console.log(promedio);
    return promedio;
}
*/


/* Desafio, determinar el valor mayor de un vector, aqui usamos el operador spread(...) y el metodo Math.max que calcula el valor mayor de lo que se le ponga adentro

let vectorNumeros = [12,14,16,19,83,64,47];

console.log(vectorNumeros);

console.log(calculoValorMayor());
function calculoValorMayor(){

    let valorMayor = Math.max(...vectorNumeros);
    
    let valormenor = Math.min(...vectorNumeros);

    return `Valor mayor es ${valorMayor}, Valor menor es ${valormenor}`;
}
*/


/* Desafio, se pregunta por un valor en el vector y devuelve pa posicion en donde esta, si no esta se devuelve -1

let vectornumeros = [];
let tamañovector = parseInt(prompt("Quieres crear un vector de cuantas posiciones?"))
let vectorlleno = llenadvector();

function llenadvector(){
    for(let i = 0; i<tamañovector; i++){

        let numeroposicion = parseInt(prompt(`ingresa el valor de la ${(i == 0 ? "primera" : "siguiente")} posicion`))
        vectornumeros.push(numeroposicion);

    }
    console.log(vectornumeros);
    return vectornumeros;
}


let numerosolicitado = parseInt(prompt("Ingresa un numero del vector para que veas en que posicion esta"));
console.log(devolverNumeroSolicitado(vectorlleno, numerosolicitado));

function devolverNumeroSolicitado(vectorlleno, numerosolicitado){

    let posiciondelnumero = vectorlleno.indexOf(numerosolicitado);

    if(posiciondelnumero < vectornumeros.length){
       return posiciondelnumero;
    }
    else{
        return "-1";
    }
}
*/


/* Desafio, se crean 2 vectores y se suman cada uno en la posicion que va recorriendo el indice y el resultado es una nueva lista con el valor sumado de cada posicion 


let vectornumeros1 = [2,3,5,2,23];
let vectornumeros2 = [2,3,5,2,23];
let suma = [];

alert(`Estos son los valores que tiene el vector #1 ${vectornumeros1}, estos valores son el vector #2 ${vectornumeros2}`)

function sumadeDosElementos(){

    for(let i = 0; i < vectornumeros1.length; i++){

        suma.push(parseInt(vectornumeros1[i]) + parseInt(vectornumeros2[i]));

    }
    return suma;
}
console.log(sumadeDosElementos());
*/


/* Desafio, se devuelve el cuadrado de cada numero del vector en una nueva lista

let vectornumeros1 = [2,3,5,2,23];
let cuadrado = [];

alert(`Estos son los valores que tiene el vector #1 ${vectornumeros1}`)

function sumadeDosElementos(){

    for(let i = 0; i < vectornumeros1.length; i++){

        cuadrado.push(parseInt(vectornumeros1[i]) * parseInt(vectornumeros1[i]));

    }
    return cuadrado;
}
console.log(sumadeDosElementos());
*/



