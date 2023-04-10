import { useState } from 'react';

// packages
import shortnum from 'number-shortener';
import {
	Alert,
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// components
import Box from '@components/utilities/Box';
import Button from '@components/utilities/Button';
import ButtonIcon from '@components/utilities/ButtonIcon';
import Layout from '@components/layout/Layout';
import MultiTabNavigation from '@components/layout/MultiTabNavigation';
import Text from '@components/utilities/Text';

// assets
import theme from '@assets/theme';
import { Ionicons } from '@expo/vector-icons';

// types
interface Props {
	navigation: NavigationProp<any, any>;
}

const Profile: React.FC<Props> = ({ navigation }) => {
	// state
	const [currentView, setCurrentView] = useState<
		'work' | 'likes' | 'inspiration'
	>('work');

	return (
		<>
			<View style={styles.backgroundImageContainer}>
				<ImageBackground
					resizeMode='cover'
					source={{
						uri: 'https://jake-hatfield.com/images/items/changelogs/v0.0.1.jpg',
					}}
					style={styles.backgroundImage}
				/>
			</View>
			<Layout>
				<ScrollView style={styles.avatarContainer}>
					<Box style={styles.headerContainer}>
						<Image
							source={{
								uri: 'https://avatars.githubusercontent.com/u/57407860?v=4',
								height: 100,
								width: 100,
							}}
							style={styles.avatar}
						/>
						<Box style={styles.detailsContainer}>
							{/* change this to "Settings screen" */}
							<ButtonIcon
								icon='settings-outline'
								onPress={() => navigation.navigate('Discover')}
								title='Settings'
							/>
							<Button
								onPress={() => Alert.alert('Edit profile...')}
								style={styles.button}
								title='Edit'
							/>
						</Box>
					</Box>
					<Box style={styles.user}>
						<Text variant='header'>Jake Hatfield</Text>
						<Text variant='subheader'>@jake-hatfield</Text>
					</Box>
					<Box style={styles.user}>
						<Text variant='body'>
							I'm a self-taught full-stack software engineer running a
							bootstrapped solo business in Houston, TX. 📌
						</Text>
					</Box>
					<Box
						style={[
							styles.iconsDetailsContainer,
							{ marginTop: theme.spacing.m },
						]}
					>
						<Box style={styles.detailsContainer}>
							<Ionicons name='location-outline' size={16} style={styles.icon} />
							<Text style={styles.detailsText} variant='body'>
								Houston, TX
							</Text>
						</Box>
						<Box
							style={[
								styles.detailsContainer,
								{ marginLeft: theme.spacing.xl },
							]}
						>
							<Ionicons name='calendar-outline' size={16} style={styles.icon} />
							<Text style={styles.detailsText} variant='body'>
								Mar 4, 2023
							</Text>
						</Box>
					</Box>
					<Box style={styles.iconsDetailsContainer}>
						<Box style={styles.detailsContainer}>
							<Text style={styles.socialText} variant='body'>
								{shortnum(3000000).toUpperCase()}
							</Text>
							<Text style={styles.detailsText} variant='body'>
								followers
							</Text>
						</Box>
						<Box
							style={[
								styles.detailsContainer,
								{ marginLeft: theme.spacing.xl },
							]}
						>
							<Text style={styles.socialText} variant='body'>
								{shortnum(1600).toUpperCase()}
							</Text>
							<Text style={styles.detailsText} variant='body'>
								following
							</Text>
						</Box>
					</Box>
					<MultiTabNavigation
						items={[
							{
								id: '0fd137cb-9531-4deb-b392-d07d3c3be657',
								title: 'Work',
								onPress: () => setCurrentView('work'),
							},
							{
								id: '70a9c390-4c74-47b6-a8d0-7f315c6917e8',
								title: 'Likes',
								onPress: () => setCurrentView('likes'),
							},
							{
								id: '43ef38b2-98ca-4be9-8214-be015143410c',
								title: 'Inspiration',
								onPress: () => setCurrentView('inspiration'),
							},
						]}
					/>
					{currentView === 'work' ? (
						<>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 1</Text>
							</Box>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 2</Text>
							</Box>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 3</Text>
							</Box>
						</>
					) : currentView === 'likes' ? (
						<>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 4</Text>
							</Box>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 5</Text>
							</Box>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 6</Text>
							</Box>
						</>
					) : (
						<>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 7</Text>
							</Box>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 8</Text>
							</Box>
							<Box style={styles.itemContainer}>
								<Text style={styles.itemText}>Work 9</Text>
							</Box>
						</>
					)}
				</ScrollView>
			</Layout>
		</>
	);
};

export default Profile;

const styles = StyleSheet.create({
	avatar: {
		borderRadius: theme.borderRadii.borderRadiusRound,
		borderWidth: 2,
		borderColor: theme.colors.backgroundSecondary,
	},
	avatarContainer: {
		marginTop: -48,
	},
	backgroundImage: {
		height: 124,
	},
	backgroundImageContainer: {
		borderBottomWidth: 1,
		borderColor: theme.colors.backgroundSecondary,
	},
	button: { marginLeft: theme.spacing.s },
	headerContainer: {
		alignItems: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	icon: {
		color: theme.colors.foregroundTertiary,
	},
	itemContainer: {
		alignItems: 'center',
		backgroundColor: theme.colors.backgroundTertiary,
		height: theme.spacing.xxl,
		justifyContent: 'center',
		marginTop: theme.spacing.m,
	},
	itemText: {
		color: theme.colors.foregroundPrimary,
	},
	itemsContainer: { marginTop: theme.spacing.xl },
	detailsContainer: {
		alignItems: 'flex-end',
		flexDirection: 'row',
		marginTop: theme.spacing.m,
	},
	detailsText: {
		color: theme.colors.foregroundTertiary,
		marginLeft: theme.spacing.s,
	},
	iconsDetailsContainer: {
		flexDirection: 'row',
	},
	socialText: {
		color: theme.colors.foregroundPrimary,
		fontWeight: 'bold',
		marginLeft: theme.spacing.s,
	},
	user: {
		marginTop: theme.spacing.l,
	},
});
