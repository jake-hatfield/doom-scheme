// react
import { useContext } from 'react';

// packages
import { createStackNavigator } from '@react-navigation/stack';

// context
import { UserContext } from '@context/User';

// stacks
import Auth from '@stacks/Auth';
import Main from '@stacks/Main';

// screens
import Loading from '@screens/Loading';

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
			{user.isLoggedIn === null ? (
				<AppStack.Screen component={Loading} name='Loading' />
			) : user.isLoggedIn ? (
				<AppStack.Screen component={Main} name='Main' />
			) : (
				<AppStack.Screen component={Auth} name='Auth' />
			)}
		</AppStack.Navigator>
	);
};

export default App;
