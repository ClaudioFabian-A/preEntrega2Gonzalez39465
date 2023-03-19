class Producto {
    constructor(id, nombre, descripcion, precio) {
        this.id = +id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
        // this.vendido = false;
        this.log = function () { console.log(this.id) }



    }
    sumaIva() {
        this.precio = this.precio * 1.21;

    }
}
const productos = [
    new Producto(1, "botella", "", 2000),
    new Producto(2, "taza", "", 800),
    new Producto(3, "cuchara", "", 500),
    new Producto(4, "servilleta", "", 600),
    new Producto(5, "cuchillo", "", 1500),
]
let seleccioneProducto = parseInt(prompt(
    `Bienvenido a Marpolo coloque el numero del producto que desea comprar
    1.botella, con un valor de $2000.
    2.taza con un valor de $800
    3.cuchara con un valor de $500
    4.servilleta con un valor de $600
    5.cuchillo con un valor de $1500`
))
let eligioProducto = false
let productoElegido
while (eligioProducto === false) {
    productoElegido = productos.find((productoElegido) => productoElegido.id === seleccioneProducto)
    if (!productoElegido) {
        seleccioneProducto = parseInt(
            prompt(
`Bienvenido a Marpolo coloque CORRECTAMENTE el numero del producto que desea comprar
    1.botella, con un valor de $2000.
    2.taza con un valor de $800
    3.cuchara con un valor de $500
    4.servilleta con un valor de $600
    5.cuchillo con un valor de $1500`
            )
        )
    } else {
        eligioProducto = true;
    }
}
class MedioDePago {
    constructor(id, metodo, cuotas, monto, tasa,) {

        this.id = id,
            this.metodo = metodo,
            this.cuotas = cuotas,
            this.monto = monto,
            this.tasa = tasa
    }
}
const medioDePagoElegido = [
    new MedioDePago(00, 'efectivo', 0,`${productoElegido.precio}`, 1.0),
    new MedioDePago(01, 'tarjeta', 1, `${productoElegido.precio}`, 1.1),
    new MedioDePago(02, 'tarjeta', 2, `${productoElegido.precio}`, 1.2),
    new MedioDePago(03, 'tarjeta', 3, `${productoElegido.precio}`, 1.3),
    new MedioDePago(04, 'tarjeta', 6, `${productoElegido.precio}`, 1.6),
    new MedioDePago(05, 'tarjeta', 12, `${productoElegido.precio}`, 2.0)
]
let pago = parseInt(
    prompt(`El monto del producto seleccionado es de ${productoElegido.precio},
    lo puede abonar de la sigiente manera:
    (seleccione el numero correspondiente a el medio de pago que corresponda)
    00 - Efectivo
    01 - Tarjeta en 1 pago con un 10% de interes.
    02 - Tarjeta en 2 pagos con un 20% de interes.
    03 - Tarjeta en 3 pagos con un 30% de interes.
    04 - Tarjeta en 6 pagos con un 60% de interes.
    05 - Tarjeta en 12 pagos con un 20% de interes.`)
)
let eligioMedioDePago = false
let pagos
while (eligioMedioDePago === false) {
    pagos = medioDePagoElegido.find((pagos) => pagos.id === pago)
    if (!pagos) {

        pago = parseInt(
            prompt('seleccione el medio de pago 01 02 03 04 05')
        )
    } else {
        eligioMedioDePago = true
    }
}
const mult = +`${productoElegido.precio}` * +`${pagos.tasa}`;
console.log(productoElegido.precio, pagos.tasa, mult);
alert(`El producto seleccionado es ${productoElegido.nombre},
      con un valor de ${productoElegido.precio},
      el cual lo abona en ${pagos.cuotas} cuotas,
      dando un total consolidado de ${mult}`);
      alert(`muchas gracias por su compra`)