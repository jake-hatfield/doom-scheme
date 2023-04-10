// react
import { useRef, useState } from 'react';
import {
	Dimensions,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
} from 'react-native';

// packages
import {
	actions,
	RichEditor,
	RichToolbar,
} from 'react-native-pell-rich-editor';
import { WebView } from 'react-native-webview';

// components
import Box from '@components/utilities/Box';
import Button from '@components/utilities/Button';
import ButtonIcon from '@components/utilities/ButtonIcon';
import Input from '@components/utilities/Input';
import Layout from '@components/layout/Layout';
import Text from '@components/utilities/Text';

// lib
import { setWelcomeMessage } from '@utils/dateTime';

// assets
import theme from '@assets/theme';

const welcomeMessage = setWelcomeMessage('Jake');

// types
interface Props {}

const Home: React.FC<Props> = () => {
	// state
	const [screen, setScreen] = useState<'dictionary' | 'thesaurus' | null>(null);
	const [composition, setComposition] = useState('');

	// ref
	const richText = useRef();

	return (
		<Layout>
			<Text variant='header'>{welcomeMessage}</Text>
			<RichToolbar
				actions={[
					actions.setBold,
					actions.setItalic,
					actions.insertBulletsList,
					actions.insertOrderedList,
					actions.keyboard,
				]}
				editor={richText}
				selectedIconTint={theme.colors.buttonActive}
				style={{
					backgroundColor: theme.colors.backgroundPrimary,
				}}
			/>
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
						<ScrollView keyboardDismissMode='on-drag'>
							<KeyboardAvoidingView
								behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
								style={{ flex: 1 }}
								keyboardVerticalOffset={250}
							>
								<RichEditor
									editorStyle={{
										backgroundColor: theme.colors.backgroundSecondary,
										caretColor: theme.colors.buttonActive,
										color: theme.colors.foregroundPrimary,
										placeholderColor: theme.colors.foregroundTertiary,
									}}
									onChange={(text) => {
										setComposition(text);
										console.log('text:', composition);
									}}
									placeholder='Hello there'
									ref={richText}
								/>
							</KeyboardAvoidingView>
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
