// packages
import { StyleSheet, View } from 'react-native';

// theme
import theme from '@assets/theme';

// types
interface Props {
	children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.backgroundSecondary,
		borderRadius: theme.borderRadii.borderRadiusPrimary,
		padding: theme.spacing.xl,
	},
});

export default Card;
