import { Component } from '@angular/core';
import { LoginService } from '../../services/auth.services';

@Component({
  selector: 'auth-central',
  standalone: false,
  templateUrl: './central.component.html',
  styleUrl: './central.component.css'
})
export class CentralComponent {
  constructor( public loginService: LoginService ){}
}
