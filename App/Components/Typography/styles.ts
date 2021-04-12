import styled from 'styled-components/native';
import {css} from 'styled-components';

interface TextProps {
	variant: string;
	color: string;
	paddingVertical: string;
	paddingHorizontal: string;
	maxWidth?: string;
}
const textStyles = {
	title: css`
		font-size: 40px;
		font-weight: bold;
		text-align: center;
	`,
	pageTitle: css`
		font-size: 32px;

		text-align: left;
	`,
	action: css`
		font-size: 32px;
		font-weight: bold;
	`,
	subtitle: css`
		font-size: 16px;
	`,
	subtitleBold: css`
		font-size: 14px;
		font-weight: bold;
	`,
	primary: css`
		font-size: 20px;
		font-weight: bold;
	`,
	subLabel: css`
		font-size: 12px;
	`,
	label: css`
		font-size: 10px;
	`,
};

export const Text = styled.Text<TextProps>`
	${({variant}) => textStyles[variant]}
	color: ${({color}) => color || '#212121'};
	padding-left: ${({paddingHorizontal}) => paddingHorizontal || '0px'};
	padding-right: ${({paddingHorizontal}) => paddingHorizontal || '0px'};
	padding-top: ${({paddingVertical}) => paddingVertical || '0px'};
	padding-bottom: ${({paddingVertical}) => paddingVertical || '0px'};
	max-width: ${({maxWidth}) => maxWidth || '100%'};
`;
