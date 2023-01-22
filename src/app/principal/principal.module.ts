import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { Reto18Component } from './reto18/reto18.component';
import { Asincronica18Component } from './asincronica18/asincronica18.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    Reto18Component,
    Asincronica18Component,
    BusquedaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    UsuariosComponent,
    Reto18Component,
    Asincronica18Component,
    BusquedaComponent
  ]
})
export class PrincipalModule { }
