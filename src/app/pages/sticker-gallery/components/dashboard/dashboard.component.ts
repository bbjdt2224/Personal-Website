import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../service/authorization.service';
import { User } from '../../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { EditUserProfileDialogComponent } from '../edit-user-profile-dialog/edit-user-profile-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'jt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  get user(): User {
    return this.authService.userData;
  }

  constructor(
    public authService: AuthorizationService,
    public dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit(): void {}

  editUser() {
    this.router.navigate(['/stickers/edit-profile']);
  }
}
