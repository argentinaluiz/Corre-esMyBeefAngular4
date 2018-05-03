import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoriaanimalService} from "../services/categoriaanimal.service";
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {MessageService} from "../services/message.service";


@Component({
  selector: 'app-categoriaanimal-list',
  templateUrl: './categoriaanimal-list.component.html',
  styleUrls: ['./categoriaanimal-list.component.css']
})
export class CategoriaanimalListComponent implements OnInit {


      categoria: Array<any> = [];
      categoriaDelete = null;
      message = null;
      @ViewChild(ModalComponent)
      modal: ModalComponent;


    Object = this.categoria;


  constructor(private categoriaService: CategoriaanimalService, private messageService:MessageService) {
        this.message = this.messageService.message
  }

  ngOnInit(){


      this.categoriaService.query()
      .subscribe(data => this.categoria = <any>data,
      error => this.message = <any> error);

  }


    // this.categoriaService.query()
    //.subscribe(data => this.categoria = <any>data,
    //error => this.message = <any> error);

    //this.categoriaService.query()
    //.subscribe(data => console.log(data));



    //this.categoriaService.query()
//.subscribe(data => this.categoria = data.categoria);



  /*
  destroy(id, index){
    if(confirm('Deseja excluir esse post?')){
      this.categoriaService.destroy(+id).subscribe(() => {
        this.categorias.splice(index, 1);
      });
    }
  }
*/

  destroy(){
      this.categoriaService.destroy(+this.categoriaDelete.id).subscribe(() => {
          const index = this.categoria.indexOf(this.categoriaDelete);
          this.categoria.splice(index, 1);
          this.modal.close();
      });
  }

  openModal(categoria_animal){
    this.categoriaDelete = categoria_animal;
    this.modal.open()
  }

}
