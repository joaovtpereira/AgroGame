import styled, {css} from 'styled-components/native';

interface InputContainerProps {
	hasError: boolean;
}

interface TextInputProps {
	color?: string;
}

export const Container = styled.View`
	width: 100%;
	flex-direction: column;
	margin-bottom: 24px;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 16px;
`;

export const InputContainer = styled.View<InputContainerProps>`
	max-width: 100%;
	background: transparent;
	padding: 0 16px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	${({hasError}) =>
		hasError &&
		css`
			border-color: #c53030;
		`}
`;

export const TextInput = styled.TextInput<TextInputProps>`
	max-width: 90%;
	padding-left: 16px;
	color: ${({color}) => color || '#000'};
	font-size: 16px;
	font-family: 'RobotoSlab-Regular';
`;

export const Text = styled.Text<InputContainerProps>`
	font-size: 16px;
	display: none;
	font-family: 'RobotoSlab-Regular';
	color: #c53030;
	${({hasError}) =>
		hasError &&
		css`
			display: flex;
		`}
`;
