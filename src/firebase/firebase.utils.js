import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCSKxPpF1_Dbt5E-pq_U3aaPlqtXCVByfQ',
	authDomain: 'clothes-ecommerce.firebaseapp.com',
	databaseURL: 'https://clothes-ecommerce.firebaseio.com',
	projectId: 'clothes-ecommerce',
	storageBucket: 'clothes-ecommerce.appspot.com',
	messagingSenderId: '28667996540',
	appId: '1:28667996540:web:6008194bef9c2bda25dcf9',
	measurementId: 'G-YRXY66W038'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
