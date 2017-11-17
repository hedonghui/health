import { Component, OnInit, OnChanges } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [ flyIn ]
})
export class ProductComponent implements OnChanges {

  constructor() { }

  ngOnChanges() {
    this.a();
  }
  a () {
    console.log('123');
   }

}
