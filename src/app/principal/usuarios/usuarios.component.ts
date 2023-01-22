import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

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
