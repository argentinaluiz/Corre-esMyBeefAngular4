import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {UsuarioService} from "../services/usuario.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuario: Array<any> = [];
  usuarioDelete = null;
  message = null;
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  constructor(private usuarioService: UsuarioService, private messageService: MessageService) {
    this.message = this.messageService.message
  }

  ngOnInit() {
    this.usuarioService.query()
        .subscribe(data => this.usuario = data)

  }

  destroy(){
    this.usuarioService.destroy(+this.usuarioDelete.usuario_id).subscribe(() =>{
      const index = this.usuario.indexOf(this.usuarioDelete);
      this.usuario.splice(index, 1);
      this.modal.close();
    });
  }
  openModal(usuario){
    this.usuarioDelete = usuario;
    this.modal.open()
  }

}
