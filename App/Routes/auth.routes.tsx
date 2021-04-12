import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Main from './drawer.routes';
import Questions from '../Containers/Questions';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name="Main"
			component={Main}
			options={{headerShown: false}}
		/>
		<AuthStack.Screen
			name="Question"
			component={Questions}
			options={{headerShown: false}}
		/>
	</AuthStack.Navigator>
);

export default AuthRoutes;
