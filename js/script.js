let productos = [
    { nombre: 'Piñata', precio: 3000 },
    { nombre: 'Guirnalda', precio: 2500 },
    { nombre: 'Souvenir', precio: 2000 },
]

let carrito = []

alert('BIENVENIDO A ALEGRARTE')
let compra = confirm('DESEA REALIZAR UNA COMPRA?')

if (compra === true) {
    alert('A CONTINUACION NUESTROS PRODUCTOS')
    let nuestrosProductos = productos.map((producto) => producto.nombre + ' ' + ' $' + producto.precio + ' ')
    alert(nuestrosProductos.join(' - '))
} else if (compra === 'no') {
    alert('Muchas Gracias')
}

while (compra === true) {
    let producto = prompt('INGRESE EL NOMBRE DEL PRODUCTO QUE DESEA')
    let precio = 0
    producto = producto.toLowerCase()

    if (producto === 'piñata' || producto === 'guirnalda' || producto === 'souvenir') {
        switch (producto) {
            case 'piñata':
                precio = 3000
                break;
            case 'guirnalda':
                precio = 2500
                break;
            case 'souvenir':
                precio = 2000
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt('¿Cuantas unidades quiere llevar?'))
        carrito.push({ producto, unidades, precio })
    } else { alert('No tenemos ese producto') }

    compra = confirm('DESEA SEGUIR COMPRANDO?')

    while (compra === false) {
        alert('¡Muchas Gracias por la compra!')
        carrito.forEach((carritoFinal) => { console.log('producto: ' + carritoFinal.producto + '|| unidades: ' + carritoFinal.unidades + '|| TOTAL A PAGAR: ' + carritoFinal.unidades * carritoFinal.precio) })
        break;
    }
}

let total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log('El total a pagar es: $' + total)
