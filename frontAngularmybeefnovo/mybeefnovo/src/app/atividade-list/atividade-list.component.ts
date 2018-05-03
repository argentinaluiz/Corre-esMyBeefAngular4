import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {AtividadeService} from "../services/atividade.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-atividade-list',
  templateUrl: './atividade-list.component.html',
  styleUrls: ['./atividade-list.component.css']
})
export class AtividadeListComponent implements OnInit {



  atividades: Array<any> = [];
  atividadeDelete = null;
  message = null;
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  constructor(private atividadeService: AtividadeService, private messageService: MessageService) {
      this.message = this.messageService.message
  }

  ngOnInit() {

    this.atividadeService.query().subscribe(data => this.atividades = data)
  }

  destroy(){
    this.atividadeService.destroy(+this.atividadeDelete.atividade_id).subscribe(() => {
      const index = this.atividades.indexOf(this.atividadeDelete);
      this.atividades.splice(index, 1);
      this.modal.close();
    });
  }

 openModal(atividades){
    this.atividadeDelete = atividades;
    this.modal.open()
 }


}
