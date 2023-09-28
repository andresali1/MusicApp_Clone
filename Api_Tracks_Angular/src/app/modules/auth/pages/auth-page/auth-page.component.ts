import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrls: ['./auth-page.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class AuthPageComponent implements OnInit{
  errorSession:boolean = false;
  formLogin:FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)
      ])
    });
  }

  sendLogin():void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredentials(email, password)
    .subscribe(responseOk => { //TODO: Cuando las credenciales son correctas
      if(responseOk.length == 0){
        this.errorSession = true;
      } else {
        this.errorSession = false
        this.router.navigate(['/', 'tracks']);
      }
    });
  }
}
