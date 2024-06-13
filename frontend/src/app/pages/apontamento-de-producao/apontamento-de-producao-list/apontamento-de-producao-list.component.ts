import { Component, OnInit } from '@angular/core';
import { ApontamentoDeProducao } from '../shared/apontamento-de-producao.model';
import { ApontamentoDeProducaoService } from '../shared/apontamento-de-producao.service';

@Component({
  selector: 'app-apontamento-de-producao-list',
  templateUrl: './apontamento-de-producao-list.component.html',
  styleUrls: ['./apontamento-de-producao-list.component.css']
})
export class ApontamentoDeProducaoListComponent implements OnInit {

  ApontamentoDeProducaoCollection?: ApontamentoDeProducao[];
  currentApontamentoDeProducao: ApontamentoDeProducao = {};
  currentIndex = -1;
  debug = true;

  constructor(private apontamentoDeProducaoService: ApontamentoDeProducaoService) { }

  ngOnInit(): void {
    this.retrieveApontamentosDeProducao();
  }

  retrieveApontamentosDeProducao(): void {
    this.apontamentoDeProducaoService.getAll()
      .subscribe(
        data => {
          this.ApontamentoDeProducaoCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveApontamentosDeProducao();
    this.currentApontamentoDeProducao = {};
    this.currentIndex = -1;
  }

  setActiveApontamentoDeProducao(apontamentoDeProducao: ApontamentoDeProducao, index: number): void {
    this.currentApontamentoDeProducao = apontamentoDeProducao;
    this.currentIndex = index;
  }

  removeAllApontamentosDeProducao(): void {
    this.apontamentoDeProducaoService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
}
