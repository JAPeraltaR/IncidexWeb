import { Component } from '@angular/core';
import { LoginService } from '../../services/login.services';

@Component({
  selector: 'login-central',
  standalone: false,
  templateUrl: './central.component.html',
  styleUrl: './central.component.css'
})
export class CentralComponent {
  constructor( public loginService: LoginService ){}
}
