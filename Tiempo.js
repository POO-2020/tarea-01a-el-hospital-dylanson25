
class Tiempo{
    constructor(){
        this.hora1 = new Date()
        this.hora = this.hora1.getHours()
        this.minutos = this.hora1.getMinutes()
        this.segundos = this.hora1.getSeconds()
        
        if (this.hora <=9) this.hora = "0" + this.hora
        if (this.inutos <=9) this.minutos = "0" + this.minutos
        if (this.segundos <=9) this.segundos = "0" + this.segundos
    }
    getFormato12(){
       return `${this.hora}:${this.minutos}:${this.segundos}`
    }
    getFormato24(){

    }
}
  let hora1 = new Tiempo();
  console.log(hora1.getFormato12())