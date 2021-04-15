import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../service/authorization.service';

@Component({
  selector: 'jt-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthorizationService) {}

  ngOnInit(): void {}
}
