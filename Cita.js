export default class Cita{
    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha
        this.hora = hora
        this.doctor = doctor
        this.paciente = paciente  
    }
    getPerfilCita(){
        return`${this.fecha.getFecha3()}, ${this.hora.getFormato24()}, ${"Dr."+this.doctor.apellidoP}, ${this.paciente.getNombreCompleto()}`
    }
}
/*let perfil = new Cita(new Fecha(25, 11, 2000), new Tiempo(4, 3, "PM"), new Nombre("Alfonso", "Ramirez", "peralta"),new Nombre("juan", "perez", "gonzales"))
console.log(perfil.getPerfilCita())*/