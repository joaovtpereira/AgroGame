/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Typography from '../../Components/Typography';

import {Container, Row} from './styles';

const Results: React.FC = () => {
	const navigation = useNavigation();

	function handleBack() {
		navigation.goBack();
	}

	return (
		<Container>
			<Icon
				name="ios-close-outline"
				size={32}
				color="#000"
				onPress={handleBack}
			/>
			<Typography variant="pageTitle" paddingVertical="16px">
				Resultados
			</Typography>

			<Row
				style={{
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.23,
					shadowRadius: 2.62,

					elevation: 4,
				}}>
				<Typography variant="primary">Primeira Fase</Typography>
				<Typography variant="primary">3/5</Typography>
			</Row>

			<Row
				style={{
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.23,
					shadowRadius: 2.62,

					elevation: 4,
				}}>
				<Typography variant="primary">Segunda Fase</Typography>
				<Typography variant="primary">2/5</Typography>
			</Row>

			<Row
				style={{
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.23,
					shadowRadius: 2.62,

					elevation: 4,
				}}>
				<Typography variant="primary">Terceira Fase</Typography>
				<Typography variant="primary">5/5</Typography>
			</Row>
		</Container>
	);
};

export default Results;
