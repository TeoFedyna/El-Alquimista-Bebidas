// Validador para mayoria de edad (LIBRERIA sweetaler2)
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

let edad = localStorage.getItem("edad") ?? ""

if (edad === "") {
    swalWithBootstrapButtons.fire({
        title: 'Eres mayor de edad?',
        text: "Debes ser mayor de 18 años para comprar bebidas alcoholicas",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, soy mayor de edad',
        cancelButtonText: 'No, soy menor de edad',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Genial!',
                'Disfruta tu estadia en nuestra pagina',
                'success'
            )
            localStorage.setItem("edad", "mayorEdad")
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                'Lo sentimos',
                'Pero no puedes comprar bebidas alcoholicas',
                'error'
            )
            localStorage.setItem("edad", "menorEdad")

            const edad = document.getElementById("bebidas")

            edad.setAttribute("hidden", "true")
        }
    })
}

if (edad === "menorEdad") {
    swalWithBootstrapButtons.fire(
        'Lo sentimos',
        'Pero nos has indicado que eres menor de edad',
        'error'
    )
    const edad = document.getElementById("bebidas")

    edad.setAttribute("hidden", "true")
}

// Clase clientes

class Cliente {
    constructor(nombre = "", apellido = "", correoElectronico = "", direccion = "", pedido) {
        this.nombre = nombre
        this.apellido = apellido
        this.correoElectronico = correoElectronico
        this.direccion = direccion
        this.pedido = carrito
    }
}

// Lista de productos

class Producto {
    constructor(tipo = "", nombre = "", precio = 900, cantidad = 1, id, img) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.id = id;
        this.img = img;
    }

    aumentarPrecio(porcentajeAumentado) {
        return this.precio *= (1 + porcentajeAumentado)
    }

    aplicarDescuento(porcentajeDescuento) {
        return this.precio *= (1 - porcentajeDescuento)
    }
}

//ARRAYS

let carrito = []
let pedidos = []

//LOCAL STORAGE (getItem)

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
    }
})

//AJAX Y FETCH / HTML DINAMICO

const divBebidas = document.getElementById("bebidas")

fetch("./json/bebidas.json")
.then(response => response.json())
.then(bebidas => {
    bebidas.forEach((bebidasArray, indice) => {
        divBebidas.innerHTML += `
        <div class="card margen bebidas" id="bebida${bebidasArray.id}" style="width: 18rem;">
            <img class="bebidasImg" src="./images/${bebidasArray.img}" >
            <div class="card-body">
                <h5 class="card-title"> ${bebidasArray.nombre}</h5>
                <p class="card-text">Tipo de bebida: ${bebidasArray.tipo}</p>
                <p class="card-text">Precio: $${bebidasArray.precio}</p>
                <button href="#" id="carrito${indice}" class="btn btn-primary carritoYWishBtn">Agregar al carrito</button>
            </div>
        </div>
        `
    });
    //EVENTO agregar al carrito
    bebidas.forEach((bebida, indice) => {
        const agregarCarrito = document.getElementById(`carrito${indice}`)
        
        agregarCarrito.addEventListener("click", (e) => {
            // libreria toastify
            Toastify({
                text: `se agrego al carrito: ${bebida.tipo} ${bebida.nombre}`,
                duration: 3000,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to left, #365433, #4BFF01)",
                },
                onClick: function () { } // Callback after click
            }).showToast();

            e.preventDefault()
            carrito.push(bebida)
            actualizarCarrito()
            //console.log(e.target.textContent);  
        })
    })
})

//EVENTOS

// actualizar carrito

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
        <div class="divButton"><button onclick = "eliminarDelCarrito(${product.id})" class="boton-eliminar"><img class="eliminarImg" src="./images/can-trash_110351.png"></img></button></div>
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

botonVaciar.addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito()
})

// finalizar compra 

let pedido = localStorage.getItem("pedidos") ?? []
const formularioPedidos = document.getElementById("formularioPedidos")
const finalizarCompra = document.getElementById("fCompra")

formularioPedidos.addEventListener("submit", (e) => {
    e.preventDefault()
    //console.log(e.target);
    let formulario = new FormData(e.target)

    let cliente = new Cliente(formulario.get("nombre"), formulario.get("apellido"), formulario.get("correoElec"), formulario.get("direccion"))
    pedidos.push(cliente)
    console.log(pedidos);
    localStorage.setItem("pedidos", JSON.stringify(pedidos))
    formularioPedidos.reset()
    carrito.length = 0
    actualizarCarrito()
})


