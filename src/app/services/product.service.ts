import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [];
  filteredProducts: any[] = [];
  loaded = false;

  constructor(private http: Http) {
    this.LoadProducts();
  }

  public LoadProducts() {

    // tslint:disable-next-line:no-shadowed-variable
    const promise = new Promise((resolve, _reject) => {

      if (this.products.length === 0) {
        this.http.get('https://joyeriasmaria-web.firebaseio.com/products-idx.json')
          .subscribe(data => {
            setTimeout(() => {
              this.loaded = true;
              this.products = data.json();
              resolve();
            }, 1500);
          });
      }
    });

    return promise;
  }

  public LoadProductByFilter(filter: string) {

    if (this.products.length === 0) {
      this.LoadProducts().then(() => {
        this.SearchProductsByFilter(filter);
      });
    } else {
      this.SearchProductsByFilter(filter);
    }
  }

  private SearchProductsByFilter(filter: string) {

    this.filteredProducts = [];
    filter = filter.toLowerCase();

    this.products.forEach(pro => {
      if (pro.categoria.indexOf(filter) >= 0
          || pro.titulo.toLowerCase().indexOf(filter) >= 0) {

            this.filteredProducts.push(pro);
      }
    });
  }

  public LoadProductById(cod: string) {
    return this.http.get(`https://joyeriasmaria-web.firebaseio.com/products/${ cod }.json`);
  }
}
