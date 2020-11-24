import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../Containers/SignIn';
import SignUp from '../Containers/SignUp';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
	<AppStack.Navigator>
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
	</AppStack.Navigator>
);

export default AppRoutes;
