export default class Coche {
    public marca:string;
    public modelo:string;
    public velocidad:number;
    public aceleracion:number;

    constructor(marca:string,modelo:string,velocidad:number,aceleracion:number){
        this.marca=marca;
        this.modelo=modelo;
        this.velocidad=velocidad;
        this.aceleracion=aceleracion;
    }
}