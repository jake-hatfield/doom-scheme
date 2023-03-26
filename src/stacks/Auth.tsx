// packages
import { createStackNavigator } from '@react-navigation/stack';

// screens
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';

const Auth = () => {
	const AuthStack = createStackNavigator();
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<AuthStack.Screen component={SignIn} name='SignIn' />
			<AuthStack.Screen component={SignUp} name='SignUp' />
		</AuthStack.Navigator>
	);
};

export default Auth;
