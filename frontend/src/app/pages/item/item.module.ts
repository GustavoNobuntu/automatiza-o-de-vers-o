import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ItemFormComponent,
    ItemListComponent
  ],
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
