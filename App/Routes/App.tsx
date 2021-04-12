import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import Routes from './index';
import {AuthProvider} from '../Contexts/auth';

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
				<FlashMessage position="top" />
			</AuthProvider>
		</NavigationContainer>
	);
};

export default App;
