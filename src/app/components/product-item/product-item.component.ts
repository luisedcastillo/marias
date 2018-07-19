import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
    });
  }

}
