import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {ReceitaService} from "../services/receita.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit {

  receita: Array<any> = [];
  receitaDelete = null;
  message = null;
  @ViewChild(ModalComponent)
  modal:ModalComponent;

  constructor(private receitaService: ReceitaService, private messageService: MessageService) {
    this.message = this.messageService.message
  }

  ngOnInit() {

    this.receitaService.query()
        .subscribe(data => this.receita = data)
  }

  destroy(){
    this.receitaService.destroy(+this.receitaDelete.receita_id).subscribe(() =>{
      const index = this.receita.indexOf(this.receitaDelete);
      this.receita.splice(index, 1);
      this.modal.close();
    });
  }

  openModal(receita){
    this.receitaDelete = receita;
    this.modal.open()
  }


}
