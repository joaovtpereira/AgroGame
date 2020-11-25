import styled, {css} from 'styled-components/native';

interface InputContainerProps {
	hasError: boolean;
}

interface TextInputProps {
	color?: string;
}

export const Container = styled.View<InputContainerProps>`
	width: 100%;
	flex-direction: column;
	margin-top: 24px;
	background: rgba(0, 0, 0, 0.05);
	border-radius: 16px;
	${({hasError}) =>
		hasError &&
		css`
			border: 1px solid #c53030;
		`}
`;

export const InputContainer = styled.View`
	max-width: 100%;
	background: transparent;
	padding: 0 16px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const TextInput = styled.TextInput<TextInputProps>`
	width: 100%;
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
			padding-left: 8px;
		`}
`;
