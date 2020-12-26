import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import mainAPIAxios from '../axios';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private env = environment;
  constructor() {}

  public getProduct(id: string): any {
    return mainAPIAxios({
      data: id,
      method: 'get',
      url: `${this.env.mainHost}/propduct/`
    });
  }

  public searchProduct(id: string): void {
    //  Ca
    mainAPIAxios({
      data: id,
      method: 'get',
      url: `${this.env.mainHost}/product`
    }).then((result) => {
      console.log(result);
      // Forward to search page with results
    });
  }
}
