import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../servicios/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email: String ="";
  clave: String ="";

  formLogin: FormGroup;

  validationUserMessage = { type: 'errorType', message: 'El email es incorrecto. Prueve nuevmaente' }

  validationFormUser: FormGroup = new FormGroup({});
  constructor(
    private userService: UserAuthService,
    private router: Router,
    public formBuilder: FormBuilder
  ) { 
    this.formLogin = new FormGroup({
      email: new FormControl(),
      clave: new FormControl()
    })
    }

  ngOnInit():void {
    // this.validationFormUser = this.formBuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
    //   ])),
    //   clave: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.minLength(5)
    //   ]))
    // });
  }
  
  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log("estoy logeado!");
      }).catch(error => console.log('Error -> onSubmit: '+ error));
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log("onClick success");
        this.router.navigate(['/main']);
      }).catch(error => console.log('Error -> onClick: '+ error));
  }

}
