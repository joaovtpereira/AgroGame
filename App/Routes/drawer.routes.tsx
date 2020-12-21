import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from './CustomDrawer';
import Home from '../Containers/Home';

const AppStack = createDrawerNavigator();
const AppRoutes: React.FC = () => {
	return (
		<>
			<AppStack.Navigator
				drawerType="slide"
				drawerContent={() => <CustomDrawer />}
				initialRouteName="Home">
				<AppStack.Screen name="Home" component={Home} />
			</AppStack.Navigator>
		</>
	);
};

export default AppRoutes;
