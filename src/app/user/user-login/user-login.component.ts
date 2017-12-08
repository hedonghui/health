import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
   user = {phone: '13798283047' };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(value: any, valid: boolean) {
    console.log(value );
    console.log(valid);
  }
}
