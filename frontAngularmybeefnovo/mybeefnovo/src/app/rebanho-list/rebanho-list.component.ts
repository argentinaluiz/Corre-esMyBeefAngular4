import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {RebanhoService} from "../services/rebanho.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-rebanho-list',
  templateUrl: './rebanho-list.component.html',
  styleUrls: ['./rebanho-list.component.css']
})
export class RebanhoListComponent implements OnInit {

  rebanho: Array<any> = [];
  rebanhoDelete = null;
  message = null;
  @ViewChild(ModalComponent)
  modal:ModalComponent

  constructor(private rebanhoService: RebanhoService, private messageService: MessageService) {
    this.message = this.messageService.message
  }

  ngOnInit() {
    this.rebanhoService.query().subscribe(data => this.rebanho = data)

  }

  destroy(){
    this.rebanhoService.destroy(+this.rebanhoDelete.rebanho_id).subscribe(() => {
      const index = this.rebanho.indexOf(this.rebanhoDelete);
      this.rebanho.splice(index, 1);
      this.modal.close();
    });
  }

  openModal(rebanho){
    this.rebanhoDelete = rebanho;
    this.modal.open()
  }


}
