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
    const bebida1 = ("fernet", 1000)
    const bebida2 = ("vodka smirnoft", 1250)
    const bebida3 = ("vodka absolut", 3500)
    const bebida4 = ("vodka skyy", 980)
    const bebida5 = ("vodka grey goose", 9400)
    const bebida6 = ("ron havana club", 1900)
    const bebida7 = ("ron havana club 3 años blanco", 2100)
    const bebida8 = ("ron havana club 7 años", 4650)
    const bebida9 = ("ron malibu", 2100)
    const bebida10 = ("gin bombay", 4100)
    const bebida11 = ("gin bombay bramble raspberry blackberry", 5700)
    const bebida12 = ("gin beefeater", 3650)
    const bebida13 = ("gin tanqueray", 3100)
    const bebida14 = ("whisky jack daniels", 6890)
    const bebida15 = ("whisky grants triple wood", 6100)
    const bebida16 = ("whisky johnnie walker black label", 5100)
    const bebida17 = ("whisky chivas regal 12 años", 5700)
    
    let total = 0 
    let carrito = []

function sumarProductos( ) {
    
}
