import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApontamentoDeProducaoRoutingModule } from './apontamento-de-producao-routing.module';
import { ApontamentoDeProducaoFormComponent } from './apontamento-de-producao-form/apontamento-de-producao-form.component';
import { ApontamentoDeProducaoListComponent } from './apontamento-de-producao-list/apontamento-de-producao-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ApontamentoDeProducaoFormComponent,
    ApontamentoDeProducaoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    ApontamentoDeProducaoRoutingModule
  ]
})
export class ApontamentoDeProducaoModule { }
