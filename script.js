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
const bebida1 = {nombre:"fernet", precrio: 1000}
const bebida2 = {nombre:"vodka smirnoft", precrio: 1250}
const bebida3 = {nombre:"vodka absolut", precrio: 3500}
const bebida4 = {nombre:"vodka skyy", precrio: 980}
const bebida5 = {nombre:"vodka grey goose", precrio: 9400}
const bebida6 = {nombre:"ron havana club", precrio: 1900}
const bebida7 = {nombre:"ron havana club 3 años blanco", precrio: 2100}
const bebida8 = {nombre:"ron havana club 7 años", precrio: 4650}
const bebida9 = {nombre:"ron malibu", precrio: 2100}
const bebida10 = {nombre:"gin bombay", precrio: 4100}
const bebida11 = {nombre:"gin bombay bramble raspberry blackberry", precrio: 5700}
const bebida12 = {nombre:"gin beefeater", precrio: 3650}
const bebida13 = {nombre:"gin tanqueray", precrio: 3100}
const bebida14 = {nombre:"whisky jack daniels", precrio: 6890}
const bebida15 = {nombre:"whisky grants triple wood", precrio: 6100}
const bebida16 = {nombre:"whisky johnnie walker black label", precrio: 5100}
const bebida17 = {nombre:"whisky chivas regal 12 años", precrio: 5700}
    
let total = 0 
let carrito = []

function sumarProductos(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17) {
    
}