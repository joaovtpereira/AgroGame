import styled from 'styled-components/native';
import {css} from 'styled-components';

interface TextProps {
	variant: string;
	color: string;
	paddingVertical: number;
	paddingHorizontal: number;
}
const textStyles = {
	title: css`
		font-size: 40px;
		font-weight: bold;
		text-align: center;
	`,
	action: css`
		font-size: 32px;
		font-weight: bold;
	`,
	subtitle: css`
		font-size: 16px;
	`,
	primary: css`
		font-size: 20px;
		font-weight: bold;
	`,
};

export const Text = styled.Text<TextProps>`
	${({variant}) => textStyles[variant]}
	color: ${({color}) => color || '#212121'};
`;
