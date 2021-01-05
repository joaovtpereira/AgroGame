/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text} from 'react-native';
import Typography from '../Typography';

import {Container} from './styles';

const Question: React.FC = () => {
	return (
		<Container
			style={{
				shadowColor: '#6e5d5e',
				shadowOffset: {
					width: 0,
					height: 1,
				},
				shadowOpacity: 0.22,
				shadowRadius: 2.22,

				elevation: 3,
			}}>
			<Typography
				variant="subtitleBold"
				color="#6e5d5e"
				paddingHorizontal="8px">
				A-) Resposta A
			</Typography>
		</Container>
	);
};

export default Question;
