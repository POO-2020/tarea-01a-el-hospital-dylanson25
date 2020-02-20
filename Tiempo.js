
class Tiempo{
    constructor(){
        this.hora1 = new Date()
        this.hora = this.hora1.getHours()
        this.minutos = this.hora1.getMinutes()
        this.periodo
        
        if(this.hora < 12) this.periodo = "AM" 
        else if(this.hora >= 12) this.periodo = "PM"
        if (this.hora <= 9) this.hora = "0" + this.hora
        if (this.minutos <= 9) this.minutos = "0" + this.minutos
        
    }
    getFormato12(){
        if(this.hora > 12){
            this.hora = this.hora1.getHours() - 12
            if (this.hora <= 9) this.hora = "0" + this.hora
        }
       return `${this.hora}:${this.minutos} ${this.periodo}`
    }
    getFormato24(){
        return `${this.hora}:${this.minutos} ${this.periodo}`
    }
}
  let hora1 = new Tiempo()
  let hora2 = new Tiempo()
  console.log(hora1.getFormato12())
  console.log(hora2.getFormato24())