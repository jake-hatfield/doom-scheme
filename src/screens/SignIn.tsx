// packages
import { StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// components
import Button from '@components/utilities/Button';
import Layout from '@components/layout/Layout';
import Text from '@components/utilities/Text';

// types
interface Props {
	navigation: NavigationProp<any, any>;
}

const SignIn: React.FC<Props> = ({ navigation }) => {
	return (
		<Layout>
			<Text variant='header'>Sign in screen</Text>
			<Button onPress={() => navigation.navigate('SignUp')} title='Navigate' />
		</Layout>
	);
};

export default SignIn;

const styles = StyleSheet.create({});
