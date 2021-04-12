import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Main from './drawer.routes';
import Questions from '../Containers/Questions';

const AuthStack = createStackNavigator();

interface AuthRoutesProps {
	initialRoute: string;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({initialRoute}) => (
	<AuthStack.Navigator initialRouteName={initialRoute}>
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
