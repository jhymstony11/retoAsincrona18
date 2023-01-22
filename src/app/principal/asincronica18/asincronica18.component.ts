import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';


@Component({
  selector: 'app-asincronica18',
  templateUrl: './asincronica18.component.html',
  styleUrls: ['./asincronica18.component.css']
})
export class Asincronica18Component {
  
 // Creando el objeto que se enviara
  datos: Users = {
    email: '', password: '',
    valid: undefined,
    push: function (arg0: { Nombres: any; Email: any; }): unknown {
      throw new Error('Function not implemented.');
    },
    id: '',
    name: '',
    username: ''
  }
  
  // instancia servicios
  constructor(private servicio: UserservicesService){}

  // Metodo post
  onSubmit(){
    this.servicio.postUser(this.datos).subscribe(
      (usuario: Users)=>console.log(usuario)
    )
  }
}
