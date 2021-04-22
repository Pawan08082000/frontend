import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm = this.fb.group({
    name: [null, Validators.required],
    username: [null, Validators.required],
    email: [null, Validators.compose([Validators.required, Validators.email])],
    mobileNumber: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    password: [null, 
      Validators.compose([Validators.required, Validators.minLength(6)])    ],
    confirmPassword: [null, Validators.required],
    roles: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
  }, 
  );

  hide = true;
  cnPassHide:boolean = true;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  message;

  hasUnitNumber = false;


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    // private _snackBar: MatSnackBar
  ) {}
  
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
  
    return password === confirmPassword ? null : { notSame: true }     
  }

  onSubmit(): void {
    console.log('dbvs vh')
    if (this.signupForm.invalid){
    const {
      name,
      username,
      email,
      password,
      confirmPassword,
      mobileNumber
    } = this.signupForm.value;
    this.auth
      .register(name,username, email, password, confirmPassword, mobileNumber)
      .subscribe(
        (data) => {
          this.message = data;
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.signupForm.reset();
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          // this._snackBar.open(this.errorMessage, 'OK', {
          //   duration: 2000,
          // });
          // this.signupForm.reset();
        }
      );
    }
  }
}
