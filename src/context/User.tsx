// react
import React, { createContext, useState } from 'react';

// types
import type { Dispatch, SetStateAction } from 'react';

const UserContext = createContext<[User, Dispatch<SetStateAction<User>>]>([
	{ email: '', id: '', isLoggedIn: null, username: '' },
	() => {},
]);

// types
interface Props {
	children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
	const [state, setState] = useState<User>({
		email: '',
		id: '',
		isLoggedIn: null,
		username: '',
	});

	return (
		<UserContext.Provider value={[state, setState]}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
