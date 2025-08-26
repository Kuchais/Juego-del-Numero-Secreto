//Variables
let numeroSecreto;
let intentos;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

//Configuración inicial al abrir la pagina
condicionesIniciales();

//Funciones
//Funcion llamada al dar click en intentar
function verificarIntento(){
    //Se puede hacer con el query o por medio del ID. Diferencia cuando hay varios inputs
    //let numeroUsuario = parseInt(document.querySelector('input'));
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //El jugador adivino
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   
    
    //El jugador no ha adivinado
    else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }   else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
}

//Funcion para limpiar caja de input
function limpiarInput(){
    //let valorCaja = document.querySelector('#valorUsuario'); query con ID
    //valorCaja.value = ('');
    document.getElementById('valorUsuario').value = ('');
}

//Funcion para asignar texto a elementos del HTML
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
}

//Funcion para asignar un numero aleatorio
function asignarNumeroAleatorio() {
   let valorAleatorio =  Math.floor((Math.random()*numeroMaximo))+1;
   console.log(valorAleatorio);
   console.log(listaNumerosSecretos);
   //Si ya se jugaron todos los numeros
   if(listaNumerosSecretos.length == numeroMaximo){
    asignarTextoElemento('p',"Ya se jugaron todos los numeros posibles");
   }//Si no, seguimos jugando
   else{
    //Condición, si esta en la lista
    if (listaNumerosSecretos.includes(valorAleatorio)){
    return asignarNumeroAleatorio();
   }//Y si no asignar el valor al numero secreto y agregar el valor a la lista
    else{
        listaNumerosSecretos.push(valorAleatorio);
        return valorAleatorio;
   }
   }
   
}

//Funcion para reiniciar juego
function reiniciarJuego(){
    //Limpiar input
    limpiarInput();
    //Mostrar intervalos
    //Reiniciar intentos
    //Generar nuevo numero aleatorio
    condicionesIniciales();
    //Deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//Funcion de condiciones iniciales
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indique un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = asignarNumeroAleatorio();
    intentos = 1;
}