import { Component, OnInit } from '@angular/core';
import {PropriedadeService} from "../services/propriedade.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-propriedade-save',
  templateUrl: './propriedade-save.component.html',
  styleUrls: ['./propriedade-save.component.css']
})
export class PropriedadeSaveComponent implements OnInit {

  propriedade = {
    id: '',
    usuario: '',
    cidade: '',
    pais: '',
    data: '',
    nome: '',
    nro_car: '',
    tamanho: '',
    localidade: '',
  };


  constructor(private propriedadeService: PropriedadeService, private router: Router,
              private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit() {

    this.route.params.subscribe(params =>{
      if(params.hasOwnProperty('propriedade_id')) {
          this.propriedadeService.find(+params['propriedade_id'])
              .subscribe(data => this.propriedade = data);
      }
      });
    }

    save(){
      this.propriedadeService.save(this.propriedade).subscribe(() => {
        this.messageService.message = 'Propriedade salva com sucesso'
          this.router.navigate(['/propriedade'])
      });
  }

}
