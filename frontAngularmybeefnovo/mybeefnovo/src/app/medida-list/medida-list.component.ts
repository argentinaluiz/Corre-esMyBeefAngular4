import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {MedidaService} from "../services/medida.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-medida-list',
  templateUrl: './medida-list.component.html',
  styleUrls: ['./medida-list.component.css']
})
export class MedidaListComponent implements OnInit {

  medidas: Array<any> = [];
  medidaDelete = null;
  message = null;
  @ViewChild(ModalComponent)
  modal:ModalComponent;

  constructor(private medidaService: MedidaService, private messageService: MessageService) {
    this.message = this.messageService.message
  }

  ngOnInit() {

    this.medidaService.query()
        .subscribe(data => this.medidas = data)
  }


  destroy(){
    this.medidaService.destroy(+this.medidaDelete.medida_id).subscribe(() => {
      const  index = this.medidas.indexOf(this.medidaDelete);
      this.medidas.splice(index, 1);
    });
  }

  openModal(medidas){
    this.medidaDelete = medidas;
    this.modal.open()
  }



}
