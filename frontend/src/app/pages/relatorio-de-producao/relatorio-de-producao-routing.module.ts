import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioDeProducaoFormComponent } from './relatorio-de-producao-form/relatorio-de-producao-form.component'; 
import { RelatorioDeProducaoListComponent } from './relatorio-de-producao-list/relatorio-de-producao-list.component'; 


const routes: Routes = [
  { path: '', component: RelatorioDeProducaoListComponent}, 
  { path: 'new', component: RelatorioDeProducaoFormComponent}, 
  { path: ':id/edit', component: RelatorioDeProducaoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RelatorioDeProducaoRoutingModule { }
