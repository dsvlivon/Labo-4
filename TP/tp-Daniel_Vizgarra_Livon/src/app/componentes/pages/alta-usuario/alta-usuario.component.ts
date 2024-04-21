import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../servicios/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alta-usuario.component.html',
  styleUrl: './alta-usuario.component.css'
})
export class AltaUsuarioComponent implements OnInit{

  formReg: FormGroup;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      clave: new FormControl()
    })
  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.userAuthService.registrar(this.formReg.value)
      .then(response => {
        console.log('Ingreso Correcto: ' + this.formReg.value)
      this.router.navigate(['/login']);
    }).catch(error => console.log('Error -> onSubmit: '+ error))
  }

}
