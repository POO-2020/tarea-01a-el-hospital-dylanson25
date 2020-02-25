export default class Doctor{
    /**
     * 
     * @param {string} nombre nombre del doctor
     * @param {string} especialidad area medica en la que labora
     * @param {number} telefono numero de contacto del medico
     * @param {number} cedula numero de identificacion medica 
     */
    constructor(nombre, especialidad, telefono, cedula){
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
        this.cedula = cedula
    }
    getPerfilDoctor(){
        return`${this.cedula}\n${this.especialidad}\n${this.nombre.getNombreCompleto()}\n${this.telefono}`
    }
}
/*let perfil = new Doctor(new Nombre("karla", "Sierra", "Rodriguez"), "Otorrinolaringologo", "312-131-9198", 20165012)
console.log(perfil.getPerfilDoctor())*/