import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Funcionario } from '../shared/funcionario.model';
import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  FuncionarioCollection: Funcionario[] = [];
  currentFuncionario: Funcionario = {};
  currentIndex = -1;
  debug = false;
  images: any[] = [];
  search = '';
  imageToShow: any;

  constructor(private funcionarioService: FuncionarioService,
    private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveFuncionarios();
  }

  async retrieveFuncionarios(): Promise<void> {
    this.FuncionarioCollection = await new Promise<Funcionario[]>((resolve, reject) => {
    this.funcionarioService.getAll()
      .subscribe(resolve as any, reject as any);
    });
    this.FuncionarioCollection.forEach((element: any) => {
      element.foto = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.foto.data);
    });
  }

  imageToFoto(data: any) {
    data.forEach((element: any) => {
      this.images.push(this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.foto.data));
    });
  }

  refreshList(): void {
    this.retrieveFuncionarios();
    this.currentFuncionario = {};
    this.currentIndex = -1;
  }

  setActiveFuncionario(funcionario: Funcionario, index: number): void {
    console.log(funcionario);
      this.router.navigate(['/funcionario', funcionario.id, 'edit']);
  }

  removeAllFuncionarios(): void {
    this.funcionarioService.deleteAll()
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  getByNome(nome: string): void {
    this.funcionarioService.findByNome(nome)
      .subscribe(
        data => {
          this.FuncionarioCollection = data;
          this.FuncionarioCollection.forEach((element: any) => {
            if(this.debug) console.log(element);
            element.foto = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + element.foto.data);
          });
        },
        error => {
          console.log(error);
        });
  }
}
