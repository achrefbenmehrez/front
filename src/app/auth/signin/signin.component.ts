import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/core/helpers/routes';
import { AuthService } from 'src/app/core/service/authenticate.service';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public routes = routes;
  show = false;
  public CustomControler: any;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
password='';
email='';

  get f() {
    return this.form.controls;
  }

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  submit() {
    this.authService.authenticateUser(this.email, this.password)
      .subscribe(
        (response) => {
          // handle successful login response
          console.log(response);
          // store the JWT token in local storage
          localStorage.setItem('token', response.token);
          // redirect the user to the home page
          localStorage.setItem('authorized', response.token);

          window.location.href = '/dashboard';
        },
        (error) => {
          // handle login error response
          console.log(error);
          // display an error message to the user
        }
      );
  }

  ngOnDestroy() {}

  onClick() {
   
  }
}
