import React, { createContext, useState } from 'react';

const UserContext = createContext([{}, () => {}]);

// types
interface Props {
	children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
	const [state, setState] = useState<{
		email: string;
		id: string;
		isLoggedIn: boolean | null;
		username: string;
	}>({
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
