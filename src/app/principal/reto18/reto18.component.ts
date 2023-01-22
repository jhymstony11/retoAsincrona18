import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-reto18',
  templateUrl: './reto18.component.html',
  styleUrls: ['./reto18.component.css']
})
export class Reto18Component {
//Consumir un servicio --> Metodo getAll del servicio
cadena = "";
listado = new  Array();

//Para hacer el servicio instanciarlo en el cosntructor

constructor(private servicio: UserservicesService){}

ngOnInit(){
  this.servicio.getAll().subscribe({
   next: (userAll: string) => {
    this.cadena = userAll;
    for(let n=0; n < userAll.length; n++){
      this.listado.push(userAll[n])
    }
   },
   error: (er) => { 
    console.error(er)
  },
   complete: () => console.info("El proceso se completo!!"),

  });
}
}
