export class Product {
    public nombre: string;
    public imagen : string;
    public precio: number;


    constructor(name: string,image: string,  price: number) {
        this.imagen = image;
        this.nombre = name;
        this.precio = price;
    }
}