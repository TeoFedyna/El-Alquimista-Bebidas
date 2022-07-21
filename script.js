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

const bebida1 = {nombre : "fernet", precio : 1000}
const bebida2 = {nombre : "vodka smirnoft", precio : 1250}
const bebida3 = {nombre : "vodka absolut", precio : 3500}
const bebida4 = {nombre : "vodka skyy", precio : 980}
const bebida5 = {nombre : "vodka grey goose", precio : 9400}
const bebida6 = {nombre : "ron havana club", precio : 1900}
const bebida7 = {nombre : "ron havana club 3 años blanco", precio : 2100}
const bebida8 = {nombre : "ron havana club 7 años", precio : 4650}
const bebida9 = {nombre : "ron malibu", precio : 2100}
const bebida10 = {nombre : "gin bombay", precio : 4100}
const bebida11 = {nombre : "gin bombay bramble raspberry blackberry", precio : 5700}
const bebida12 = {nombre : "gin beefeater", precio : 3650}
const bebida13 = {nombre : "gin tanqueray", precio : 3100}
const bebida14 = {nombre : "whisky jack daniels", precio : 6890}
const bebida15 = {nombre : "whisky grants triple wood", precio : 6100}
const bebida16 = {nombre : "whisky johnnie walker black label", precio : 15100}
const bebida17 = {nombre : "whisky chivas regal 12 años", precio : 5700}


let total = 0 
let carrito = []
/*
//prompt("que productos queres commprar?")

function sumarProductos(productos1, productos2, productos3, productos4, productos5, productos6, productos7, productos8, productos9, productos10, productos11, productos12, productos13, productos14, productos15, productos16, productos17) {
    console.log(productos1 + productos2 + productos3 + productos4 + productos5 + productos6 + productos7 + productos8 + productos9 + productos10 + productos11 + productos12 + productos13 + productos14 + productos15 + productos16 + productos17); 
}

sumarProductos(bebida12, bebida3)


do {
    prompt("Que bebidas desea comprar?").toLowerCase()
    prompt("Que bebidas desea comprar?").toLowerCase()

} while (condition);
*/