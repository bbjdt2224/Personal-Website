import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  userData: User;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public afStorage: AngularFireStorage,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.userData = JSON.parse(localStorage.getItem('user'));
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.getUserData(user.uid);
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Sign in with email/password
  signIn(email, password) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['stickers/dashboard']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  signUp(email, password, displayName) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.sendVerificationMail();
        this.setUserData({ ...result.user, displayName: displayName });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verfificaiton when new user sign up
  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((u) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['stickers/verify-email']);
      });
  }

  // Reset Forggot password
  forgotPassword(passwordResetEmail) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Returns true when user is admin
  get isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(this.userData);
    return user !== null && user.admin;
  }

  // Sign in with Google
  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  authLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['stickers/dashboard']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  async getUserData(uid) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${uid}`
    );
    const user = (await userRef.get().toPromise()).data();
    this.userData = user;
    localStorage.setItem('user', JSON.stringify(this.userData));
    JSON.parse(localStorage.getItem('user'));
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: this.userData.displayName
        ? this.userData.displayName
        : user.displayName,
      photoURL: this.userData.photoURL ? this.userData.photoURL : user.photoURL,
      emailVerified: user.emailVerified,
      createContact: this.userData.createContact
        ? this.userData.createContact
        : false,
      address: this.userData.address ? this.userData.address : null,
      website: this.userData.website ? this.userData.website : null,
      phone: this.userData.phone ? this.userData.phone : null,
      company: this.userData.company ? this.userData.company : null,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    return userRef.set(userData, {
      merge: true,
    });
  }

  updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${this.userData.uid}`
    );
    const userData: User = {
      uid: this.userData.uid,
      email: this.userData.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: this.userData.emailVerified,
      createContact: user.createContact,
      address: user.address,
      website: user.website,
      phone: user.phone,
      company: user.company,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    return userRef.set(userData, {
      merge: true,
    });
  }

  async getAllUsers() {
    const usersRef: AngularFirestoreCollection<User> = this.afs.collection(
      'users'
    );
    const collection = await usersRef.get().toPromise();
    return collection.docs.map((d) => {
      return { uid: d.id, ...d.data() };
    });
  }

  async uploadImage(userId, image) {
    const response = await this.afStorage
      .upload('users/' + userId, image)
      .snapshotChanges()
      .toPromise();
    return this.afStorage
      .ref('users/' + userId)
      .getDownloadURL()
      .toPromise();
  }

  updateProfile(user: User) {
    this.afAuth.currentUser.then((u) =>
      u
        .updateProfile({
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
        .then((result) => console.log(result))
    );
  }

  // Sign out
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['stickers/sign-in']);
    });
  }
}
