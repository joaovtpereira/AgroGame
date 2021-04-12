import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Typography from '../../Components/Typography';

import {Container, Row} from './styles';

const Configuration: React.FC = () => {
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
			<Typography
				variant="pageTitle"
				paddingVertical="16px"
				paddingHorizontal="4px">
				Configurações
			</Typography>

			<Row>
				<Typography variant="subtitle" paddingHorizontal="6px">
					Habilitar ajustes de cores
				</Typography>
				<Icon name="ios-radio-button-off" size={16} color="#000" />
			</Row>
			<Typography
				variant="subLabel"
				paddingVertical="16px"
				paddingHorizontal="6px">
				Habilitar o ajuste de cores vai permiter utilizar cores mais neutras,
				facilitando assim a utilização do aplicativos para pessoas com problemas
				de visão.
			</Typography>

			<Row>
				<Typography variant="subtitle" paddingHorizontal="6px">
					Habilitar vibrações
				</Typography>
				<Icon name="ios-radio-button-off" size={16} color="#000" />
			</Row>
			<Typography
				variant="subLabel"
				paddingVertical="16px"
				paddingHorizontal="6px">
				Habilitar as vibrações vai auxiliar a percepção das ações realizadas
				dentro do aplicativo, com intuito de ajudar aqueles que possuem alguma
				deficiência visual ou auditiva.
			</Typography>
		</Container>
	);
};

export default Configuration;
