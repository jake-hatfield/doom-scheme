// packages
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// env
import { FIREBASE_API_URL } from '@env';

const firebaseConfig = {
	apiKey: FIREBASE_API_URL,
	authDomain: 'doom-scheme.firebaseapp.com',
	projectId: 'doom-scheme',
	storageBucket: 'doom-scheme.appspot.com',
	messagingSenderId: '933728118843',
	appId: '1:933728118843:web:f25fe4b5fe83bfb4b8d41e',
	databaseURL: 'https://doom-scheme.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
