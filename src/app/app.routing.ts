import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


//Components
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const appRoutes : Routes = [
    {path: '', component: SearchComponent},
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'usuario/:id', component: UsuarioComponent},
    {path: '**', component: ErrorComponent}

];
export const appRoutingProviders:any[] =[];
export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes);
