import { Component, OnInit } from '@angular/core';
import { RelatorioDeProducaoService } from '../shared/relatorio-de-producao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatorioDeProducao } from '../shared/relatorio-de-producao.model';

@Component({
  selector: 'app-relatorio-de-producao-form',
  templateUrl: './relatorio-de-producao-form.component.html',
  styleUrls: ['./relatorio-de-producao-form.component.css']
})
export class RelatorioDeProducaoFormComponent implements OnInit {

   pageTitle!: string;
  currentAction!: string; 
  relatorioDeProducao: RelatorioDeProducao = {
    nomeFuncionario: '',
    codigoItem: 0,
    descricaoItem: '',
    quantidade: 0,
    pontos: 0
  };
  message = '';
  debug = true;


  constructor(
    private relatorioDeProducaoService: RelatorioDeProducaoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.setCurrentAction(); 
  }

  private setCurrentAction(): void { 
    if (this.route.snapshot.url[0].path == 'new') { 
      this.currentAction = 'new'; 
      this.pageTitle = 'Cadastro de RelatorioDeProducao'; 
    } else { 
      this.currentAction = 'edit'; 
      this.getRelatorioDeProducao(this.route.snapshot.params['id']); 
      this.pageTitle = 'Edição de RelatorioDeProducao'; 
    } 
  } 

  getRelatorioDeProducao(id: string): void {
    this.relatorioDeProducaoService.get(id)
      .subscribe(
        data => {
          this.relatorioDeProducao = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateRelatorioDeProducao(): void {
    this.message = '';

    this.relatorioDeProducaoService.update(this.relatorioDeProducao.id, this.relatorioDeProducao)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade RelatorioDeProducaoEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRelatorioDeProducao(): void {
    this.relatorioDeProducaoService.delete(this.relatorioDeProducao.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/relatorios-de-producao']);
        },
        error => {
          console.log(error);
        });
  }

  submitForm(): void { 
    if (this.currentAction == 'new') { 
      this.createRelatorioDeProducao(); 
      console.log('new'); 
    } else { 
      this.updateRelatorioDeProducao(); 
      console.log('edit'); 
    } 
  } 

  createRelatorioDeProducao(): void { 
    this.message = ''; 

    this.relatorioDeProducaoService.create(this.relatorioDeProducao) 
      .subscribe( 
        response => { 
          if (this.debug) console.log(response); 
          this.message = response.message ? response.message : 'A entidade RelatorioDeProducao foi criada com sucesso!'; 
        }, 
        error => { 
          console.log(error); 
        }); 
  } 
}
