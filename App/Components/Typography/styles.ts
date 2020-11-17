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
	`,
	subtitle: css`
		font-size: 16px;
	`,
};

export const Text = styled.Text<TextProps>`
	${({variant}) => textStyles[variant]}
	color: ${({color}) => color || '#212121'};
`;
