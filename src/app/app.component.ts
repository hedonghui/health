import { Component, OnInit } from '@angular/core';
import { docCookies } from './user/user-login/cookies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public currentUser:any;
  constructor (){}
  ngOnInit(){
    this.currentUser = docCookies.getItem('currentUser');
  }
}
