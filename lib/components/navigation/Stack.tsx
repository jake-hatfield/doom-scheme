// packages
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components
import Dictionary from '@screens/Dictionary';
import Thesaurus from '@screens/Thesaurus';

// navigation
const Stack = createNativeStackNavigator();

const StackScreens = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Dictionary' component={Dictionary} />
			<Stack.Screen name='Thesaurus' component={Thesaurus} />
		</Stack.Navigator>
	);
};

export default StackScreens;
