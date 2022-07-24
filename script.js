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
const bebida1 = new Producto ("fernet", "branca", 1000)
const bebida18 = new Producto ("fernet", "branca menta", 1000)
const bebida2 = new Producto ("vodka", "smirnoft", 1250)
const bebida3 = new Producto ("vodka", "absolut", 3500)
const bebida4 = new Producto ("vodka", "skyy", 980)
const bebida5 = new Producto ("vodka", "grey goose", 9400)
const bebida6 = new Producto ("ron", "havana club", 1900)
const bebida7 = new Producto ("ron", "havana club 3 años blanco", 2100)
const bebida8 = new Producto ("ron", "havana club 7 años", 4650)
const bebida9 = new Producto ("ron", "malibu", 2100)
const bebida10 = new Producto ("gin", "bombay", 4100)
const bebida11 = new Producto ("gin", "bombay bramble raspberry blackberry", 5700)
const bebida12 = new Producto ("gin", "beefeater", 3650)
const bebida13 = new Producto ("gin", "tanqueray", 3100)
const bebida14 = new Producto ("whisky", "jack daniels", 6890)
const bebida15 = new Producto ("whisky", "grants triple wood", 6100)
const bebida16 = new Producto ("whisky", "johnnie walker black label", 5100)
const bebida17 = new Producto ("whisky", "chivas regal 12 años", 5700)

let carrito = []

class Producto {
    constructor(tipo = "", nombre = "", precio = 900) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }

    aumentarPrecio(porcentajeAumentado) {
        this.precio *= porcentajeAumentado
    }

    aplicarDescuento(porcentajeDescuento) {
        this.precio -= (this.precio * porcentajeDescuento)
    }

}



