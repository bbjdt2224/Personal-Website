import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { StickerGalleryModule } from './sticker-gallery/sticker-gallery.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [StickerGalleryModule],
  exports: [HomeComponent],
})
export class PagesModule {}
