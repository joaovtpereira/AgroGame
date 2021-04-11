/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Typography from '../Typography';
import {Container} from './styles';

interface Answer {
	letter: string;
	answer: string;
	correct: string;
}

interface QuestionProps {
	answer: Answer;
	indexAnswer: number;
	isSelected: true | false;
	handleSelectedAnswer: (indexAnswer: number) => void;
}

const Question: React.FC<QuestionProps> = ({
	answer,
	indexAnswer,
	isSelected,
	handleSelectedAnswer,
}) => {
	return (
		<Container
			selected={isSelected}
			onPress={() => handleSelectedAnswer(indexAnswer)}
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
				color={isSelected ? '#fff' : '#6e5d5e'}
				paddingHorizontal="8px">
				{answer.answer}
			</Typography>
		</Container>
	);
};

export default Question;
