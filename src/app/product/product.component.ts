import { Component, OnInit, OnChanges, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations/routerAnimation';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ProductComponent implements OnChanges {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
  constructor() { }

  ngOnChanges() {
    this.a();
  }
  a () {
    console.log('123');
   }

}
