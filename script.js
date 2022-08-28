// Validador para mayoria de edad
/*
let edad
/*
do {
    edad = parseInt(prompt("Que edad tiene ?"))

    if (edad < 18) {
        alert("Lo sentimos pero debe ser mayor de 18 para entrar")
    } else if (isNaN(edad)) {
        alert("Porfavor ingrese su edad de forma numerica")
    } else if (edad > 99) {
        alert("Lo sentimos pero esta demasiado mayor para un trago ;)")
    } else {
        alert("Bienvenido a El Alquimista bebidas, porfavor elija su compra!!!")
    }
} while (edad < 18 || edad > 99 || isNaN(edad));
*/
// Lista de productos

class Producto {
    constructor(tipo = "", nombre = "", precio = 900, cantidad = 1, id) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.id = id;
    }

    aumentarPrecio(porcentajeAumentado) {
        return this.precio *= (1 + porcentajeAumentado)
    }

    aplicarDescuento(porcentajeDescuento) {
        return this.precio *= (1 - porcentajeDescuento)
    }
}

const bebida1 = new Producto("Fernet", "Branca", 1000, 1, 1)
const bebida2 = new Producto("Fernet", "Branca Menta", 1000, 1, 2)
const bebida3 = new Producto("Vodka", "Smirnoft", 1250, 1, 3)
const bebida4 = new Producto("Vodka", "Absolut", 3500, 1, 4)
const bebida5 = new Producto("Vodka", "Skyy", 980, 1, 5)
const bebida6 = new Producto("Vodka", "Grey Goose", 9400, 1, 6)
const bebida7 = new Producto("Ron", "Havana Club", 1900, 1, 7)
const bebida8 = new Producto("Ron", "Havana Club 3 años blanco", 2100, 1, 8)
const bebida9 = new Producto("Ron", "Havana Club 7 años", 4650, 1, 9)
const bebida10 = new Producto("Ron", "Malibu", 2100, 1, 10)
const bebida11 = new Producto("Gin", "Bombay", 4100, 1, 11)
const bebida12 = new Producto("Gin", "Bombay Bramble Raspberry Blackberry", 5700, 1, 12)
const bebida13 = new Producto("Gin", "Beefeater", 3650, 1, 13)
const bebida14 = new Producto("Gin", "Tanqueray", 3100, 1, 14)
const bebida15 = new Producto("Whisky", "Jack daniels", 6890, 1, 15)
const bebida16 = new Producto("Whisky", "Grants Triple Wood", 6100, 1, 16)
const bebida17 = new Producto("Whisky", "Johnnie walker Black Label", 5100, 1, 17)
const bebida18 = new Producto("Whisky", "Chivas Regal 12 años", 5700, 1, 18)

const bebidas = [bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7, bebida8, bebida9, bebida10, bebida11, bebida12, bebida13, bebida14, bebida15, bebida16, bebida17, bebida18]

let carrito = []

//LOCAL STORAGE (getItem)

document.addEventListener("DOMContentLoaded", () =>{
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})

//HTML DINAMICO
const divBebidas = document.getElementById("bebidas")

bebidas.forEach((bebidasArray, indice) => {
    divBebidas.innerHTML += `
    <div class="card margen bebidas" id="bebida${bebidasArray.id}" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${bebidasArray.nombre}</h5>
            <p class="card-text">Tipo de bebida: ${bebidasArray.tipo}</p>
            <p class="card-text">Precio: $${bebidasArray.precio}</p>
            <a href="#" id="carrito${indice}" class="btn btn-primary carritoYWishBtn">Agregar al carrito</a>
        </div>
    </div>
    `
});

//EVENTOS

//agregar al carrito
bebidas.forEach((bebida, indice) => {
    const agregarCarrito = document.getElementById(`carrito${indice}`)
    agregarCarrito.addEventListener("click", (e) => {
        e.preventDefault()
        carrito.push(bebida)
        actualizarCarrito()
        //console.log(e.target.textContent);
    })
})

const carritoContenedor = document.getElementById("carrito-contenedor")
const precioTotal = document.getElementById("precioTotal")

const actualizarCarrito = () => {
    //LOCAL STORAGE (setItem)
    localStorage.setItem("carrito", JSON.stringify(carrito))

    carritoContenedor.innerHTML = ""
    
    carrito.forEach((product) => {
            const div = document.createElement("div")
            div.className = ("productoEnCarrito")
            div.innerHTML = `
            <p>${product.tipo} ${product.nombre}</p>
            <p>Precio: ${product.precio}</p>
            <p>Cantidad: <span id="cantidad">${product.cantidad}</span></p>
            <div><button onclick = "eliminarDelCarrito(${product.id})" class="boton-eliminar"><img class="eliminarImg" src="./images/can-trash_110351.png"></img></button></div>
            <hr>
            `
            carritoContenedor.appendChild(div)
        })
    console.log(carrito);
    precioTotal.innerText = carrito.reduce((acc, preduct) => acc + preduct.precio, 0)
}

// eliminar del carrito

const eliminarDelCarrito = (productId) => {
    const item = carrito.find((product) => product.id === productId)
    const indice1 = carrito.indexOf(item)
    carrito.splice(indice1, 1)
    actualizarCarrito()
}

// vaciar carrito

const botonVaciar = document.getElementById("vaciar-carrito")

botonVaciar.addEventListener("click", () =>{
    carrito.length = 0
    actualizarCarrito()
})

/*
EJEMPLO DE SUBMIT
const form = document.getElementById("form")

form.addEventListener("submit", (pepe) =>{
    pepe.preventDefault
    console.log("hola");
})
*/
/*
//DESCUENTO A TODAS LAS BEBIDAS (agregar descuento a algunas bebidas y poner ul filtro para solo las que estab en descuento)
for (let i = 0; i < bebidas.length; i++) {
    console.log(bebidas[i].aplicarDescuento(0.50));
}
*/
/*
//FILTRO POR TIPO DE BEBIDAS
const tipoFernet = bebidas.filter((tipoBebida) => tipoBebida.tipo == "fernet")
const tipoVodka = bebidas.filter((tipoBebida) => tipoBebida.tipo == "vodka")
const tipoRon = bebidas.filter((tipoBebida) => tipoBebida.tipo == "ron")
const tipoGin = bebidas.filter((tipoBebida) => tipoBebida.tipo == "gin")
const tipoWhiskey = bebidas.filter((tipoBebida) => tipoBebida.tipo == "whisky")

let pregunta
do {
    pregunta = parseFloat(prompt(`que tipo de bebidas estas buscando?
    1- fernet  
    2- vodka  
    3- ron  
    4- gin  
    5- whiskey`))

    switch (pregunta) {
        case 1:
            console.log(tipoFernet);
            break;
        case 2:
            console.log(tipoVodka);
            break;    
        case 3:
            console.log(tipoRon);
            break;
        case 4:
            console.log(tipoGin);
            break;
        case 5:
            console.log(tipoWhiskey);
            break;
        default:
            alert("no esxiste este tipo de bebida")
        break;
    }

    listo = prompt("quieres ver mas tipos de bebidas?").toLowerCase()
} while (listo !== "no");
*/

