import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Main from './drawer.routes';
import Questions from '../Containers/Questions';
import Configuration from '../Containers/Configuration';
import Results from '../Containers/Resultados';

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
			name="Configuration"
			component={Configuration}
			options={{headerShown: false}}
		/>
		<AuthStack.Screen
			name="Results"
			component={Results}
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
