import { Component, OnInit } from '@angular/core';
import { OrdemDeProducaoService } from '../shared/ordem-de-producao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdemDeProducao } from '../shared/ordem-de-producao.model';

@Component({
  selector: 'app-ordem-de-producao-form',
  templateUrl: './ordem-de-producao-form.component.html',
  styleUrls: ['./ordem-de-producao-form.component.css']
})
export class OrdemDeProducaoFormComponent implements OnInit {

   pageTitle!: string;
  currentAction!: string; 
  ordemDeProducao: OrdemDeProducao = {};
  message = '';
  debug = true;


  constructor(
    private ordemDeProducaoService: OrdemDeProducaoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.setCurrentAction(); 
  }

  private setCurrentAction(): void { 
    if (this.route.snapshot.url[0].path == 'new') { 
      this.currentAction = 'new'; 
      this.pageTitle = 'Cadastro de OrdemDeProducao'; 
    } else { 
      this.currentAction = 'edit'; 
      this.getOrdemDeProducao(this.route.snapshot.params['id']); 
      this.pageTitle = 'Edição de OrdemDeProducao'; 
    } 
  } 

  getOrdemDeProducao(id: string): void {
    this.ordemDeProducaoService.get(id)
      .subscribe(
        data => {
          this.ordemDeProducao = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCancelada(status: boolean): void {
    const data = {
      codigo: this.ordemDeProducao.codigo,
      itemDeOP: this.ordemDeProducao.itemDeOP,
      pedido: this.ordemDeProducao.pedido,
      nomeCliente: this.ordemDeProducao.nomeCliente,
      data: this.ordemDeProducao.data,
      prazo: this.ordemDeProducao.prazo,
      codigoItem: this.ordemDeProducao.codigoItem,
      descricaoItem: this.ordemDeProducao.descricaoItem,
      quantidade: this.ordemDeProducao.quantidade,
      fotoItem: this.ordemDeProducao.fotoItem,
      cancelada: status
    };

    this.message = '';

    this.ordemDeProducaoService.update(this.ordemDeProducao.id, data)
      .subscribe(
        response => {
          this.ordemDeProducao.cancelada = status;
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'O cancelada foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updateOrdemDeProducao(): void {
    this.message = '';

    this.ordemDeProducaoService.update(this.ordemDeProducao.id, this.ordemDeProducao)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade OrdemDeProducaoEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteOrdemDeProducao(): void {
    this.ordemDeProducaoService.delete(this.ordemDeProducao.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/ordens-de-producao']);
        },
        error => {
          console.log(error);
        });
  }

  submitForm(): void { 
    if (this.currentAction == 'new') { 
      this.createOrdemDeProducao(); 
      console.log('new'); 
    } else { 
      this.updateOrdemDeProducao(); 
      console.log('edit'); 
    } 
  } 

  createOrdemDeProducao(): void { 
    this.message = ''; 

    this.ordemDeProducaoService.create(this.ordemDeProducao) 
      .subscribe( 
        response => { 
          if (this.debug) console.log(response); 
          this.message = response.message ? response.message : 'A entidade OrdemDeProducao foi criada com sucesso!'; 
        }, 
        error => { 
          console.log(error); 
        }); 
  } 
}
