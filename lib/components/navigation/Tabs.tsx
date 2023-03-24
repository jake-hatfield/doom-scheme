// packages
// import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';

// assets
import theme from '@assets/theme';

// screens
import Discover from '@screens/Discover';
import Home from '@screens/Home';
import Library from 'lib/screens/Library';

// lib
import { setWelcomeMessage } from '@utils/dateTime';

// navigation
const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			id='a27d92b6-ca78-11ed-afa1-0242ac120002'
			screenOptions={{
				// tabBarBackground: () => <BlurView intensity={100} tint='default' />,
				tabBarActiveTintColor: theme.colors.buttonActive,
				tabBarItemStyle: {
					// paddingVertical: theme.spacing.s,
				},
				tabBarStyle: {
					paddingVertical: theme.spacing.s,
					backgroundColor: theme.colors.backgroundPrimary,
				},
				tabBarInactiveTintColor: theme.colors.foregroundSecondary,
			}}
		>
			<Tab.Screen
				component={Home}
				name='Home'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name='home-outline' size={size} />
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
				component={Library}
				name='Library'
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons color={color} name='albums-outline' size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
