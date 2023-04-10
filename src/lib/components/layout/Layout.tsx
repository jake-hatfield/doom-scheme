// packages
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

// assets
import theme from '@assets/theme';

// types
interface Props {
	children: React.ReactNode;
	style?: { [key: string]: string | number };
}

const Layout: React.FC<Props> = ({ children, style }) => {
	return (
		<SafeAreaView style={[styles.innerContainer, style]}>
			<StatusBar />
			<View style={styles.innerContainer}>{children}</View>
		</SafeAreaView>
	);
};

export default Layout;

const styles = StyleSheet.create({
	innerContainer: {
		flex: 1,
		paddingHorizontal: theme.spacing.s,
		paddingVertical: theme.spacing.s,
	},
	rootContainer: {
		flex: 1,
	},
});
