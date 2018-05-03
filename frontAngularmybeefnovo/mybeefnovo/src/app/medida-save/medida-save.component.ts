import { Component, OnInit } from '@angular/core';
import {MedidaService} from "../services/medida.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-medida-save',
  templateUrl: './medida-save.component.html',
  styleUrls: ['./medida-save.component.css']
})
export class MedidaSaveComponent implements OnInit {


  medida = {
    id: '',
    tamanho: '',
    valor: '',
    ano: '',
    propriedade: '',
  };


  constructor(private medidaService: MedidaService, private router: Router,
              private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params.hasOwnProperty('medida_id')){
        this.medidaService.find(+params['medida_id']).subscribe(data => this.medida = data);
      }
    });

  }

  save(){
    this.medidaService.save(this.medida).subscribe(() =>{
      this.messageService.message = 'medida salva com sucesso'
        this.router.navigate(['/medida'])
    });
  }

}
