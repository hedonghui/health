import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl, AbstractControl } from '@angular/forms';
import { mobileValidator, mobileAsyncValidator, equalValidator } from '../validator/validator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(fb: FormBuilder) { 
    this.registerForm = fb.group({
      mobile:['',mobileValidator,mobileAsyncValidator],
      passwordsGroup:fb.group({
        password: ['', Validators.minLength(8)],
        pconfirm: ['']
      },{validator:equalValidator})
    })
  }

  ngOnInit() {
  }
  Next(){
    console.log(this.registerForm.get('mobile').pending);
  }

}
