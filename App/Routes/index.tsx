import React from 'react';
import {useAuth} from '../Contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
	const {signed} = useAuth();

	return signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
