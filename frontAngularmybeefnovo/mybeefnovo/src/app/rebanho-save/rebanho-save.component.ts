import { Component, OnInit } from '@angular/core';
import {RebanhoService} from "../services/rebanho.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-rebanho-save',
  templateUrl: './rebanho-save.component.html',
  styleUrls: ['./rebanho-save.component.css']
})
export class RebanhoSaveComponent implements OnInit {

  rebanho = {
    id: '',
    ano: '',
    propriedade: '',
    categoriaanimal: '',
    qtdestocada: '',
    pesoestocado: '',
    qtdvendida: '',
    pesovendido: '',
  };



  constructor(private rebanhoService: RebanhoService, private router: Router,
              private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params.hasOwnProperty('rebanho_id')){
        this.rebanhoService.find(+params['rebanho_id'])
            .subscribe(data => this.rebanho = data);
      }
    });
  }

  save(){
    this.rebanhoService.save(this.rebanho).subscribe(() =>{
      this.messageService.message = 'Rebanho salvo com sucesso'
        this.router.navigate(['/rebanho'])
    });
  }

}
