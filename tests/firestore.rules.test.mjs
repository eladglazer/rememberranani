// Runs inside the Firestore emulator: npm run test:rules
import { readFileSync } from 'node:fs';
import { after, before, beforeEach, describe, test } from 'node:test';
import { assertFails, assertSucceeds, initializeTestEnvironment } from '@firebase/rules-unit-testing';
import {
  addDoc, collection, deleteDoc, doc, getDoc, getDocs, increment,
  query, serverTimestamp, setDoc, updateDoc, where,
} from 'firebase/firestore';

const message = (extra = {}) => ({
  name: 'Friend', relation: 'Golani', message: 'We miss you.', lang: 'en',
  status: 'pending', timestamp: serverTimestamp(), ...extra,
});

for (const [file, final] of [['firestore.rules', true], ['firestore.transition.rules', false]]) {
  describe(file, () => {
    let env;
    let db;

    before(async () => {
      env = await initializeTestEnvironment({
        projectId: final ? 'demo-ranani-final' : 'demo-ranani-transition',
        firestore: { rules: readFileSync(file, 'utf8'), host: '127.0.0.1', port: 8080 },
      });
    });
    after(() => env.cleanup());

    beforeEach(async () => {
      await env.clearFirestore();
      await env.withSecurityRulesDisabled(async (ctx) => {
        const admin = ctx.firestore();
        await setDoc(doc(admin, 'candles/counter'), { count: 108 });
        await setDoc(doc(admin, 'depoiments/approved'), { name: 'Reuven', message: 'Dance among the angels', status: 'approved' });
        await setDoc(doc(admin, 'depoiments/pending'), { name: 'Someone', message: 'Not reviewed yet', status: 'pending' });
        await setDoc(doc(admin, 'depoiments/legacy'), { name: 'Old site', message: 'No status field' });
      });
      db = env.unauthenticatedContext().firestore();
    });

    test('anyone can read the candle count', () => assertSucceeds(getDoc(doc(db, 'candles/counter'))));
    test('lighting a candle adds exactly one', () => assertSucceeds(updateDoc(doc(db, 'candles/counter'), { count: increment(1) })));
    test('the count cannot jump', () => assertFails(updateDoc(doc(db, 'candles/counter'), { count: increment(2) })));
    test('the count cannot be overwritten', () => assertFails(setDoc(doc(db, 'candles/counter'), { count: 1 })));
    test('the counter cannot be deleted', () => assertFails(deleteDoc(doc(db, 'candles/counter'))));
    test('no other candle documents', () => assertFails(setDoc(doc(db, 'candles/other'), { count: 1 })));

    test('a pending message can be sent', () => assertSucceeds(addDoc(collection(db, 'depoiments'), message())));
    test('a message cannot approve itself', () => assertFails(addDoc(collection(db, 'depoiments'), message({ status: 'approved' }))));
    test('a name is required', () => assertFails(addDoc(collection(db, 'depoiments'), message({ name: '' }))));
    test('names are capped at 80', () => assertFails(addDoc(collection(db, 'depoiments'), message({ name: 'x'.repeat(81) }))));
    test('messages are capped at 2000', () => assertFails(addDoc(collection(db, 'depoiments'), message({ message: 'x'.repeat(2001) }))));
    test('no extra fields', () => assertFails(addDoc(collection(db, 'depoiments'), message({ link: 'http://spam' }))));
    test('the time must be the server time', () => assertFails(addDoc(collection(db, 'depoiments'), message({ timestamp: new Date(0) }))));
    test('messages cannot be edited', () => assertFails(updateDoc(doc(db, 'depoiments/approved'), { message: 'changed' })));
    test('messages cannot be deleted', () => assertFails(deleteDoc(doc(db, 'depoiments/approved'))));
    test('approved messages are readable', () => assertSucceeds(getDoc(doc(db, 'depoiments/approved'))));
    test('the approved-only query works', () => assertSucceeds(getDocs(query(collection(db, 'depoiments'), where('status', '==', 'approved')))));

    if (final) {
      test('pending messages stay hidden', () => assertFails(getDoc(doc(db, 'depoiments/pending'))));
      test('listing every message is refused', () => assertFails(getDocs(collection(db, 'depoiments'))));
      test('a message without status is refused', () => {
        const { status, ...rest } = message();
        return assertFails(addDoc(collection(db, 'depoiments'), rest));
      });
    } else {
      test('the old site can still list every message', () => assertSucceeds(getDocs(collection(db, 'depoiments'))));
      test('the old site can still send a message without status', () =>
        assertSucceeds(addDoc(collection(db, 'depoiments'), { name: 'Old', message: 'Hi', timestamp: serverTimestamp() })));
    }
  });
}
