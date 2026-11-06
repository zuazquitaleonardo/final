let inputUsuario =document.getElementById("inputUsuario")
let boton = document.getElementById("enviar")
const divRespuesta = document.getElementById("resultado");
let texto;

function vacilar() {
    let texto = inputUsuario.value;
    texto = texto.replace(" ","");
    texto == texto
     if(texto == "dilollo"){
        console.log("-CORRECTO: es di lollo");
    divRespuesta.innerHTML = "-CORRECTO: es di lollo";
     } else{
        console.log("-INCORRECTO, PISTA: La Vacila");
    divRespuesta.innerHTML = "-INCORRECTO, PISTA: La Vacila";
     }
}

boton.addEventListener("click", vacilar);