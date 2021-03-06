export default class Nombre{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoP Apellido materno
     * @param {string} apellidoM Apellido materno
     */
    constructor(nombre, apellidoP, apellidoM){
        this.nombre = nombre.toUpperCase() 
        this.apellidoM = apellidoM.toUpperCase() 
        this.apellidoP = apellidoP.toUpperCase() 
    }
    getNombreCompleto(){
        return `${this.nombre} ${this.apellidoP} ${this.apellidoM}`
    }
    getApellidoNombre(){
        return `${this.apellidoP} ${this.apellidoM} ${this.nombre}`
    }
    getIniciales(){
        return `${this.nombre[0]}${this.apellidoP[0]}${this.apellidoM[0]}`
    }
}
