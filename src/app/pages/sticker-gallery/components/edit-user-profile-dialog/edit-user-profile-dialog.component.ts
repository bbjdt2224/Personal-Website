import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';
import { AuthorizationService } from '../../service/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jt-edit-user-profile-dialog',
  templateUrl: './edit-user-profile-dialog.component.html',
  styleUrls: ['./edit-user-profile-dialog.component.scss'],
})
export class EditUserProfileDialogComponent implements OnInit {
  userForm: FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedFile: any = '';
  constructor(
    public authService: AuthorizationService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      photoURL: [''],
      displayName: ['User', Validators.required],
      company: [''],
      phone: [''],
      address: [''],
      website: [''],
      createContact: [false],
    });
    this.userForm.patchValue(this.authService.userData);
    this.croppedImage = this.userForm.get('photoURL').value;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.croppedFile = base64ToFile(event.base64);
  }
  imageLoaded() {
    /* show cropper */
  }
  cropperReady() {
    /* cropper ready */
  }
  loadImageFailed() {
    /* show message */
  }

  async save() {
    if (this.croppedFile) {
      const url = await this.authService.uploadImage(
        this.authService.userData.uid,
        this.croppedFile
      );
      this.userForm.get('photoURL').setValue(url);
    }
    this.authService.updateProfile(this.userForm.value);
    this.authService.updateUserData(this.userForm.value);
    this.router.navigate(['stickers/dashboard']);
  }
}
