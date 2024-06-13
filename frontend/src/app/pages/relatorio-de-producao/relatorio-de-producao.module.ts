import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioDeProducaoRoutingModule } from './relatorio-de-producao-routing.module';
import { RelatorioDeProducaoFormComponent } from './relatorio-de-producao-form/relatorio-de-producao-form.component';
import { RelatorioDeProducaoListComponent } from './relatorio-de-producao-list/relatorio-de-producao-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RelatorioDeProducaoFormComponent,
    RelatorioDeProducaoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RelatorioDeProducaoRoutingModule
  ]
})
export class RelatorioDeProducaoModule { }
