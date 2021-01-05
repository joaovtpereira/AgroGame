/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';

import Background from '../../Assets/Images/primeiraEtapa.png';
import Header from '../../Components/Header';
import Question from '../../Components/Question';
import Typography from '../../Components/Typography';
import questions_1 from '../../utils/questions_1level.json';
import {
	Button,
	ButtonStep,
	Container,
	WrapperTitle,
	Image,
	DataWrapper,
	Row,
	QuestionWrapper,
} from './styles';

const Questions: React.FC = () => {
	const [seconds, setSeconds] = useState(59);
	const [minutes, setMinutes] = useState(29);
	const [isActive, setIsActive] = useState(true);
	const [step, setStep] = useState(1);

	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setSeconds((seconds) => seconds - 1);
				if (seconds === 0) {
					setSeconds(59);
					setMinutes((seconds) => minutes - 1);
				}
			}, 1000);
		}
		if (minutes <= 0) {
			setIsActive(false);
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, minutes, seconds]);

	const handleStep = () => {
		if (step > 0) {
			setStep(0);
		}
	};

	return (
		<Container>
			<Header withoutMenu />
			<WrapperTitle>
				<Typography variant="action" maxWidth="40%" paddingVertical="16px">
					Culturas Agrícolas
				</Typography>
				<Image source={Background} resizeMode="contain" />
			</WrapperTitle>
			<DataWrapper
				style={{borderTopLeftRadius: 100, borderTopRightRadius: 100}}>
				<Row>
					{/* <Icon name="ios-arrow-back-outline" size={24} color="#fff" /> */}
					<Typography
						variant="subtitleBold"
						color="#fff"
						// paddingHorizontal="8px"
					>
						Tempo Restante: {minutes}:{seconds}
					</Typography>
				</Row>
				<QuestionWrapper>
					<Typography
						variant="subtitleBold"
						color="#544B4C"
						paddingVertical="8px">
						Exemplo de pergunta para ser respondida, de acordo com as
						necessidades de tamanho que vamos ter?
					</Typography>
					<Question />
					<Question />
					<Question />
					<Question />

					<Typography
						variant="subtitleBold"
						color="#544B4C"
						paddingHorizontal="2px"
						paddingVertical="8px">
						? Preciso de ajuda
					</Typography>

					<Typography
						variant="subtitleBold"
						color="#544B4C"
						paddingHorizontal="2px">
						Pulos Restantes: {step}
					</Typography>
				</QuestionWrapper>
				<Button>
					<Typography variant="primary" color="#000">
						Próxima
					</Typography>
				</Button>
				<ButtonStep onPress={handleStep}>
					<Typography variant="primary" color="#fff">
						Pular
					</Typography>
				</ButtonStep>
			</DataWrapper>
		</Container>
	);
};

export default Questions;
