import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../shared/item.model';
import { ImageService } from 'src/app/shared/services/image.service';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

   pageTitle!: string;
  currentAction!: string; 
  @ViewChild('fileInput', {static: false}) fileInput!: ElementRef;
  item: Item = {};
  message = '';
  debug = true;
  id: any;


  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.message = '';
    this.setCurrentAction(); 
  }

  private setCurrentAction(): void { 
    if (this.route.snapshot.url[0].path == 'new') { 
      this.currentAction = 'new'; 
      this.pageTitle = 'Cadastro de Item'; 
    } else { 
      this.currentAction = 'edit'; 
      this.getItem(this.route.snapshot.params['id']); 
      this.pageTitle = 'Edição de Item'; 
    } 
  } 

  getItem(id: string): void {
    this.itemService.get(id)
      .subscribe(
        data => {
          this.item = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateItem(): void {
    this.message = '';

    this.itemService.update(this.item.id, this.item)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.message = response.message ? response.message : 'A entidade ItemEditor foi atualizada com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteItem(): void {
    this.itemService.delete(this.item.id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          this.router.navigate(['/itens']);
        },
        error => {
          console.log(error);
        });
  }

  submitForm(): void { 
    if (this.currentAction == 'new') { 
      this.createItem(); 
      console.log('new'); 
    } else { 
      this.updateItem(); 
      console.log('edit'); 
    } 
  } 

  createItem(): void { 
    this.message = ''; 
    this.item.obsoleto = false;
    this.itemService.create(this.item) 
      .subscribe( 
        response => { 
          if (this.debug) console.log(response); 
          this.item = response;
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
      this.item.fotoItem = response?.id;
      this.updateItem();
      },
      error => {
        console.log(error);
      });
  }
}
