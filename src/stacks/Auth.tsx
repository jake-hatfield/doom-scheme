// packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';

const Auth = () => {
	const AuthStack = createNativeStackNavigator();
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
