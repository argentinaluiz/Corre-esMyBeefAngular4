import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-usuario-save',
  templateUrl: './usuario-save.component.html',
  styleUrls: ['./usuario-save.component.css']
})
export class UsuarioSaveComponent implements OnInit {

  usuario = {
    id: '',
    cidade: '',
    pais: '',
    login: '',
    email: '',
    senha: '',
    perfil: '',
    nome: '',
    localidade: '',
    telefone: '',
  };

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute,
              private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params.hasOwnProperty('usuario_id')){
        this.usuarioService.find(+params['usuario_id']).subscribe(data => this.usuario = data);
      }
    });
  }

  save(){
     this.usuarioService.save(this.usuario)
         .subscribe(() =>{
           this.messageService.message = 'Usuario salvo com sucesso'
             this.router.navigate(['/usuario'])
         });
  }

}
