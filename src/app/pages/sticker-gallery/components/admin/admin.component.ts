import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { LinkType } from '../../interfaces/link';
import { User } from '../../interfaces/user';
import { AuthorizationService } from '../../service/authorization.service';

@Component({
  selector: 'jt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userArray: User[] = [];

  data: {
    type?: LinkType;
    value?: string;
  } = {
    type: 'snapchat',
    value: '',
  };

  get valueLabel() {
    switch (this.data.type) {
      case 'snapchat':
      case 'twitter':
      case 'tiktok':
      case 'reddit':
      case 'facebook':
      case 'instagram':
      case 'linkedin':
      case 'github':
        return 'Username';
      case 'url':
        return 'Link';
      default:
        return 'Data';
    }
  }

  constructor(
    public authService: AuthorizationService,
    public clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  async getAllUsers() {
    this.userArray = await this.authService.getAllUsers();
  }

  copyLink(uid) {
    this.clipboard.copy(`justintrue.me/stickers/view/${uid}`);
  }

  copySingleLink(type: LinkType, value: string) {
    this.clipboard.copy(`justintrue.me/stickers/link/${type}/${value}`);
  }
}
