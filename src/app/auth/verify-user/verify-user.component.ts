import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {

  confirmationCode;
  message;

  constructor(    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
   ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.queryParams.subscribe((params) => {
      this.confirmationCode = params['confirmationCode'];
    });

    this.auth.verifyUser(this.confirmationCode).subscribe(
      (result) => {
        this.message = result;
      },
      (err) => {}
    );
  }

}
