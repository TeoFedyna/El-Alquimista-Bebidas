// Validador para mayoria de edad
/*
let edad

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
    constructor(id, tipo = "", nombre = "", precio = 900) {
        this.id = id;
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

const bebida1 = new Producto(1, "Fernet", "Branca", 1000)
const bebida2 = new Producto(2, "Fernet", "Branca Menta", 1000)
const bebida3 = new Producto(3, "Vodka", "Smirnoft", 1250)
const bebida4 = new Producto(4, "Vodka", "Absolut", 3500)
const bebida5 = new Producto(5, "Vodka", "Skyy", 980)
const bebida6 = new Producto(6, "Vodka", "Grey Goose", 9400)
const bebida7 = new Producto(7, "Ron", "Havana Club", 1900)
const bebida8 = new Producto(8, "Ron", "Havana Club 3 años blanco", 2100)
const bebida9 = new Producto(9, "Ron", "Havana Club 7 años", 4650)
const bebida10 = new Producto(10, "Ron", "Malibu", 2100)
const bebida11 = new Producto(11, "Gin", "Bombay", 4100)
const bebida12 = new Producto(12, "Gin", "Bombay Bramble Raspberry Blackberry", 5700)
const bebida13 = new Producto(13, "Gin", "Beefeater", 3650)
const bebida14 = new Producto(14, "Gin", "Tanqueray", 3100)
const bebida15 = new Producto(15, "Whisky", "Jack daniels", 6890)
const bebida16 = new Producto(16, "Whisky", "Grants Triple Wood", 6100)
const bebida17 = new Producto(17, "Whisky", "Johnnie walker Black Label", 5100)
const bebida18 = new Producto(18, "Whisky", "Chivas Regal 12 años", 5700)

const bebidas = [bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7, bebida8, bebida9, bebida10, bebida11, bebida12, bebida13, bebida14, bebida15, bebida16, bebida17, bebida18]

let carrito = []

let wishList = []

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
            <a href="#" id="wishList${indice}" class="btn btn-primary carritoYWishBtn">Agregar a la lista de deseos</a>
        </div>
    </div>
    `
});

//EVENTOS

bebidas.forEach((bebida, indice) => {
    const agregarCarrito = document.getElementById(`carrito${indice}`)
    agregarCarrito.addEventListener("click", (e) => {
        
        carrito.push(bebida)
        console.log(carrito);
        //console.log(e.target.textContent);
    })
})

bebidas.forEach((bebida, indice) => {
    const agregarWishList = document.getElementById(`wishList${indice}`)
    agregarWishList.addEventListener("click", () => {
        
        wishList.push(bebida)
        console.log(wishList);
    })
})

const iconoCarrito = document.getElementById('carritoButtom')

iconoCarrito.addEventListener("click", () => {
    carrito.forEach();
})

/*
EJEMPLO DE SUBMIT
const form = document.getElementById("form")

form.addEventListener("submit", (pepe) =>{
    pepe.preventDefault
    console.log("hola");
})
*/

//DESCUENTO A TODAS LAS BEBIDAS (agregar descuento a algunas bebidas y poner ul filtro para solo las que estab en descuento)
/*
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
            onsole.log(tipoVodka);
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



