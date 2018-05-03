import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {CustoService} from "../services/custo.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-custo-list',
  templateUrl: './custo-list.component.html',
  styleUrls: ['./custo-list.component.css']
})
export class CustoListComponent implements OnInit {


  custo: Array<any> = [];
  custoDelete = null;
  message = null;
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  constructor(private custoService: CustoService, private messageService: MessageService) {
    this.message = this.messageService.message

  }

  ngOnInit() {
    this.custoService.query()
        .subscribe(data => this.custo = data)
  }

  destroy(){
    this.custoService.destroy(+this.custoDelete.custo).subscribe(() =>{
      const index = this.custo.indexOf(this.custoDelete);
      this.custo.splice(index, 1);
      this.modal.close();
    });
  }

  openModal(custo){
    this.custoDelete = custo;
    this.modal.open()
  }

}
