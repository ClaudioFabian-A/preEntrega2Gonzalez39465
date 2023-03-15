




class Producto {
    constructor(id, nombre, descripcion, precio, ) {
        this.id = +id;
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.precio = parseFloat(precio);
        this.vendido = false;

    }


sumaIva() {
    this.precio = this.precio * 1.21;

}
vender() {
    this.vendido = true;
}
}
const producto1 = new Producto("1","botella", "", 2000);
const producto2 = new Producto("2", "taza", "", 800);
const producto3 = new Producto("3", "cuchara", "", 500);
const producto4 = new Producto("4", "servilleta", "", 600);
const producto5 = new Producto("5", "cuchillo", "", 1500);


producto1.sumaIva();
producto2.sumaIva();
producto1.vender();

let carrito [];

console.log(producto1.precio, producto1);

