// packages
import { SafeAreaView, StyleSheet } from 'react-native';

// assets
import theme from '@assets/theme';

// types
interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return <SafeAreaView style={styles.rootContainer}>{children}</SafeAreaView>;
};

export default Layout;

const styles = StyleSheet.create({
	rootContainer: {
		margin: theme.spacing.l,
	},
});
