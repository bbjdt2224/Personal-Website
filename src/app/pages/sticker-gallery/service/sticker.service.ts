import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Link } from '../interfaces/link';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class StickerService {
  constructor(public afs: AngularFirestore) {}

  async getUserById(userId) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${userId}`
    );
    return userRef.get().toPromise();
  }

  async getAllUserLinks(userId) {
    const linkRef: AngularFirestoreCollection<Link> = this.afs.collection(
      `users/${userId}/links`
    );
    const collection = await linkRef.get().toPromise();
    return collection.docs.map((d) => {
      return { uid: d.id, ...d.data() };
    });
  }

  addLinkToUser(userId, link: Link) {
    const linkRef: AngularFirestoreCollection<Link> = this.afs.collection(
      `users/${userId}/links`
    );
    return linkRef.add(link);
  }

  updateLink(userId, linkId, link: Link) {
    const linkRef: AngularFirestoreDocument<Link> = this.afs.doc(
      `users/${userId}/links/${linkId}`
    );
    return linkRef.update(link);
  }

  removeLinkFromUser(userId, linkId) {
    const linkRef: AngularFirestoreDocument<Link> = this.afs.doc(
      `users/${userId}/links/${linkId}`
    );
    return linkRef.delete();
  }
}
