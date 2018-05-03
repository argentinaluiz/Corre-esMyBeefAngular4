import { Component, OnInit } from '@angular/core';
import {CustoService} from "../services/custo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-custo-save',
  templateUrl: './custo-save.component.html',
  styleUrls: ['./custo-save.component.css']
})
export class CustoSaveComponent implements OnInit {


  custo = {
    id: '',
    propriedade_id: '',
    categoriacusto: '',
    data: '',
    valor: '',

  };

  constructor(private custoService: CustoService, private router: Router, private route: ActivatedRoute,
              private messageService: MessageService) { }

  ngOnInit() {

    this.route.params.subscribe(params =>{
      if(params.hasOwnProperty('custo_id')){
        this.custoService.find(+params['custo_id'])
            .subscribe(data => this.custo = data);
      }
    });

  }

  save(){
    this.custoService.save(this.custo)
        .subscribe(() =>{
          this.messageService.message = 'Custo salvo com sucesso'
            this.router.navigate(['/custo'])
        });
  }


}
