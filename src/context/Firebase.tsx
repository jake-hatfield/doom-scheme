// react
import { createContext } from 'react';

// packages
import { FirebaseError, initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// config
import config from '@lib/config/firebase';

// types
import type { User } from '$types/app/User';

// initialize Firebase
const app = initializeApp(config);
const auth = getAuth(app);
const database = getFirestore(app);

const Firebase = {
	createUser: async (user: User) => {
		try {
			await createUserWithEmailAndPassword(auth, user.email, user.password);

			const uid = Firebase.getUser()?.uid;

			if (!uid) return;

			delete user.password;

			return { ...user, uid };
		} catch (error) {
			if (error instanceof FirebaseError) {
				console.log('Error @createUser ', error.message);
			} else {
				console.log(error);
			}
		}
	},
	getUser: () => auth.currentUser,
	signIn: async () => {
		try {
		} catch (error) {
			if (error instanceof FirebaseError) {
				console.log('Error @signInAnonymously ', error.message);
			} else {
				console.log(error);
			}
		}
	},
};

// props
interface Props {
	children: React.ReactNode;
}

const FirebaseContext = createContext();

const FirebaseProvider: React.FC<Props> = ({ children }) => {
	return (
		<FirebaseContext.Provider value={Firebase}>
			{children}
		</FirebaseContext.Provider>
	);
};

export { FirebaseContext, FirebaseProvider };
