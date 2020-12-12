import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import Routes from './index';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Routes />
			<FlashMessage position="top" />
		</NavigationContainer>
	);
};

export default App;
