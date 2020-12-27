import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
@Component({
  selector: 'app-product-page',

  styleUrls: ['./product-page.component.css'],
  templateUrl: './product-page.component.html'
})
export class ProductPageComponent implements OnInit {
  @Input() private id: string;
  public isLoaded = false;
  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    // Call for product ID from server
    this.productService.getProduct(this.id);
  }
}
