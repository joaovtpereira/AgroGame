/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';

import Background from '../../Assets/Images/primeiraEtapa.png';
import Header from '../../Components/Header';
import Loading from '../../Components/Loading';
import QuestionWrapper from '../../Components/QuestionWrapper';
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
} from './styles';

const Questions: React.FC = () => {
	const [seconds, setSeconds] = useState(59);
	const [minutes, setMinutes] = useState(29);
	const [isActive, setIsActive] = useState(true);

	const [step, setStep] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [questions, setQuestions] = useState([]);

	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

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

	useEffect(() => {
		let questionsArray = [];
		let numberQuestions = 0;
		for (; numberQuestions < 6; numberQuestions = numberQuestions + 1) {
			let randomQuestion =
				questions_1[Math.floor(Math.random() * questions_1.length)];

			if (numberQuestions > 0) {
				while (haveThisQuestion(randomQuestion, questionsArray) === true) {
					randomQuestion =
						questions_1[Math.floor(Math.random() * questions_1.length)];
				}
			}

			questionsArray.push(randomQuestion);
		}
		setQuestions(questionsArray);
	}, []);

	useEffect(() => {
		setIsLoading(false);
	}, [questions]);

	function haveThisQuestion(question: any, questionsArray: any) {
		const arrayQuestionEqual = questionsArray.filter(
			(quest) => quest.id === question.id,
		);
		return arrayQuestionEqual.length > 0 ? true : false;
	}

	function handleStep() {
		if (step > 0) {
			setStep(0);
			setQuestions((prevState) => [
				...prevState.slice(0, questionNumber),
				...prevState.slice(questionNumber + 1),
			]);
		}
	}

	function handleSubmitAnswersQuestion(indexAnswer: number) {
		setSelectedAnswer(indexAnswer);
	}

	function handleSubmit() {
		if (selectedAnswer === null) {
			showMessage({
				type: 'warning',
				message: 'Por favor, selecione uma resposta.',
			});
		} else if (questionNumber === 4) {
			showMessage({
				type: 'success',
				message: 'Respostas salvas com sucesso',
			});
		} else {
			setQuestionNumber(questionNumber + 1);
			setSelectedAnswer(null);
		}
	}

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
				{isLoading ? (
					<Loading size={48} color="#fff" />
				) : (
					<>
						<QuestionWrapper
							step={step}
							selectedAnswer={selectedAnswer}
							question={questions[questionNumber]}
							handleSubmitAnswers={handleSubmitAnswersQuestion}
						/>
						<Button>
							<Typography variant="primary" color="#000" onPress={handleSubmit}>
								Próxima
							</Typography>
						</Button>
						<ButtonStep onPress={handleStep}>
							<Typography variant="primary" color="#fff">
								Pular
							</Typography>
						</ButtonStep>
					</>
				)}
			</DataWrapper>
		</Container>
	);
};

export default Questions;
