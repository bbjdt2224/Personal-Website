import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StickerGalleryComponent } from 'src/pages/sticker-gallery/sticker-gallery.component';
import { StickerItemComponent } from './components/sticker-item/sticker-item.component';
import { StickerDesignService } from './service/sticker-design.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StickerGalleryComponent, StickerItemComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [StickerDesignService],
  exports: [StickerGalleryComponent, StickerItemComponent],
})
export class StickerGalleryModule {}
