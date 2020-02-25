export default class Cita{
    /**
     * 
     * @param {number} fecha Fecha en que se realiso la cita 
     * @param {number} hora  en la que se cito para la consulta
     * @param {string} doctor  nombre del medico encargado
     * @param {string} paciente nombre del paciente malito 
     */
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