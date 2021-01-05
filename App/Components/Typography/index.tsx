import React from 'react';
import {TextProps} from 'react-native';
import {Text} from './styles';

interface TypographyProps extends TextProps {
	variant: string;
	color?: string;
	paddingVertical?: string;
	paddingHorizontal?: string;
	maxWidth?: string;
}

const Typography: React.FC<TypographyProps> = ({
	variant,
	color,
	paddingVertical,
	paddingHorizontal,
	children,
	maxWidth,
	...props
}) => {
	return (
		<Text
			variant={variant}
			color={color}
			as={Text}
			paddingVertical={paddingVertical}
			paddingHorizontal={paddingHorizontal}
			maxWidth={maxWidth}
			{...props}>
			{children}
		</Text>
	);
};

export default Typography;
