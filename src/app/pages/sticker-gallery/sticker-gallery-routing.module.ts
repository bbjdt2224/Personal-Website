import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditUserProfileDialogComponent } from './components/edit-user-profile-dialog/edit-user-profile-dialog.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { InfoComponent } from './info/info.component';
import { AdminGuard } from './service/admin.guard';
import { AuthGuard } from './service/auth.guard';
import { StickerGalleryComponent } from './sticker-gallery.component';
import { SingleUseResolver } from './service/single-link.resolver';
import { OrderComponent } from './pages/order/order.component';
import { MyItemsComponent } from './pages/my-items/my-items.component';

const routes: Routes = [
  {
    path: 'stickers',
    children: [
      {
        path: '',
        component: StickerGalleryComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'link/:type/:value',
        component: InfoComponent,
        resolve: { data: SingleUseResolver },
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'view/:userId',
        component: ViewProfileComponent,
      },
      {
        path: 'edit-profile',
        component: EditUserProfileDialogComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'order',
        component: OrderComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-items',
        component: MyItemsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class StickerGalleryRoutingModule {}
