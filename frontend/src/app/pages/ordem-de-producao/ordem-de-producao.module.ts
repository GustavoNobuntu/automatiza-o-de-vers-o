import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdemDeProducaoRoutingModule } from './ordem-de-producao-routing.module';
import { OrdemDeProducaoFormComponent } from './ordem-de-producao-form/ordem-de-producao-form.component';
import { OrdemDeProducaoListComponent } from './ordem-de-producao-list/ordem-de-producao-list.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    OrdemDeProducaoFormComponent,
    OrdemDeProducaoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    OrdemDeProducaoRoutingModule
  ]
})
export class OrdemDeProducaoModule { }
