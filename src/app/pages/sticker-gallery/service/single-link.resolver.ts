import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class SingleUseResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.params);
    const type = route.params.type;
    const value = route.params.value;

    let link;

    switch (type) {
      case 'snapchat':
        link = 'https://snapchat.com/add/' + value;
        break;
      case 'instagram':
        link = 'https://instagram.com/' + value;
        break;
      case 'url':
        link = value;
        break;
      case 'facebook':
        link = 'https://facebook.com/' + value;
        break;
      case 'github':
        link = 'https://github.com/' + value;
        break;
      case 'linkedin':
        link = 'https://linkedin.com/in/' + value;
        break;
      case 'reddit':
        link = 'https://reddit.com/user/' + value;
        break;
      case 'tiktok':
        link = 'https://tiktok.com/@' + value.replace('@', '');
        break;
      case 'twitter':
        link = 'https://twitter.com/' + value;
        break;
      default:
        link = 'https://justintrue.me/stickers/info';
        break;
    }

    window.open(link, '_blank');
    return;
  }
}
