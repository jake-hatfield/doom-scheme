// react
import { createContext } from 'react';

// packages
import { getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';

// config
import config from '@lib/config/firebase';

// const app = getApp();

// if (!app) initializeApp(config);

// const database = initializeFirestore(app);

const Firebase = {};

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
