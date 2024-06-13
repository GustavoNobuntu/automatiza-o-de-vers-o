import { Component, OnInit } from '@angular/core';
import { OrdemDeProducao } from '../shared/ordem-de-producao.model';
import { OrdemDeProducaoService } from '../shared/ordem-de-producao.service';

@Component({
  selector: 'app-ordem-de-producao-list',
  templateUrl: './ordem-de-producao-list.component.html',
  styleUrls: ['./ordem-de-producao-list.component.css']
})
export class OrdemDeProducaoListComponent implements OnInit {

  OrdemDeProducaoCollection?: OrdemDeProducao[];
  currentOrdemDeProducao: OrdemDeProducao = {};
  currentIndex = -1;
  debug = true;

  constructor(private ordemDeProducaoService: OrdemDeProducaoService) { }

  ngOnInit(): void {
    this.retrieveOrdensDeProducao();
  }

  retrieveOrdensDeProducao(): void {
    this.ordemDeProducaoService.getAll()
      .subscribe(
        data => {
          this.OrdemDeProducaoCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveOrdensDeProducao();
    this.currentOrdemDeProducao = {};
    this.currentIndex = -1;
  }

  setActiveOrdemDeProducao(ordemDeProducao: OrdemDeProducao, index: number): void {
    this.currentOrdemDeProducao = ordemDeProducao;
    this.currentIndex = index;
  }

  removeAllOrdensDeProducao(): void {
    this.ordemDeProducaoService.deleteAll()
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
