import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [];
  loaded = false;

  constructor(private http: Http) {
    this.LoadProducts();
  }

  public LoadProducts() {
    if (this.products.length === 0) {
      this.http.get('https://joyeriasmaria-web.firebaseio.com/products-idx.json')
        .subscribe(data => {
          setTimeout(() => {
            this.loaded = true;
            this.products = data.json();
          }, 1500);
        });
    }
  }
}
