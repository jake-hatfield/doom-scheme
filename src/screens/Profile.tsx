// packages
import { Image, StyleSheet } from 'react-native';

// components
import Box from '@components/utilities/Box';
import Layout from '@components/layout/Layout';
import Text from '@components/utilities/Text';

// assets
import theme from '@assets/theme';

const Profile: React.FC = () => {
	return (
		<Layout>
			<Box style={styles.headerContainer}>
				<Image
					source={{
						uri: 'https://avatars.githubusercontent.com/u/57407860?v=4',
						height: theme.spacing.xxxl,
						width: theme.spacing.xxxl,
					}}
					style={styles.avatar}
				/>
				<Box style={styles.headerText}>
					<Text variant='header'>Jake Hatfield</Text>
					<Text variant='subheader'>jake-hatfield</Text>
				</Box>
			</Box>
		</Layout>
	);
};

export default Profile;

const styles = StyleSheet.create({
	avatar: {
		borderRadius: theme.borderRadii.borderRadiusRound,
	},
	headerContainer: {
		flexDirection: 'row',
	},
	headerText: {
		marginLeft: theme.spacing.l,
	},
});
