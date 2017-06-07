import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


//Rutas
import {routing, appRoutingProviders} from './app.routing'


//Componentes
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

//ultimo servicio
import { UsuarioService } from './services/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    SearchComponent,
    UsuarioComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
