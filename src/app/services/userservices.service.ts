import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  //Definir la URL de la API
  urlBase = environment.apiURL + 'users/'


  //Crear una instancia de HttpClient
  constructor(private http: HttpClient) { }

  // Metodo para consumi la Api users
  getAll(): Observable<string>{
    const url = this.urlBase;
    return this.http.get<string>(url);
  }
//Definir la URL de la API(La base URL estara en environments.ts)

apiUser = environment.apiURL + 'users/'; 
  
apiRegis = environment.api2URL + 'registerUser/';


//Metodo GET para obtener datos de la API users

getUsersAll():Observable<Users[]>{
  return this.http.get<Users[]>(this.apiUser);

}
getRegisAll():Observable<Users[]>{
  return this.http.get<Users[]>(this.apiRegis);

}

getUserId(userId: string): Observable<Users> {
  const url = this.apiUser + userId;
  return this.http.get<Users>(url);
  }

 // Metodo POSt para enviar datos a la API users

postUser(usuario: Users): Observable<Users>{
return this.http.post<Users>(this.apiUser, usuario);
}

//Metodo GET para obtener datos de la API Albums

getRegis():Observable<Users[]>{
  return this.http.get<Users[]>(this.apiRegis);

}

/*// Metodo GET para el Interceptor
getUsersAllInterceptor():Observable<any>{
return this.http.get(this.apiUser, {observe: 'response'});
}*/

// Metodo GET para el Interceptor
getUsersAllInterceptor():Observable<any>{
  return this.http.get(this.apiUser, {observe: 'response'});
}

  
}
