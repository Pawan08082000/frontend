import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  message;
  booleanVariable: boolean = true;
  hide:boolean = true;


  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    rememberMe: [new FormControl(false)],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    // private _snackBar: MatSnackBar

  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }


  onSubmit(): void {
    if (!this.loginForm.invalid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe(
        (data) => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          
          this.message = data.message;
          this.isLoginFailed = false;
          this.isLoggedIn = true;

          // this._snackBar.open(data.message, 'OK', {
          //   duration: 2000,
          // });
          this.loginForm.reset();
          this.router.navigate(['/home']);
          // this.reloadPage();
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          this.loginForm.reset();
          // this._snackBar.open(this.errorMessage, 'OK', {
          //   duration: 2000,
          // });
        }
      );
    }
  }

  reloadPage(): void {
    window.location.reload();
  }}
