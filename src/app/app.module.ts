import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { PagesModule } from 'src/pages/pages.module';
import { StickerGalleryComponent } from 'src/pages/sticker-gallery/sticker-gallery.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PagesModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'sticker-gallery', component: StickerGalleryComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
