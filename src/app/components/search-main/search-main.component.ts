import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html'
})
export class SearchMainComponent {

  filter: string = undefined;

  constructor(public activatedRoute: ActivatedRoute,
              public productService: ProductService) {

      activatedRoute.params.subscribe(param => {
      this.filter = param['filter'];

      productService.LoadProductByFilter(this.filter);
    });
  }

}
