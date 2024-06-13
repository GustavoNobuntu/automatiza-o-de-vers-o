import { Component, OnInit } from '@angular/core';
import { RelatorioDeProducao } from '../shared/relatorio-de-producao.model';
import { RelatorioDeProducaoService } from '../shared/relatorio-de-producao.service';

@Component({
  selector: 'app-relatorio-de-producao-list',
  templateUrl: './relatorio-de-producao-list.component.html',
  styleUrls: ['./relatorio-de-producao-list.component.css']
})
export class RelatorioDeProducaoListComponent implements OnInit {

  RelatorioDeProducaoCollection?: RelatorioDeProducao[];
  currentRelatorioDeProducao: RelatorioDeProducao = {};
  currentIndex = -1;
  debug = true;

  constructor(private relatorioDeProducaoService: RelatorioDeProducaoService) { }

  ngOnInit(): void {
    this.retrieveRelatoriosDeProducao();
  }

  retrieveRelatoriosDeProducao(): void {
    this.relatorioDeProducaoService.getAll()
      .subscribe(
        data => {
          this.RelatorioDeProducaoCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveRelatoriosDeProducao();
    this.currentRelatorioDeProducao = {};
    this.currentIndex = -1;
  }

  setActiveRelatorioDeProducao(relatorioDeProducao: RelatorioDeProducao, index: number): void {
    this.currentRelatorioDeProducao = relatorioDeProducao;
    this.currentIndex = index;
  }

  removeAllRelatoriosDeProducao(): void {
    this.relatorioDeProducaoService.deleteAll()
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
