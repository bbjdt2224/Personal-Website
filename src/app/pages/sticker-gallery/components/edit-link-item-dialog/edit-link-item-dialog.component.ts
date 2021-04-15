import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Link, LinkType } from '../../interfaces/link';
import { AuthorizationService } from '../../service/authorization.service';
import { StickerService } from '../../service/sticker.service';

@Component({
  selector: 'jt-edit-link-item-dialog',
  templateUrl: './edit-link-item-dialog.component.html',
  styleUrls: ['./edit-link-item-dialog.component.scss'],
})
export class EditLinkItemDialogComponent implements OnInit {
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
    public dialogRef: MatDialogRef<EditLinkItemDialogComponent>,
    public stickerService: StickerService,
    public authService: AuthorizationService,
    @Inject(MAT_DIALOG_DATA)
    public data: { uid: string; type: string; value: string }
  ) {
    if (data.value) {
      const urlArray = data.value.split('/');
      data.value = urlArray[urlArray.length - 1];
    }
  }

  ngOnInit(): void {}

  save(type, value) {
    const link: Link = {
      type: type,
      value: this.convertUsernameToLink(type, value),
    };
    if (this.data.uid) {
      this.stickerService.updateLink(
        this.authService.userData.uid,
        this.data.uid,
        link
      );
    } else {
      this.stickerService.addLinkToUser(this.authService.userData.uid, link);
    }
    this.dialogRef.close();
  }

  convertUsernameToLink(type: LinkType, value: string) {
    switch (type) {
      case 'snapchat':
        return 'https://snapchat.com/add/' + value;
      case 'instagram':
        return 'https://instagram.com/' + value;
      case 'url':
        return value;
      case 'facebook':
        return 'https://facebook.com/' + value;
      case 'github':
        return 'https://github.com/' + value;
      case 'linkedin':
        return 'https://linkedin.com/in/' + value;
      case 'reddit':
        return 'https://reddit.com/user/' + value;
      case 'tiktok':
        return 'https://tiktok.com/@' + value.replace('@', '');
      case 'twitter':
        return 'https://twitter.com/' + value;
      default:
        return;
    }
  }
}
