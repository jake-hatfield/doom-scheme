// components
import Layout from '@components/layout/Layout';
import Text from '@components/utilities/Text';
import { setWelcomeMessage } from 'lib/utilities/dateTime';

const welcomeMessage = setWelcomeMessage();

const Home: React.FC = () => {
	return (
		<Layout>
			<Text variant='header'>{welcomeMessage}</Text>
			<Text variant='body'>Hello there!</Text>
		</Layout>
	);
};

export default Home;
