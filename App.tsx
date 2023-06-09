// packages
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';

// lib
import theme from '@assets/theme';

// context
import { UserProvider } from '@context/User';
import { FirebaseProvider } from '@context/Firebase';

// navigation
import AppStack from '@stacks/App';

// prevents splash screen from auto hiding while the fonts are loaded
SplashScreen.preventAutoHideAsync();

const navigationTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: theme.colors.backgroundPrimary,
		border: theme.colors.backgroundSecondary,
		notification: theme.colors.buttonActive,
		primary: theme.colors.backgroundPrimary,
		text: theme.colors.foregroundSecondary,
	},
};

const App: React.FC = () => {
	// fonts
	const [fontsLoaded] = useFonts({
		montserrat: require('@assets/fonts/Montserrat-Regular.ttf'),
		'montserrat-black': require('@assets/fonts/Montserrat-Black.ttf'),
		'montserrat-bold': require('@assets/fonts/Montserrat-Bold.ttf'),
	});

	// after the custom fonts have loaded, we can hide the splash screen and display the app screen.
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View onLayout={onLayoutRootView} style={styles.layoutContainer}>
			<FirebaseProvider>
				<UserProvider>
					<ThemeProvider theme={theme}>
						<NavigationContainer theme={navigationTheme}>
							<AppStack />
						</NavigationContainer>
					</ThemeProvider>
				</UserProvider>
			</FirebaseProvider>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	layoutContainer: {
		flex: 1,
	},
});
