import React from 'react';
import {useAuth} from '../Contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
	const {signed, inEvidence} = useAuth();

	return inEvidence ? (
		<AuthRoutes initialRoute="Question" />
	) : signed ? (
		<AuthRoutes initialRoute="Main" />
	) : (
		<AppRoutes />
	);
};

export default Routes;
