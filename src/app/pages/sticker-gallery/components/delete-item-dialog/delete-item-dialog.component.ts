import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorizationService } from '../../service/authorization.service';
import { StickerService } from '../../service/sticker.service';

@Component({
  selector: 'jt-delete-item-dialog',
  templateUrl: './delete-item-dialog.component.html',
  styleUrls: ['./delete-item-dialog.component.scss'],
})
export class DeleteItemDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteItemDialogComponent>,
    public stickerService: StickerService,
    public authService: AuthorizationService,
    @Inject(MAT_DIALOG_DATA)
    public data: { uid: string }
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }

  delete() {
    this.stickerService.removeLinkFromUser(
      this.authService.userData.uid,
      this.data.uid
    );
    this.dialogRef.close();
  }
}
