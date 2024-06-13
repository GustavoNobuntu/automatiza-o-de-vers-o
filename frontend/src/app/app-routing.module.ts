import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ path: '', redirectTo: 'funcionario', pathMatch: 'full' },
	{ path: 'funcionario', loadChildren: () => import('./pages/funcionario/funcionario.module' ).then(m => m.FuncionarioModule) },

	{ path: 'item', loadChildren: () => import('./pages/item/item.module' ).then(m => m.ItemModule) },

	{ path: 'apontamentoDeProducao', loadChildren: () => import('./pages/apontamento-de-producao/apontamento-de-producao.module' ).then(m => m.ApontamentoDeProducaoModule) },

	{ path: 'ordemDeProducao', loadChildren: () => import('./pages/ordem-de-producao/ordem-de-producao.module' ).then(m => m.OrdemDeProducaoModule) },

	{ path: 'relatorioDeProducao', loadChildren: () => import('./pages/relatorio-de-producao/relatorio-de-producao.module' ).then(m => m.RelatorioDeProducaoModule) },


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
