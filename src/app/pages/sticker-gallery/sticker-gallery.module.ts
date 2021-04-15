import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { environment } from 'src/environments/environment';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ButtonComponent } from './components/button/button.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditLinkItemDialogComponent } from './components/edit-link-item-dialog/edit-link-item-dialog.component';
import { EditUserProfileDialogComponent } from './components/edit-user-profile-dialog/edit-user-profile-dialog.component';
import { LinkGridComponent } from './components/link-grid/link-grid.component';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { StickerItemComponent } from './components/sticker-item/sticker-item.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { InfoComponent } from './info/info.component';
import { AuthorizationService } from './service/authorization.service';
import { StickerDesignService } from './service/sticker-design.service';
import { StickerService } from './service/sticker.service';
import { StickerGalleryRoutingModule } from './sticker-gallery-routing.module';
import { StickerGalleryComponent } from './sticker-gallery.component';
import { DeleteItemDialogComponent } from './components/delete-item-dialog/delete-item-dialog.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SingleUseResolver } from './service/single-link.resolver';

@NgModule({
  declarations: [
    StickerGalleryComponent,
    StickerItemComponent,
    InfoComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ButtonComponent,
    DashboardComponent,
    LinkItemComponent,
    EditLinkItemDialogComponent,
    EditUserProfileDialogComponent,
    LinkGridComponent,
    ViewProfileComponent,
    DeleteItemDialogComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StickerGalleryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatDialogModule,
    ImageCropperModule,
    ClipboardModule,
  ],
  providers: [
    StickerDesignService,
    AuthorizationService,
    StickerService,
    SingleUseResolver,
  ],
  entryComponents: [EditLinkItemDialogComponent, DeleteItemDialogComponent],
  exports: [
    StickerGalleryComponent,
    StickerItemComponent,
    InfoComponent,
    RouterModule,
  ],
})
export class StickerGalleryModule {}
