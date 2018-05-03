import { Component, OnInit } from '@angular/core';
import {AtividadeService} from "../services/atividade.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-atividade-save',
  templateUrl: './atividade-save.component.html',
  styleUrls: ['./atividade-save.component.css']
})
export class AtividadeSaveComponent implements OnInit {


  atividade = {
      id: '',
      descricao: '',
      propriedade: '',
};



  constructor(private atividadeService: AtividadeService, private router: Router,
              private route: ActivatedRoute,
              private messaService: MessageService) { }


  ngOnInit() {

    this.route.params.subscribe(params =>{
      if(params.hasOwnProperty('atividade_id')){
        this.atividadeService.find(+params['atividade_id']).subscribe(data => this.atividade = data);

      }
    });

  }

  save(){
    this.atividadeService.save(this.atividade).subscribe(() =>{
      this.messaService.message = 'Atividade salva com sucesso'
        this.router.navigate(['/atividade'])
    });

  }

}
