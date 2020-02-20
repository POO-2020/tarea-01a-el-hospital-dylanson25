class Nombre{
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
let paciente = new Nombre("juan", "perez", "gonzales")
  console.log(paciente.getNombreCompleto())
  console.log(paciente.getApellidoNombre())
  console.log(paciente.getIniciales())