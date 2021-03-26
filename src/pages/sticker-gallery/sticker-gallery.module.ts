import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StickerGalleryComponent } from 'src/pages/sticker-gallery/sticker-gallery.component';
import { StickerItemComponent } from './components/sticker-item/sticker-item.component';
import { InfoComponent } from './info/info.component';
import { StickerDesignService } from './service/sticker-design.service';
import { StickerGalleryRoutingModule } from './sticker-gallery-routing.module';

@NgModule({
  declarations: [StickerGalleryComponent, StickerItemComponent, InfoComponent],
  imports: [CommonModule, HttpClientModule, StickerGalleryRoutingModule],
  providers: [StickerDesignService],
  exports: [
    StickerGalleryComponent,
    StickerItemComponent,
    InfoComponent,
    RouterModule,
  ],
})
export class StickerGalleryModule {}
