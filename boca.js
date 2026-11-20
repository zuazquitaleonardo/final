let inputUsuario =document.getElementById("inputUsuario");
let boton = document.getElementById("enviar");
const divRespuesta = document.getElementById("resultado");
const casacaNumero = document.getElementById("casaca");
let texto;
let numero;
const casacasInvalidas = [0, 4, 6, 7, 8, 9, 11, 12, 14, 15, 21, 23, 24];
const casaca = [
    {
        numero: 1,
        nombre: "montero"
    },
    {
        numero: 2,
        nombre: "dilollo"
    },
    {
        numero: 3,
        nombre: "blanco"
    },
    {
        numero: 5,
        nombre: "paredes"
    },
    {
        numero: 10,
        nombre: "aranda"
    },
    {
        numero: 13,
        nombre: "valencia"
    },
    {
        numero: 16,
        nombre: "merentiel"
    },
    {
        numero: 17,
        nombre: "lozano"
    },
    {
        numero: 18,
        nombre: "delgado"
    },
    {
        numero: 19,
        nombre: "flores"
    },
    {
        numero: 20,
        nombre: "velasco"
    },
    {
        numero: 22,
        nombre: "villa"
    },
    {
        numero: 25,
        nombre: "ascasibar"
    },
]


function generarCasaca() {
    numero = Math.floor(Math.random()*25)
    if (casacasInvalidas.includes(numero)){
        console.log("regenerando numero, numero anterior: " + numero);
        generarCasaca();
    } else {
        return
    }
}


function vacilar() {
    generarCasaca() //esto debera ser llamado al final para cambiar el numero de la casaca
    console.log(numero);
    let objetoEncontrado = casaca.find(item => item.numero == numero);
    console.log(objetoEncontrado)
    
    let elNombre = objetoEncontrado.nombre
    console.log(elNombre)
    texto = inputUsuario.value;
    texto = texto.replace(" ","");
    texto = texto.toLowerCase();
     if(texto == "dilollo"){
        console.log("-CORRECTO: es di lollo");
    divRespuesta.innerHTML = "-CORRECTO: es di lollo";
     } else{
        console.log("-INCORRECTO, PISTA: La Vacila");
    divRespuesta.innerHTML = "-INCORRECTO, PISTA: La Vacila";
     }
}

boton.addEventListener("click", vacilar);

generarCasaca()