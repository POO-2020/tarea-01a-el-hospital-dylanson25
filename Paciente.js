export default class Paciente{
    constructor(nombre, fecha, numero){
        this.fecha = fecha
        this.nombre = nombre
        this.numero = numero
    }
    getPerfil(){
        return`${this.nombre.getNombreCompleto()}, ${this.numero}, ${this.fecha.getFecha3()}`

    }
}
/*let perfil = new Paciente(new Nombre("karla", "Sierra", "Rodriguez"), new Fecha(25, 11, 2000), "312-131-9198")
console.log(perfil.getPerfil())*/
