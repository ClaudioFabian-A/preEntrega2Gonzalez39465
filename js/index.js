




class Producto {
    constructor(id, nombre, descripcion, precio ) {
        this.id = +id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
       

    }


sumaIva() {
    this.precio = this.precio * 1.21;

}
vender() {
    this.vendido = true;
}
}
const producto1 = new Producto("1", "botella", "", 2000);
const producto2 = new Producto("2", "taza", "", 800);
const producto3 = new Producto("3", "cuchara", "", 500);
const producto4 = new Producto("4", "servilleta", "", 600);
const producto5 = new Producto("5", "cuchillo", "", 1500);



const datoInicial = prompt( 'coloque 1. 2. 3. 4. 5.');

const datoProducto = {

    '1' : producto1,
    '2' : producto2,
    '3' : producto3,
    '4' : producto4,
    '5' : producto5,

    
}

const nada = datoProducto[datoInicial] || datoInicial;



//console.log(nada.nombre);
console.log(nada.nombre);


//console.log(nada.nombre);