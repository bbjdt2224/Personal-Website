import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StickerDesignService } from './service/sticker-design.service';
import { Design } from './interfaces/design.interface';

@Component({
  selector: 'jt-sticker-gallery',
  templateUrl: './sticker-gallery.component.html',
  styleUrls: ['./sticker-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StickerGalleryComponent implements OnInit {
  constructor(private stickerDesignService: StickerDesignService) {}

  designs: Design[];

  currentStock = true;

  get banner() {
    if (this.currentStock) {
      return 'All Designs In Stock $2';
    } else {
      return 'Custom Designs $5';
    }
  }

  async ngOnInit() {
    await this.stickerDesignService.getDesigns();
    this.designs = this.stickerDesignService.designs;
    console.log(this.designs);
  }
}
