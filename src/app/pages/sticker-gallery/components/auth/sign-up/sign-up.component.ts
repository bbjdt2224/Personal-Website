import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../service/authorization.service';

@Component({
  selector: 'jt-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(public authService: AuthorizationService) {}

  ngOnInit(): void {}
}
