import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReceitaService} from "../services/receita.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-receita-save',
  templateUrl: './receita-save.component.html',
  styleUrls: ['./receita-save.component.css']
})
export class ReceitaSaveComponent implements OnInit {


  receita = {
    id: '',
    propriedade: '',
    data: '',
    quantidade: '',
    peso: '',
    preco: '',
  };


  constructor(private receitaService: ReceitaService, private router: Router, private route: ActivatedRoute,
              private messageService: MessageService) { }


  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params.hasOwnProperty('receita_id')){
        this.receitaService.find(+params['receita_id'])
            .subscribe(data => this.receita = data);
      }
    });
  }

  save(){
    this.receitaService.save(this.receita)
        .subscribe(() =>{
          this.messageService.message = 'Receita salva com sucesso'
            this.router.navigate(['/receitas'])
        });
  }


}
