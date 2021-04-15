import { Component, Input } from '@angular/core';
import { Design } from '../../interfaces/design.interface';

@Component({
  selector: 'jt-sticker-item',
  templateUrl: './sticker-item.component.html',
  styleUrls: ['./sticker-item.component.scss'],
})
export class StickerItemComponent {
  @Input() design: Design;
}
