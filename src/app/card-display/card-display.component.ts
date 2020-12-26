import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from '../_services/product.service';
@Component({
  selector: 'app-card-display',
  styleUrls: ['./card-display.component.css'],
  templateUrl: './card-display.component.html'
})
export class CardDisplayComponent implements OnInit {
  @Input() public title: string;
  @Input() public itemsArr: any[];
  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    // make sure array passed in is only 4 items;
    if (this.itemsArr.length > 4) {
      this.itemsArr = this.itemsArr.slice(0, 4);
    }
  }

  public searchItem(id: string): void {
    // call some service for search / item should have type?
    // this.productService.search(id);
    // product service should navigate to search page and make it wait.
    this.productService.searchProduct(id);
  }
}
