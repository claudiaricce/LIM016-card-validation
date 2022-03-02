import validator from './validator.js';
//comprobando en consola
//console.log(validator.isValid('4083952015263'));
//console.log(validator.maskify('4556364607935616'));

// validaciones para el input 
var inputNumber = document.getElementById('cn');
let inputString = document.getElementById('name');

const onlyNum = /[^0-9]/g;
const onlyLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;
inputNumber.addEventListener('input', function () {
  inputNumber.value = inputNumber.value.replace(onlyNum,'');
});
inputString.addEventListener('input', function (){
  inputString.value = inputString.value.replace(onlyLet,'');
});

//llamando elementos para abrir y cerrar la ventana modal
let cerrar= document.querySelectorAll(".close")[0];
let abrir= document.querySelectorAll(".btn")[0];
let modal= document.querySelectorAll(".modal")[0];
let modalC= document.querySelectorAll(".modal-container")[0];

abrir.addEventListener('click', function(e){
    e.preventDefault();
    if( inputNumber.value === "" || inputString.value === ""){
        document.getElementById("myP").style.display = 'block';
        return false;
    }
    else{ 
    inputNumber.value != "" || inputString.value != "";
    document.getElementById("myP").style.display = 'none';

    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    //console.log(validator.isValid(inputNumber.value));   
    //console.log(validator.maskify(inputNumber.value));
    let validNumber= validator.isValid(inputNumber.value);
    alerta(validNumber);
    }
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    },700)
});

//Contenido de la ventana modal 
function alerta (resultado){
let Show= document.getElementById("Tjt");
if(resultado){
    Show.innerHTML= "Tarjeta válida<br>" + validator.maskify(inputNumber.value);
}
else{
    Show.innerHTML= "Tarjeta no válida<br>" + validator.maskify(inputNumber.value);
}
}