import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApontamentoDeProducaoFormComponent } from './apontamento-de-producao-form/apontamento-de-producao-form.component'; 
import { ApontamentoDeProducaoListComponent } from './apontamento-de-producao-list/apontamento-de-producao-list.component'; 


const routes: Routes = [
  { path: '', component: ApontamentoDeProducaoListComponent}, 
  { path: ':id/new', component: ApontamentoDeProducaoFormComponent}, 
  { path: ':id/edit', component: ApontamentoDeProducaoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ApontamentoDeProducaoRoutingModule { }
