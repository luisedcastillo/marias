import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {

  product: any = undefined;
  cod: string = undefined;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) {

    route.params.subscribe(params => {
      this.cod = params['id'];

      productService.LoadProductById(this.cod)
                    .subscribe(response => {
                      this.product = response.json();
                    });
    });
  }

}
