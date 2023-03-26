// react
import { useState } from 'react';

// packages
import { ScrollView, StyleSheet } from 'react-native';

// components
import Box from '@components/utilities/Box';
import Button from '@components/utilities/Button';
import ButtonIcon from '@components/utilities/ButtonIcon';
import Input from '@components/utilities/Input';
import Layout from '@components/layout/Layout';
import Text from '@components/utilities/Text';

// lib
import { setWelcomeMessage } from '@lib/utilities/dateTime';

// assets
import theme from '@assets/theme';

const welcomeMessage = setWelcomeMessage('Jake');

// types
interface Props {}

const Home: React.FC<Props> = () => {
	// state
	const [screen, setScreen] = useState<'dictionary' | 'thesaurus' | null>(null);
	const [inputValue, setInputValue] = useState('');

	return (
		<Layout>
			<Text variant='header'>{welcomeMessage}</Text>
			<Box style={styles.headerButtonsContainer}>
				{!screen ? (
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<Button onPress={() => setScreen('dictionary')} title='Highlight' />
						<Button
							onPress={() => setScreen('dictionary')}
							style={styles.pillButton}
							title='Complete'
						/>
						<Button
							onPress={() => setScreen('dictionary')}
							style={styles.pillButton}
							title='Dictionary'
						/>
						<Button
							onPress={() => setScreen('thesaurus')}
							style={styles.pillButton}
							title='Thesaurus'
						/>
					</ScrollView>
				) : (
					<>
						<ButtonIcon
							icon='close'
							onPress={() => setScreen(null)}
							title='Clear'
						/>
						{screen === 'dictionary' ? (
							<Button
								onPress={() => setScreen('dictionary')}
								title='Dictionary'
							/>
						) : (
							<Button
								onPress={() => setScreen('thesaurus')}
								style={{ marginLeft: theme.spacing.s }}
								title='Thesaurus'
							/>
						)}
					</>
				)}
			</Box>
			<Box style={styles.mainContentContainer}>
				{!screen ? (
					<Box>
						<ScrollView
							contentInsetAdjustmentBehavior='automatic'
							style={{ height: '100%' }}
						>
							<Input setValue={setInputValue} value={inputValue} />
						</ScrollView>
					</Box>
				) : screen === 'dictionary' ? (
					<Text variant='body'>Dictionary</Text>
				) : screen === 'thesaurus' ? (
					<Text variant='body'>Thesaurus</Text>
				) : (
					<Text>Something went wrong</Text>
				)}
			</Box>
		</Layout>
	);
};

export default Home;

const styles = StyleSheet.create({
	headerButtonsContainer: {
		flexDirection: 'row',
		marginTop: theme.spacing.xl,
	},
	mainContentContainer: {
		marginTop: theme.spacing.l,
	},
	pillButton: { marginLeft: theme.spacing.s },
});
