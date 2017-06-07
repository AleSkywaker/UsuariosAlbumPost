
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import 'rxjs/add/operator/map';


import { Usuario } from '../../models/usuario';


@Component({
    selector: 'search',
    templateUrl: 'search.html',
    styleUrls: ['search.css'],
    providers: [UsuarioService]
})

export class SearchComponent {
    public datos: string;
    public usuario: Usuario;
    public usuarios: Array<any>;
    public searchStr: string;
    public titulo: string = "Buscar Post";

    public buscar:string;




    constructor(private _usuarioService: UsuarioService) {

        this.usuario = new Usuario(0, "Alex", "Garcia", "email@email.com", [], []);
    }


    buscarPost() {
        this._usuarioService.buscarPost(this.searchStr)
            .subscribe(res => {
                this.usuarios = res;
                console.log(res);
            })
        console.log(this.searchStr);
    }
    buscarPost2() {
        this._usuarioService.buscarPost2()
            .subscribe(
            data => {
                this.datos = JSON.stringify(data);

            },
            error => alert(error),
            () => console.log('finalizado')
            );
    }
    // console.log(this.searchStr);  

    ngOnInit() {
        this._usuarioService.buscarPost2()
            .subscribe(
            /*result => this.datos = JSON.stringify(result),*/
            result => {

                console.log(result);

                this.usuarios = result;
                console.log("usuarios " + this.usuarios);
            },
            error => alert(error),
            () => console.log('finalizado')
            );

    }
    
  /*  detallesUsuario(id: number) {
     this._usuarioService.usuario(id)
            .subscribe(res => {
                console.log(res.posts);
                   alert("res.posts");    
            }) 
    }*/





}




