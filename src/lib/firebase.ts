import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore/lite';

// Public web config: access is governed by Firestore security rules, not by this key.
const app = initializeApp({
  apiKey: 'AIzaSyDJq13DXmft4_6s5nB61QO8qQdD04pZgAc',
  authDomain: 'ranani-memorial.firebaseapp.com',
  projectId: 'ranani-memorial',
  storageBucket: 'ranani-memorial.firebasestorage.app',
  messagingSenderId: '570082970027',
  appId: '1:570082970027:web:906c5c07628f57c3282aee',
});

export const db = getFirestore(app);

// Local testing only: PUBLIC_FIRESTORE_EMULATOR=1 npm run dev talks to the emulator, never production
if (import.meta.env.PUBLIC_FIRESTORE_EMULATOR) connectFirestoreEmulator(db, '127.0.0.1', 8080);

export function store(key: string, value?: string): string | null {
  try {
    if (value !== undefined) localStorage.setItem(key, value);
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
