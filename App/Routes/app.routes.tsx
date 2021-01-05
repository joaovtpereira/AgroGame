import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../Containers/SignIn';
import SignUp from '../Containers/SignUp';
import Main from './drawer.routes';
import Questions from '../Containers/Questions';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
	<AppStack.Navigator initialRouteName="Main">
		<AppStack.Screen
			name="SignIn"
			component={SignIn}
			options={{headerShown: false}}
		/>
		<AppStack.Screen
			name="SignUp"
			component={SignUp}
			options={{headerShown: false}}
		/>
		<AppStack.Screen
			name="Main"
			component={Main}
			options={{headerShown: false}}
		/>
		<AppStack.Screen
			name="Question"
			component={Questions}
			options={{headerShown: false}}
		/>
	</AppStack.Navigator>
);

export default AppRoutes;
