// react
import { useContext } from 'react';

// packages
import { createStackNavigator } from '@react-navigation/stack';

// context
import { UserContext } from '@context/User';

// stacks
import Auth from '@stacks/Auth';
import Main from '@stacks/Main';

const App = () => {
	// stack
	const AppStack = createStackNavigator();

	// context
	const [user] = useContext(UserContext);

	return (
		<AppStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{!user.isLoggedIn ? (
				<AppStack.Screen component={Auth} name='Auth' />
			) : (
				<AppStack.Screen component={Main} name='Main' />
			)}
		</AppStack.Navigator>
	);
};

export default App;
