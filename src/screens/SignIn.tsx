// react
import { useContext } from 'react';

// packages
import { StyleSheet, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// components
import Button from '@components/utilities/Button';
import Card from '@components/utilities/Card';
import Layout from '@components/layout/Layout';
import Text from '@components/utilities/Text';

// context
import { UserContext } from '@context/User';

// theme
import theme from '@assets/theme';

// types
interface Props {
	navigation: NavigationProp<any, any>;
}

const SignIn: React.FC<Props> = ({ navigation }) => {
	const [_, setUser] = useContext(UserContext);

	return (
		<Layout>
			<View style={styles.container}>
				<Card>
					<Text variant='header'>Sign in</Text>
					<Button
						onPress={() => setUser({ isLoggedIn: true })}
						style={styles.button}
						title='Sign in'
					/>
				</Card>
			</View>
		</Layout>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	button: {
		marginTop: theme.spacing.m,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});
