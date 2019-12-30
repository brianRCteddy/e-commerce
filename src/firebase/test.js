import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('EeUjUMptgjvfUI0uoIwz').collection('cartItems').doc('DcrHBRpvenO8oVdcd23W');
firestore.doc('/users/EeUjUMptgjvfUI0uoIwz/cartItems/DcrHBRpvenO8oVdcd23W');
firestore.collection('/users/EeUjUMptgjvfUI0uoIwz/cartItems');
