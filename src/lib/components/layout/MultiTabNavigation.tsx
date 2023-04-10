// react
import { useState } from 'react';

// packages
import { StyleSheet } from 'react-native';

// components
import Box from '@components/utilities/Box';
import Tab from '@components/layout/Tab';
import Text from '@components/utilities/Text';

// assets
import theme from '@assets/theme';

// types
import type { Dispatch, SetStateAction } from 'react';
interface Props {
	items: {
		id: string;
		onPress: Dispatch<SetStateAction<boolean>>;
		title: string;
	}[];
}

const MultiTabNavigation: React.FC<Props> = ({ items }) => {
	// state
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<Box style={styles.itemsContainer}>
			<Box style={styles.detailsContainer}>
				{items.map((item, i) => (
					<Tab
						key={item.id}
						index={i}
						isActive={i === activeIndex}
						item={item}
						setActiveIndex={setActiveIndex}
					/>
				))}
			</Box>
		</Box>
	);
};

export default MultiTabNavigation;

const styles = StyleSheet.create({
	buttonContainer: {
		// marginLeft: theme.spacing.xl,
	},
	detailsContainer: {
		alignItems: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: theme.spacing.m,
	},
	itemsContainer: {
		borderBottomColor: theme.colors.backgroundSecondary,
		borderBottomWidth: 1,
		marginTop: theme.spacing.m,
	},
	text: {
		fontWeight: '800',
	},
});
