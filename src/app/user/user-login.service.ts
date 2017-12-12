import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { docCookies } from './user-login/cookies';
@Injectable()
export class UserLoginService {
  public userLoginURL = 'mock-data/user-login-mock.json';

  constructor(public http : HttpClient) { }

  public login(user) {
    const params = new HttpParams()
          .set('username', user.username)
          .set('password',user.password);
   
      return this.http
          .get(this.userLoginURL,{params})
          .map(res =>{
            let user = res;
            if(user){
              docCookies.setItem('currentUser',JSON.stringify(user),50000);
            }
            return res;
          })
          .subscribe(
            data =>{
              console.log(data);
            },
            error =>{
              console.error(error);
            }
          )

  }
  public logout():void{
    docCookies.removeItem('currentUser');
  }
}
