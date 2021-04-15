import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Link } from '../../interfaces/link';
import { DeleteItemDialogComponent } from '../delete-item-dialog/delete-item-dialog.component';
import { EditLinkItemDialogComponent } from '../edit-link-item-dialog/edit-link-item-dialog.component';

@Component({
  selector: 'jt-link-item',
  templateUrl: './link-item.component.html',
  styleUrls: ['./link-item.component.scss'],
})
export class LinkItemComponent implements OnInit {
  @Input() editable = false;
  @Input() link: Link;

  @Output() valueChanged: EventEmitter<any> = new EventEmitter();

  @HostListener('click') onClick() {
    this.openLink();
  }

  constructor(public dialog: MatDialog) {}

  get image() {
    const path = '/assets/images/links/';
    switch (this.link.type) {
      case 'snapchat':
        return path + 'snapchat.png';
      case 'instagram':
        return path + 'instagram.png';
      case 'url':
        return path + 'link.png';
      case 'facebook':
        return path + 'facebook.png';
      case 'github':
        return path + 'github.png';
      case 'linkedin':
        return path + 'linkedin.png';
      case 'reddit':
        return path + 'reddit.png';
      case 'tiktok':
        return path + 'tiktok.png';
      case 'twitter':
        return path + 'twitter.png';
      default:
        return path + 'unknown.jpg';
    }
  }

  ngOnInit(): void {}

  open(event) {
    event.stopPropagation();
    this.openLink();
  }

  edit(event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(EditLinkItemDialogComponent, {
      data: this.link,
    });
    dialogRef.afterClosed().subscribe((e) => {
      this.valueChanged.emit();
    });
  }

  openLink() {
    window.open(this.link.value, '_blank');
  }

  delete() {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeleteItemDialogComponent, {
      data: {
        uid: this.link.uid,
      },
    });
    dialogRef.afterClosed().subscribe((e) => {
      this.valueChanged.emit();
    });
  }
}
