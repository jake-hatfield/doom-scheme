// react
import { useState } from 'react';

// packages
import { Pressable, StyleSheet, View } from 'react-native';

// components
import Box from '@components/utilities/Box';
import Text from '@components/utilities/Text';

// assets
import theme from '@assets/theme';

// types
import type { Dispatch, SetStateAction } from 'react';
interface Props {
	index: number;
	isActive: boolean;
	item: {
		id: string;
		onPress: Dispatch<SetStateAction<boolean>>;
		title: string;
	};
	setActiveIndex: Dispatch<SetStateAction<number>>;
}
const Tab: React.FC<Props> = ({
	index,
	isActive,
	item: { id, onPress, title },
	setActiveIndex,
}) => {
	return (
		<Pressable
			key={id}
			onPress={() => {
				onPress((prev) => !prev);
				setActiveIndex(index);
			}}
		>
			<View
				style={[
					styles.buttonContainer,
					isActive
						? {
								borderBottomColor: theme.colors.buttonActive,
								borderBottomWidth: 4,
								paddingBottom: theme.spacing.m,
						  }
						: { paddingBottom: theme.spacing.l },
				]}
			>
				<Text style={styles.text} variant='body'>
					{title}
				</Text>
			</View>
		</Pressable>
	);
};

export default Tab;

const styles = StyleSheet.create({
	buttonContainer: {
		paddingHorizontal: theme.spacing.s,
	},
	text: {
		fontWeight: '800',
	},
});
