import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"tp-sala-de-juegos-b2de0","appId":"1:213359458543:web:e012ed7c0e1c3647b7831a","storageBucket":"tp-sala-de-juegos-b2de0.appspot.com","apiKey":"AIzaSyCmj8Mo3UzgtFMuDLXLAXv3VqHc8hXZNA8","authDomain":"tp-sala-de-juegos-b2de0.firebaseapp.com","messagingSenderId":"213359458543","measurementId":"G-9K8E3L96MS"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
