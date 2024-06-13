import { Component, OnInit } from '@angular/core';
import { ApontamentoDeProducaoService } from '../shared/apontamento-de-producao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApontamentoDeProducao } from '../shared/apontamento-de-producao.model';
import { FuncionarioService } from '../../funcionario/shared/funcionario.service';
import { Funcionario } from '../../funcionario/shared/funcionario.model';
import { OrdemDeProducaoService } from '../../ordem-de-producao/shared/ordem-de-producao.service';
import { OrdemDeProducao } from '../../ordem-de-producao/shared/ordem-de-producao.model';

@Component({
  selector: 'app-apontamento-de-producao-form',
  templateUrl: './apontamento-de-producao-form.component.html',
  styleUrls: ['./apontamento-de-producao-form.component.css']
})
export class ApontamentoDeProducaoFormComponent implements OnInit {

   pageTitle!: string;
   nomeFuncionario!: string;
  currentAction!: string; 
  apontamentoDeProducao: ApontamentoDeProducao = {};
  ordemProducao: OrdemDeProducao = {};
  idOP!: string;
  funcionario: Funcionario = {};
  message = '';
  debug = true;
  error: boolean = true;


  constructor(
    private apontamentoDeProducaoService: ApontamentoDeProducaoService,
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService,
    private ordemProducaoService: OrdemDeProducaoService) { }

  ngOnInit(): void {
    this.message = '';
    this.getFuncionario(this.route.snapshot.params['id']);
    this.currentAction = this.route.snapshot.url[1].path;
    console.log(this.currentAction);
  }

  getFuncionario(id: string): void {
    this.funcionarioService.get(id)
      .subscribe(
        data => {
          this.funcionario = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getApontamentoDeProducao(id: string): void {
    this.apontamentoDeProducaoService.get(id)
      .subscribe(
        data => {
          this.apontamentoDeProducao = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  createApontamentoDeProducao(): void { 
    this.message = ''; 
    this.apontamentoDeProducao.funcionario = this.funcionario.id;
    this.apontamentoDeProducao.itemDeOP = this.ordemProducao.id;
    this.apontamentoDeProducao.dataProducao = new Date();
    this.apontamentoDeProducao.cancelada = false;

    this.apontamentoDeProducaoService.create(this.apontamentoDeProducao) 
      .subscribe( 
        response => { 
          if (this.debug) console.log(response); 
          this.message = response.message ? response.message : 'A entidade ApontamentoDeProducao foi criada com sucesso!'; 
        }, 
        error => { 
          console.log(error); 
        }); 
  } 

  getOrdemProducao(id: string): void {
    console.log(id);
    this.ordemProducaoService.get(id)
      .subscribe(
        data => {
          this.ordemProducao = data;
          this.error = false;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
          this.error = true;
        });
  }

  deleteOP(): void {
    this.ordemProducao = {};
    this.error = true;
    this.idOP = '';
  }
}
