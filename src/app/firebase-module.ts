import { NgModule } from '@angular/core';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

// import { environment } from '../environments/environment';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AuthModule } from '@angular/fire/auth';

// import { FirebaseApp } from '@angular/fire/compat/firebase.app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideMessaging,getMessaging } from '@angular/fire/messaging';

@NgModule({
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),    
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideMessaging(() => getMessaging()),
  ],
  exports: [
    // AngularFireModule,        
    // AngularFireAuthModule,
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    // AngularFireMessagingModule
  ],
})
export class FirebaseModule {}
