let inputUsuario = document.getElementById("inputUsuario");
let boton = document.getElementById("enviar");
let boton2 = document.getElementById("jugar");
const divRespuesta = document.getElementById("resultado");
const casacaNumero = document.getElementById("casaca");
let nume = document.getElementById("num");
let texto;
let numero;
const casacasInvalidas = [0, 14, 21, 23, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41];
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
        numero: 4,
        nombre: "figal"
    },
    {
        numero: 5,
        nombre: "paredes"
    },
    {
        numero: 6,
        nombre: "battaglia"
    },
    {
        numero: 7,
        nombre: "palacios"
    },
    {
        numero: 8,
        nombre: "belmonte"
    },
    {
        numero: 9,
        nombre: "gimenez"
    },
    {
        numero: 10,
        nombre: "aranda"
    },
    {
        numero: 11,
        nombre: "romero"
    },
    {
        numero: 12,
        nombre: "brey"
    },
    {
        numero: 13,
        nombre: "valencia"
    },
    {
        numero: 15,
        nombre: "alarcon"
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
        numero: 24,
        nombre: "gorosito"
    },
    {
        numero: 25,
        nombre: "ascasibar"
    },
    {
        numero: 26,
        nombre: "pelegrino"
    },
    {
        numero: 27,
        nombre: "braida"
    },
    {
        numero: 28,
        nombre: "bareiro"
    },
    {
        numero: 30,
        nombre: "garcia"
    },
    {
        numero: 32,
        nombre: "costa"
    },
    {
        numero: 42,
        nombre: "herrera"
    },
]


function jugar() {
    numero = Math.floor(Math.random() * 42)
    if (casacasInvalidas.includes(numero)) {
        console.log("regenerando numero, numero anterior: " + numero);
        jugar();
    } else {
        nume.innerHTML = numero;
        return
    }
}
// 1 se debe generar un numero arriba de la imagen al abrirse la pagina
// 2 pones un nombre de un jugador en la barrita y le das a vasilar
// 3 si es ese, es correcto sino no y que se genere otro numero


function vacilar() {
    console.log(numero);
    let objetoEncontrado = casaca.find(item => item.numero == numero);
    console.log(objetoEncontrado)
    let elNombre = objetoEncontrado.nombre
    console.log(elNombre)
    texto = inputUsuario.value;
    texto = texto.replace(" ", "");
    texto = texto.toLowerCase();
    if (texto == elNombre) {
        console.log("-CORRECTO: es " + elNombre);
        divRespuesta.innerHTML = "-CORRECTO: es " + elNombre;
        jugar();
    } else {
        console.log("-INCORRECTO: era: " + elNombre);
        divRespuesta.innerHTML = "-INCORRECTO: era: " + elNombre;
        jugar();
    }

}

boton.addEventListener("click", vacilar);
boton2.addEventListener("click", jugar);