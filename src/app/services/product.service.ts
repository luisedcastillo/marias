import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  proucts: any[] = [];
  loaded = false;

  constructor(private http: Http) {
    this.LoadProducts();
  }

  public LoadProducts() {
    if (this.proucts.length === 0) {
      this.http.get('https://joyeriasmaria-web.firebaseio.com/products-idx.json')
        .subscribe(data => {
          this.loaded = true;
          this.proucts = data.json();
        });
    }
  }
}
