// packages
import { Pressable, StyleSheet, View } from 'react-native';

// components
import Text from '@components/utilities/Text';

// lib
import theme from '@assets/theme';

// types
interface Props {
	onPress: () => void;
	style?: { [key: string]: string | number };
	title: string;
}

const Button: React.FC<Props> = ({ onPress, style, title }) => {
	return (
		<Pressable onPress={onPress}>
			<View style={[styles.container, style]}>
				<Text style={styles.text} variant='body'>
					{title}
				</Text>
			</View>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: theme.spacing.l,
		paddingVertical: theme.spacing.l,
		backgroundColor: theme.colors.buttonActive,
		borderRadius: theme.borderRadii.borderRadiusPrimary,
	},
	text: {
		fontSize: 14,
		fontFamily: 'montserrat-bold',
		color: theme.colors.foregroundSecondary,
		textAlign: 'center',
	},
});
