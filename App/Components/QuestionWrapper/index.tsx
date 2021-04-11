import React from 'react';

import {Container} from './styles';

import Typography from '../Typography';
import Question from '../Question';

interface Question {
	id: number;
	question: string;
	answers: Array<{
		letter: string;
		answer: string;
		correct: string;
	}>;
}

interface QuestionWrapperProps {
	step: number;
	question: Question;
	selectedAnswer: number | null;
	handleSubmitAnswers: (indexAnswer: number) => void;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({
	step,
	question,
	selectedAnswer,
	handleSubmitAnswers,
}) => {
	function handleSelectedAnswer(indexAnswer: number) {
		handleSubmitAnswers(indexAnswer);
	}

	return (
		<Container>
			<Typography variant="subtitleBold" color="#544B4C" paddingVertical="8px">
				{question.question}
			</Typography>
			{question.answers.map((answer, index) => (
				<Question
					isSelected={
						selectedAnswer === null
							? false
							: selectedAnswer === index
							? true
							: false
					}
					answer={answer}
					indexAnswer={index}
					key={index}
					handleSelectedAnswer={handleSelectedAnswer}
				/>
			))}
			<Typography
				variant="subtitleBold"
				color="#544B4C"
				paddingVertical="8px"
				paddingHorizontal="4px">
				Pulos Restantes: {step}
			</Typography>
		</Container>
	);
};

export default QuestionWrapper;
