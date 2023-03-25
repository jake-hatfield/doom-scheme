// packages
import { StyleSheet, Text, TextInput, View } from 'react-native';

// lib
import theme from '@assets/theme';

// types
import type { Dispatch, SetStateAction } from 'react';

// types
interface Props {
	invalid?: boolean;
	label?: string;
	setValue: Dispatch<SetStateAction<string>>;
	style?: string;
	textInputConfig?: any;
	value: string;
}

const Input: React.FC<Props> = ({
	label,
	invalid = false,
	setValue,
	style,
	textInputConfig,
	value,
}) => {
	const inputStyles = [styles.input];

	// if (invalid) {
	// 	inputStyles.push(styles.invalidInput);
	// }

	return (
		<View style={[styles.inputContainer, style]}>
			{label && (
				<Text style={[styles.label, invalid && styles.invalidLabel]}>
					{label}
				</Text>
			)}

			<TextInput
				style={inputStyles}
				{...textInputConfig}
				value={value}
				onChangeText={setValue}
			/>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	label: {
		color: theme.colors.foregroundSecondary,
		fontSize: 12,
	},
	input: {
		backgroundColor: theme.colors.backgroundSecondary,
		borderRadius: theme.borderRadii.borderRadiusPrimary,
		color: theme.colors.foregroundPrimary,
		fontSize: 16,
		marginTop: theme.spacing.s,
		padding: theme.spacing.s,
	},
	invalidLabel: {
		color: theme.colors.foregroundSecondary,
	},
	invalidInput: {
		backgroundColor: theme.colors.foregroundSecondary,
	},
});
