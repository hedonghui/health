import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { docCookies } from './cookies';
import { UserLoginService } from '../user-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
   isCheckedButton = true;
  constructor(private UserLoginService : UserLoginService,
		public router: Router ) { this.rememberMe(13798283047); }

  ngOnInit() {
  }
  onSubmit(value: any, valid: boolean) {
    this.UserLoginService.login(value);
    this.router.navigateByUrl('/health');
  }
  rememberMe(phone) {
    var data = new Date();
    console.log(data);
    docCookies.setItem('name','asjdfkl',10000);
  }
}
