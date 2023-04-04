// react
import { useContext, useEffect } from 'react';

// packages
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

// components
import Layout from '@components/layout/Layout';
import Text from '@components/utilities/Text';

// context
import { UserContext } from '@context/User';

const Loading: React.FC = () => {
	// context
	const [_, setUser] = useContext(UserContext);

	useEffect(() => {
		setTimeout(async () => {
			setUser((state) => ({ ...state, isLoggedIn: false }));
		}, 2000);
	}, []);

	return (
		<Layout>
			<View style={styles.container}>
				<Text variant='header'>Doom Scheme</Text>
				<LottieView
					autoPlay
					loop
					source={require('@assets/loadingAnimation.json')}
					style={styles.animation}
				/>
			</View>
		</Layout>
	);
};

export default Loading;

const styles = StyleSheet.create({
	animation: {
		width: '100%',
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
});
