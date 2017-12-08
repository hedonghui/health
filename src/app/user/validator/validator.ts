import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

export function mobileValidator(control: FormControl): any {
    const  reg = /^1[0-9]{10}$/;
    const valid = reg.test(control.value);
    return valid ? null : {appMobileValidator : true };
}

export function mobileAsyncValidator(control: FormControl): any {
    const reg = /^1[0-9]{10}$/;
    const valid = reg.test(control.value);
    return Observable.of(valid ? null : {mobile : true});
  }

export function equalValidator(group: FormGroup): any {
const password: FormControl = group.get('password') as FormControl;
const pconfirm: FormControl = group.get('pconfirm') as FormControl;
let valid: Boolean = false;
if (password && pconfirm) {
    valid = (password.value === pconfirm.value);
}
return valid ? null : {equal: {errorInfo: '密码和确认密码不匹配'}};
}
