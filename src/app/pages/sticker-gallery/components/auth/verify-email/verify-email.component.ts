import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../service/authorization.service';

@Component({
  selector: 'jt-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  constructor(public authService: AuthorizationService) {}

  ngOnInit(): void {}
}
