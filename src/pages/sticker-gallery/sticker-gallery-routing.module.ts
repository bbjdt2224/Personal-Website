import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { StickerGalleryComponent } from './sticker-gallery.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class StickerGalleryRoutingModule {}
