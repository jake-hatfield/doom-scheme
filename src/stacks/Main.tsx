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
	// route options
	const screenOptions = ({ route }) => {
		return {
			headerShown: false,
			tabBarActiveTintColor: theme.colors.buttonActive,
			tabBarShowLabel: false,
			tabBarStyle: {
				paddingVertical: theme.spacing.s,
				backgroundColor: theme.colors.backgroundPrimary,
			},
			tabBarInactiveTintColor: theme.colors.foregroundSecondary,
			tabBarIcon: ({ focused }: { focused: boolean }) => {
				let iconName = 'create-outline';

				switch (route.name) {
					case 'Compose': {
						iconName = 'create-outline';
						break;
					}
					case 'Discover': {
						iconName = 'earth-outline';
						break;
					}
					case 'Profile': {
						iconName = 'person-outline';
						break;
					}
					default:
						iconName = 'create-outline';
				}

				return (
					<Ionicons
						color={focused ? theme.colors.buttonActive : '#fff'}
						name={iconName}
						size={24}
					/>
				);
			},
		};
	};

	return (
		<MainStack.Navigator
			id='a27d92b6-ca78-11ed-afa1-0242ac120002'
			screenOptions={screenOptions}
		>
			<MainStack.Screen component={Compose} name='Compose' />
			<MainStack.Screen component={Discover} name='Discover' />
			<MainStack.Screen component={Profile} name='Profile' />
		</MainStack.Navigator>
	);
};

export default Main;
