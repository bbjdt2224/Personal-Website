import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditLinkItemDialogComponent } from '../edit-link-item-dialog/edit-link-item-dialog.component';
import { StickerService } from '../../service/sticker.service';
import { Link } from '../../interfaces/link';
import { AuthorizationService } from '../../service/authorization.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'jt-link-grid',
  templateUrl: './link-grid.component.html',
  styleUrls: ['./link-grid.component.scss'],
})
export class LinkGridComponent implements OnInit {
  @Input() editable = false;
  @Input() userId: string = null;

  linkList: Link[] = [];

  constructor(
    public dialog: MatDialog,
    public stickerService: StickerService,
    public authService: AuthorizationService
  ) {}

  async ngOnInit() {
    this.getAllLinks();
  }

  async getAllLinks() {
    this.linkList = await this.stickerService.getAllUserLinks(
      this.userId ? this.userId : this.authService.userData.uid
    );
    if (this.linkList.length === 1 && !this.editable) {
      window.open(this.linkList[0].value, '_blank');
    }
  }

  async addLinkItem() {
    const dialogRef = this.dialog.open(EditLinkItemDialogComponent, {
      data: { type: null, value: null },
    });
    const dialogData = await dialogRef.afterClosed().toPromise();
    this.getAllLinks();
  }

  updateGrid() {
    this.getAllLinks();
  }
}
