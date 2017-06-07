import { Injectable } from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';



import {Usuario} from '../models/usuario';




@Injectable()

export class UsuarioService {

    private buscarUrl: string;
    private usuarioUrl:string;
    

    constructor(private _http:Http){

    }

    buscarPost(str:string){

        this.buscarUrl = 'http://localhost:3000/usuarios?q='+str;
        return this._http.get(this.buscarUrl)
        .map(res => res.json());
    }
    buscarPost2(){  
        return this._http.get('http://localhost:3000/usuarios')
        .map(res => res.json());
    }

   usuario(id:number){
        return this._http.get('http://localhost:3000/usuarios/'+id)
        .map(res => res.json());

    }
 
  addPosts(usuario: Usuario){
		let json = JSON.stringify(usuario);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post('http://localhost:3000/usuarios/', params, {headers: headers})
						 .map(res => res.json());
	}


  addPosts2(usuario:Usuario){

       var id = usuario.id;
		
        console.log('bojeto desde servicio'+usuario)
		let headers = new Headers({'Content-Type':'application/json'});
		return this._http.put('http://localhost:3000/usuarios/'+id,   usuario, {headers: headers})
						 .map(res => res);
	}


    
  }