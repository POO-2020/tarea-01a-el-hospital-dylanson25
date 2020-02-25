import Nombre from "./Nombre.js"
import Tiempo from "./Tiempo.js"
import Fecha from "./Fecha.js"
import Paciente from "./Paciente.js"
import Doctor from "./Doctor.js"
import Cita from "./Cita.js"
class Hospital{
    constructor(doctores, citas){
        this.nombre = "Hospital grays memorial"
        this.direccion = "Av. siempre viva 321"
        this.doctores = new Array() 
        this.citas = new Array()
    }
    getRegistrarDoctor(){
        let d1 = new Doctor(new Nombre("karla", "Sierra", "Rodriguez"), "Otorrinolaringologo", "312-131-9198", 20165012)
        let d2 = new Doctor(new Nombre("dana", "Piña", "Rodriguez"), "Fisioterapeuta", "312-131-9198", 20165012)
        this.doctores.push(d1)
        this.doctores.push(d2)
    }
    getListarDoctores(){
        this.doctores.forEach((doctores, i) => {
        console.log(`${i + 1} -${this.doctores[i].getPerfilDoctor()}`)
        })
    }
    getRegistrarCita(){
        let d1 = new Cita(new Fecha(25, 11, 2000), new Tiempo(4, 3, "PM"), new Nombre("Alfonso", "Ramirez", "peralta"),new Nombre("juan", "perez", "gonzales"))
        let d2 = new Cita(new Fecha(25, 11, 2010), new Tiempo(4, 5, "PM"), new Nombre("justin", "Ramirez", "peralta"),new Nombre("juan", "mendozarez", "gonzales"))
        this.citas.push(d1)
        this.citas.push(d2)
    }
    getListarCitas(){
        this.citas.forEach((doctores, i) => {
        console.log(`${i + 1} -${this.citas[i].getPerfilCita()}`)
        })
    }
}

