import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdemDeProducaoFormComponent } from './ordem-de-producao-form/ordem-de-producao-form.component'; 
import { OrdemDeProducaoListComponent } from './ordem-de-producao-list/ordem-de-producao-list.component'; 


const routes: Routes = [
  { path: '', component: OrdemDeProducaoListComponent}, 
  { path: 'new', component: OrdemDeProducaoFormComponent}, 
  { path: ':id/edit', component: OrdemDeProducaoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class OrdemDeProducaoRoutingModule { }
