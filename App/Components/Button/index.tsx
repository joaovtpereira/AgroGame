import React from 'react';

import {Container, Label} from './styles';

import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
	label: String;
}

const Button: React.FC<Props> = ({label, ...props}) => {
	return (
		<Container {...props}>
			<Label>{label}</Label>
		</Container>
	);
};

export default Button;
