import { Component, OnInit } from '@angular/core';
import {CategoriaanimalService} from "../services/categoriaanimal.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../services/message.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-categoriaanimal-save',
  templateUrl: './categoriaanimal-save.component.html',
  styleUrls: ['./categoriaanimal-save.component.css']
})
export class CategoriaanimalSaveComponent implements OnInit {

  categoriaanimal = {
      id: '',
    nome: '',
  };


  constructor(private categoriaanimalService: CategoriaanimalService, private router: Router,
              private route: ActivatedRoute,
              private messageService:MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      if(params.hasOwnProperty('id')){
        this.categoriaanimalService.find(+params['id'])
            .subscribe(data => this.categoriaanimal = data);
      }
    });
  }

  save(){
      this.categoriaanimalService.save(this.categoriaanimal)
          .subscribe(() =>{
              this.messageService.message = 'Categoria Salva com sucesso'
              this.router.navigate(['/categorias'])
          });
  }



}
