import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

import FeaturedImages from '../testing-images';

@Component({
  selector: 'app-product-page',
  styleUrls: ['./product-page.component.css'],
  templateUrl: './product-page.component.html'
})
export class ProductPageComponent implements OnInit {
  @Input() private id: string;
  public isLoaded = false;
  public product = {};
  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    // Call for product ID from server
    // this.productService.getProduct(this.id);
    const temp = setInterval(() => {
      this.product = {
        images: FeaturedImages,
        price: 99.99,
        rating: '4.5',
        ratingCount: '1000',
        title:
          'Certified Refurbished Ring Video Doorbell Pro, with HD Video, Motion Activated Alerts, Easy Installation (existing doorbell wiring required)'
      };
      this.isLoaded = true;

      if (this.isLoaded) {
        clearInterval(temp);
      }
    }, 1000);
  }
}
