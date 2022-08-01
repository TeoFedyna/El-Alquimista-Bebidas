// Validador para mayoria de edad
let edad

do {
    edad = parseInt(prompt("Que edad tiene ?"))

    if (edad < 18) {
        alert("Lo sentimos pero debe ser mayor de 18 para entrar")
    }else if (isNaN(edad)) {
        alert("Porfavor ingrese su edad de forma numerica")
    }else if (edad > 99) {
        alert("Lo sentimos pero esta demasiado mayor para un trago ;)")
    }else {
        alert("Bienvenido a El Alquimista bebidas, porfavor elija su compra!!!")
    }
} while (edad < 18 || edad > 99 || isNaN(edad));

// Lista de productos
class Producto {
    constructor(tipo = "", nombre = "", precio = 900) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }

    aumentarPrecio(porcentajeAumentado) {
        return this.precio *= (1 + porcentajeAumentado)
    }

    aplicarDescuento(porcentajeDescuento) {
        return this.precio *= (1 - porcentajeDescuento)
    }
}

const bebida1 = new Producto ("fernet", "branca", 1000)
const bebida2 = new Producto ("fernet", "branca menta", 1000)
const bebida3 = new Producto ("vodka", "smirnoft", 1250)
const bebida4 = new Producto ("vodka", "absolut", 3500)
const bebida5 = new Producto ("vodka", "skyy", 980)
const bebida6 = new Producto ("vodka", "grey goose", 9400)
const bebida7 = new Producto ("ron", "havana club", 1900)
const bebida8 = new Producto ("ron", "havana club 3 años blanco", 2100)
const bebida9 = new Producto ("ron", "havana club 7 años", 4650)
const bebida10 = new Producto ("ron", "malibu", 2100)
const bebida11 = new Producto ("gin", "bombay", 4100)
const bebida12 = new Producto ("gin", "bombay bramble raspberry blackberry", 5700)
const bebida13 = new Producto ("gin", "beefeater", 3650)
const bebida14 = new Producto ("gin", "tanqueray", 3100)
const bebida15 = new Producto ("whisky", "jack daniels", 6890)
const bebida16 = new Producto ("whisky", "grants triple wood", 6100)
const bebida17 = new Producto ("whisky", "johnnie walker black label", 5100)
const bebida18 = new Producto ("whisky", "chivas regal 12 años", 5700)

const bebidas = [bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7, bebida8, bebida9, bebida10, bebida11, bebida12, bebida13, bebida14, bebida15, bebida16, bebida17, bebida18]


let carrito = []

//FILTRO POR TIPO DE BEBIDAS
const tipoFernet = bebidas.filter((tipoBebida) => tipoBebida.tipo == "fernet")
const tipoVodka = bebidas.filter((tipoBebida) => tipoBebida.tipo == "vodka")
const tipoRon = bebidas.filter((tipoBebida) => tipoBebida.tipo == "ron")
const tipoGin = bebidas.filter((tipoBebida) => tipoBebida.tipo == "gin")
const tipoWhiskey = bebidas.filter((tipoBebida) => tipoBebida.tipo == "whisky")

let pregunta
do {
    pregunta = parseFloat(prompt("que tipo de bebidas estas buscando? 1-fernet  2-vodka  3-ron  4-gin  5-whiskey"))

    if (pregunta === 1) {
        console.log(tipoFernet);
    }else if (pregunta === 2) {
        console.log(tipoVodka);
    }else if (pregunta === 3) {
        console.log(tipoRon);
    }else if (pregunta === 4) {
        console.log(tipoGin);
    }else if (pregunta === 5){
        console.log(tipoWhiskey);
    } else{
        alert("no esxiste este tipo de bebida")
    }
    listo = prompt("quieres ver mas tipos de bebidas?").toLowerCase()
} while (listo !== "no");


/*
function odenarBebidas(pregunta) {
    if (pregunta === 1) {
        console.log(tipoFernet);
    }else if (pregunta === 2) {
        console.log(tipoVodka);
    }else if (pregunta === 3) {
        console.log(tipoRon);
    }else if (pregunta === 4) {
        console.log(tipoGin);
    }else if (pregunta === 5){
        console.log(tipoWhiskey);
    } else{
        alert("no esxiste este tipo de bebida")
    }
}

let pregunta = parseFloat(prompt("que tipo de bebidas estas buscando? 1-fernet 2-vodka 3-ron 4-gin 5-whiskey"))

do {
    odenarBebidas(pregunta)
    listo = prompt("quieres ver mas tipos de bebidas?").toLowerCase()
} while (listo !== "no");
*/

//DESCUENTO A TODAS LAS BEBIDAS
/*
for (let i = 0; i < bebidas.length; i++) {
    console.log(bebidas[i].aplicarDescuento(0.50));
}
*/


