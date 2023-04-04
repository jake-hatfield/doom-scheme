// packages
import { Pressable, StyleSheet, View } from 'react-native';

// assets
import { Ionicons } from '@expo/vector-icons';

// lib
import theme from '@assets/theme';

// types
interface Props {
	icon: string;
	onPress: () => void;
	style?: { [key: string]: string | number };
	title: string;
}

const ButtonIcon: React.FC<Props> = ({ icon, onPress, style }) => {
	return (
		<Pressable onPress={onPress}>
			<View style={[styles.container, style]}>
				<Ionicons name={icon} size={24} style={styles.icon} />
			</View>
		</Pressable>
	);
};

export default ButtonIcon;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: theme.spacing.m,
		paddingVertical: theme.spacing.s,
		backgroundColor: theme.colors.backgroundSecondary,
		borderRadius: theme.borderRadii.borderRadiusSecondary,
	},
	icon: {
		color: theme.colors.foregroundPrimary,
	},
	text: {
		fontSize: 12,
		fontWeight: '900',
	},
});
