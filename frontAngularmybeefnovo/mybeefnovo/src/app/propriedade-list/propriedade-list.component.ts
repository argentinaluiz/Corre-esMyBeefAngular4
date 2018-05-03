import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {PropriedadeService} from "../services/propriedade.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-propriedade-list',
  templateUrl: './propriedade-list.component.html',
  styleUrls: ['./propriedade-list.component.css']
})
export class PropriedadeListComponent implements OnInit {

  propriedades: Array<any> = [];
  propriedadeDelete = null;
  message = null;
  @ViewChild(ModalComponent)
  modal: ModalComponent;


  constructor(private propriedadeService: PropriedadeService, private messageService:MessageService) {
    this.message = this.messageService.message
  }

  ngOnInit() {

    this.propriedadeService.query()
        .subscribe(data => this.propriedades = data)

  }

  destroy(){
    this.propriedadeService.destroy(+this.propriedadeDelete.propriedade_id).subscribe(() => {
      const index = this.propriedades.indexOf(this.propriedadeDelete);
      this.propriedades.splice(index, 1);
      this.modal.close();
    });
  }

  openModal(propriedades){
    this.propriedadeDelete = propriedades;
    this.modal.open()
  }


}
