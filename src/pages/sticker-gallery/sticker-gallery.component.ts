import { Component, OnInit } from '@angular/core';
import { StickerDesignService } from './service/sticker-design.service';
import { Design } from './interfaces/design.interface';

@Component({
  selector: 'jt-sticker-gallery',
  templateUrl: './sticker-gallery.component.html',
  styleUrls: ['./sticker-gallery.component.scss'],
})
export class StickerGalleryComponent implements OnInit {
  constructor(private stickerDesignService: StickerDesignService) {}

  designs: Design[];

  async ngOnInit() {
    await this.stickerDesignService.getDesigns();
    this.designs = this.stickerDesignService.designs;
    console.log(this.designs);
  }
}
