import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../service/authorization.service';

@Component({
  selector: 'jt-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(public authService: AuthorizationService) {}

  ngOnInit(): void {}
}
