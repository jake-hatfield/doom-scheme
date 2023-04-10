// react
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

// packages
import { uuidv4 } from '@firebase/util';

// components
import Layout from '@components/layout/Layout';
import MultiTabNavigation from '@components/layout/MultiTabNavigation';
import Text from '@components/utilities/Text';

// assets
import theme from '@assets/theme';

const Discover: React.FC = () => {
	const [currentView, setCurrentView] = useState<'following' | 'for-you'>(
		'following'
	);

	const data = [
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
		{ id: uuidv4() },
	];

	return (
		<Layout>
			<Text variant='header'>Discover</Text>
			<MultiTabNavigation
				items={[
					{
						id: '94618b64-d724-47dc-8053-1399cc95777a',
						title: 'Following',
						onPress: () => setCurrentView('following'),
					},
					{
						id: '585871af-417f-4af0-b5a9-ab00874a898e',
						title: 'For you',
						onPress: () => setCurrentView('for-you'),
					},
				]}
			/>
			<View>
				{currentView === 'following' ? (
					<FlatList
						data={data}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<View style={styles.item}>
								<Text variant='body'>{item.id}</Text>
							</View>
						)}
						style={styles.items}
					/>
				) : (
					<View>
						<Text variant='body'>For you</Text>
					</View>
				)}
			</View>
		</Layout>
	);
};

export default Discover;

const styles = StyleSheet.create({
	item: {
		backgroundColor: theme.colors.backgroundSecondary,
		marginTop: theme.spacing.m,
		padding: theme.spacing.xl,
	},
	items: {
		paddingBottom: theme.spacing.xl,
	},
});
