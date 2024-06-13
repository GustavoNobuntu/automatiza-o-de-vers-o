import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../shared/funcionario.model';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

   pageTitle!: string;
   @ViewChild('fileInput', {static: false}) fileInput!: ElementRef;
   id!: string;
  currentAction!: string; 
  funcionario: Funcionario = {};
  debug = false;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.setCurrentAction(); 
  }

  private setCurrentAction(): void { 
    if (this.route.snapshot.url[0].path == 'new') { 
      this.currentAction = 'new'; 
      this.pageTitle = 'Cadastro de Funcionario'; 
    } else { 
      this.currentAction = 'edit'; 
      this.getFuncionario(this.route.snapshot.params['id']); 
      this.pageTitle = 'Edição de Funcionario'; 
    } 
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

  updateFuncionario(): any {
    console.log(this.funcionario);

    this.funcionarioService.update(this.funcionario.id, this.funcionario)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/funcionario']);
        },
        error => {
          console.log(error);
        });
  }

  deleteFuncionario(): void {
    console.log(this.funcionario);
    this.funcionarioService.delete(this.funcionario.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/funcionario']);
        },
        error => {
          console.log(error);
        });
  }

  submitForm(): void { 
    if (this.currentAction == 'new') { 
      console.log('new'); 
      this.createFuncionario(); 
    } else { 
      this.id = this.funcionario.id;
      this.saveImage();
      console.log('edit'); 
    } 
  } 

  createFuncionario(): void { 

    this.funcionarioService.create(this.funcionario) 
      .subscribe( 
        response => { 
          if (this.debug) console.log(response); 
          this.funcionario = response;
          this.id = response._id;
          this.saveImage();
        }, 
        error => { 
          console.log(error); 
        }); 
  } 

  saveImage(): any {
    const imageBlob = this.fileInput.nativeElement.files[0];
    const file = new FormData();
    file.set('file', imageBlob);

    this.imageService.uploadImage(file, this.id).subscribe(
      response => {
        console.log(response);
      this.funcionario.foto = response?.id;
      this.updateFuncionario();
      },
      error => {
        console.log(error);
      });
  }
}
