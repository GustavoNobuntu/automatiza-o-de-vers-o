import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component'; 
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component'; 


const routes: Routes = [
  { path: '', component: FuncionarioListComponent}, 
  { path: 'new', component: FuncionarioFormComponent}, 
  { path: ':id/edit', component: FuncionarioFormComponent}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
