


//, vendido

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
    // vender() {
    //     this.vendido = true;
    // }
}
const producto1 = new Producto("1", "botella", "", 2000);
const producto2 = new Producto("2", "taza", "", 800);
const producto3 = new Producto("3", "cuchara", "", 500);
const producto4 = new Producto("4", "servilleta", "", 600);
const producto5 = new Producto("5", "cuchillo", "", 1500);



//const datoInicial = prompt('Bienvenido a Marpolo.coloque 1.botella 2.taza 3.cuchara 4.servilleta 5.cuchillo');

    const datoProducto = {

        '1': producto1,
        '2': producto2,
        '3': producto3,
        '4': producto4,
        '5': producto5,


    }

console.log(producto1);

    
const pago = prompt('seleccione el medio de pago')

class MedioDePago {
    constructor (id, metodo, cuotas, monto, tasa ){

        this.id = id;
        this.metodo = metodo;
        this.cuotas = cuotas;
        this.monto = monto;
        this.tasa = tasa
    }
    
}
const efectivo = new MedioDePago ("00", 'efectivo', 0, '03', 1.0 );
const cuota001 = new MedioDePago ("01", 'efectivo', 0, '03', 1.1 );
const cuota002 = new MedioDePago ("02", 'efectivo', 0, '03', 1.2 );
const cuota003 = new MedioDePago ("03", 'efectivo', 0, '03', 1.3 );
const cuota006 = new MedioDePago ("04", 'efectivo', 0, '03', 1.6 );
const cuota012 = new MedioDePago ("05", 'efectivo', 0, '03', 2.0 );


const datoMedioDePago = {

    '00': efectivo,
    '01': cuota001,
    '02': cuota002,
    '03': cuota003,
    '04': cuota006,
    '05': cuota012,

}
console.log(efectivo);
