// packages
import { SafeAreaView, StyleSheet, View } from 'react-native';

// assets
import theme from '@assets/theme';

// types
interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<SafeAreaView style={styles.rootContainer}>
			<View style={styles.innerContainer}>{children}</View>
		</SafeAreaView>
	);
};

export default Layout;

const styles = StyleSheet.create({
	innerContainer: {
		flex: 1,
		paddingHorizontal: theme.spacing.l,
		paddingVertical: theme.spacing.l,
	},
	rootContainer: {
		flex: 1,
	},
});
