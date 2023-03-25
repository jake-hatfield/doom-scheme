// packages
// import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// assets
import theme from '@assets/theme';

// screens
import Compose from '@screens/Compose';
import Discover from '@screens/Discover';
import Profile from '@screens/Profile';

// navigation
const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
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
			<Tab.Screen
				component={Compose}
				name='Compose'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name='create-outline' size={size} />
					),
				}}
			/>
			<Tab.Screen
				component={Discover}
				name='Discover'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name='earth-outline' size={size} />
					),
				}}
			/>
			<Tab.Screen
				component={Profile}
				name='Profile'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name='person-outline' size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
