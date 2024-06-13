import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  ItemCollection?: Item[];
  currentItem: Item = {};
  currentIndex = -1;
  debug = true;
  search = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.retrieveItens();
  }

  retrieveItens(): void {
    this.itemService.getAll()
      .subscribe(
        data => {
          this.ItemCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveItens();
    this.currentItem = {};
    this.currentIndex = -1;
  }

  setActiveItem(item: Item, index: number): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

  removeAllItens(): void {
    this.itemService.deleteAll()
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
