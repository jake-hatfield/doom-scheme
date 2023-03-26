// packages
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// assets
import theme from '@assets/theme';

// screens
import Compose from 'src/screens/Compose';
import Discover from 'src/screens/Discover';
import Profile from 'src/screens/Profile';

// navigation
const MainStack = createBottomTabNavigator();

const Main = () => {
	return (
		<MainStack.Navigator
			id='a27d92b6-ca78-11ed-afa1-0242ac120002'
			screenOptions={{
				tabBarActiveTintColor: theme.colors.buttonActive,
				tabBarItemStyle: {
					// paddingVertical: theme.spacing.s,
				},
				tabBarShowLabel: false,
				tabBarStyle: {
					paddingVertical: theme.spacing.s,
					backgroundColor: theme.colors.backgroundPrimary,
				},
				tabBarInactiveTintColor: theme.colors.foregroundSecondary,
			}}
		>
			<MainStack.Screen
				component={Compose}
				name='Compose'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name='create-outline' size={size} />
					),
				}}
			/>
			<MainStack.Screen
				component={Discover}
				name='Discover'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name='earth-outline' size={size} />
					),
				}}
			/>
			<MainStack.Screen
				component={Profile}
				name='Profile'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name='person-outline' size={size} />
					),
				}}
			/>
		</MainStack.Navigator>
	);
};

export default Main;
