import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private auth: Auth) {}

  registrar({email, clave}: any){
    return createUserWithEmailAndPassword(this.auth, email, clave)
  }

  login({ email, clave }: any) {
    return signInWithEmailAndPassword(this.auth, email, clave);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

}
