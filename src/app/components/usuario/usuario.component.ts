import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Post } from '../../models/post';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'usuario',
    templateUrl: './usuario.html',
    styleUrls: ['./usuario.css']
})

export class UsuarioComponent {

    public usuario: Usuario;
    public post: Post;
    public postArray: Array<any>;
    


    constructor(
        private _usuarioService: UsuarioService,
        private _router: Router,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                console.log("este es el id : " + id)
                this._usuarioService.usuario(id)
                    .subscribe(usuario => {
                        this.usuario = usuario;
                    })
            })

    }

    posts: string;
    detallesUsuario(id: number) {

        this._usuarioService.usuario(id)
            .subscribe(res => {
                console.log(res);
                this.postArray = res.posts;
                console.log(this.posts);
                this.postArray.push(this.posts);
                console.log(res.posts);

                this._usuarioService.addPosts2(res)
                    .subscribe(
                    response => {
                        /*alert('Has enviado un post');*/
                        this._router.navigate(['/search']);

                    },
                    error => {
                        console.log(<any>error);
                    });
            })
    }
    prueba(id: number) {
        console.log(id);
    }
     
}