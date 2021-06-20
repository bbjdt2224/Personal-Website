import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../service/authorization.service';
import { User } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { StickerService } from '../../service/sticker.service';

@Component({
  selector: 'jt-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  userId: string;
  user: User;

  constructor(
    public authService: AuthorizationService,
    public route: ActivatedRoute,
    public stickerService: StickerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params.userId;
      this.getUser();
    });
  }

  async getUser() {
    this.user = (await this.stickerService.getUserById(this.userId)).data();
  }
}
