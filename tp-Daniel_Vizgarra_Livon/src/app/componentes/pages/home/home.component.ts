import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../servicios/user-auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(
    private userService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void { }

  onClick(){ 
    this.userService.logout().then(() => { 
      this.router.navigate(['/altaUsuario']);
    }).catch( error => console.log(error));
  }
}
