import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriaanimalListComponent } from './categoriaanimal-list/categoriaanimal-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CategoriaanimalService} from "./services/categoriaanimal.service";
import { CategoriaanimalSaveComponent } from './categoriaanimal-save/categoriaanimal-save.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import {FormsModule} from "@angular/forms";
import { GlyphComponent } from './bootstrap/glyph/glyph.component';
import { ModalComponent } from './bootstrap/modal/modal.component';
import { AlertComponent } from './bootstrap/alert/alert.component';
import {MessageService} from "./services/message.service";
import { AtividadeListComponent } from './atividade-list/atividade-list.component';
import { AtividadeSaveComponent } from './atividade-save/atividade-save.component';
import {AtividadeService} from "./services/atividade.service";
import { CustoSaveComponent } from './custo-save/custo-save.component';
import { CustoListComponent } from './custo-list/custo-list.component';
import {CustoService} from "./services/custo.service";
import { MedidaSaveComponent } from './medida-save/medida-save.component';
import { MedidaListComponent } from './medida-list/medida-list.component';
import {MedidaService} from "./services/medida.service";
import { PropriedadeSaveComponent } from './propriedade-save/propriedade-save.component';
import { PropriedadeListComponent } from './propriedade-list/propriedade-list.component';
import {PropriedadeService} from "./services/propriedade.service";
import { RebanhoSaveComponent } from './rebanho-save/rebanho-save.component';
import { RebanhoListComponent } from './rebanho-list/rebanho-list.component';
import {RebanhoService} from "./services/rebanho.service";
import { ReceitaSaveComponent } from './receita-save/receita-save.component';
import { ReceitaListComponent } from './receita-list/receita-list.component';
import {ReceitaService} from "./services/receita.service";
import { UsuarioSaveComponent } from './usuario-save/usuario-save.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import {UsuarioService} from "./services/usuario.service";



const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: CategoriaanimalListComponent},
    {path: 'categorias', component: CategoriaanimalListComponent},
    {path: 'categorias/create', component: CategoriaanimalSaveComponent},
    {path: 'categorias/:id/edit', component: CategoriaanimalSaveComponent},

    {path: '', pathMatch: 'full', component: AtividadeListComponent},
    {path: 'atividade', component: AtividadeListComponent},
    {path: 'atividade/create', component: AtividadeSaveComponent},
    {path: 'atividade/:id/edit', component: AtividadeSaveComponent},

    {path: '', pathMatch: 'full', component: CustoListComponent},
    {path: 'custo', component: CustoListComponent},
    {path: 'custo/create', component: CustoSaveComponent},
    {path: 'custo/:id/edit', component: CustoSaveComponent},

    {path: '', pathMatch: 'full', component: MedidaListComponent},
    {path: 'medida', component: MedidaListComponent},
    {path: 'medida/create', component: MedidaSaveComponent},
    {path: 'medida/:id/edit', component: MedidaSaveComponent},

    {path: '', pathMatch: 'full', component: PropriedadeListComponent},
    {path: 'propriedade', component: PropriedadeListComponent},
    {path: 'propriedade/create', component: PropriedadeSaveComponent},
    {path: 'propriedade/:id/edit', component: PropriedadeSaveComponent},

    {path: '', pathMatch: 'full', component: RebanhoListComponent},
    {path: 'rebanho', component: RebanhoListComponent},
    {path: 'rebanho/create', component: RebanhoSaveComponent},
    {path: 'rebanho/:id/edit', component: RebanhoSaveComponent},


    {path: '', pathMatch: 'full', component: ReceitaListComponent},
    {path: 'receita', component: ReceitaListComponent},
    {path: 'receita/create', component: ReceitaSaveComponent},
    {path: 'receita/:id/edit', component: ReceitaSaveComponent},

    {path: '', pathMatch: 'full', component: UsuarioListComponent},
    {path: 'usuario', component: UsuarioListComponent},
    {path: 'usuario/create', component: UsuarioSaveComponent,},
    {path: 'usuario/:id/edit', component: UsuarioSaveComponent,},

]


@NgModule({
  declarations: [
    AppComponent,
    CategoriaanimalListComponent,
    CategoriaanimalSaveComponent,
    AtividadeListComponent,
    AtividadeSaveComponent,
    CustoListComponent,
    CustoSaveComponent,
    ButtonComponent,
    GlyphComponent,
    ModalComponent,
    AlertComponent,
    AtividadeListComponent,
    AtividadeSaveComponent,
    CustoSaveComponent,
    CustoListComponent,
    MedidaSaveComponent,
    MedidaListComponent,
    PropriedadeSaveComponent,
    PropriedadeListComponent,
    RebanhoSaveComponent,
    RebanhoListComponent,
    ReceitaSaveComponent,
    ReceitaListComponent,
    UsuarioSaveComponent,
    UsuarioListComponent,
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      FormsModule
  ],
  providers: [CategoriaanimalService, MedidaService, ReceitaService, UsuarioService, PropriedadeService, RebanhoService, CustoService, AtividadeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
