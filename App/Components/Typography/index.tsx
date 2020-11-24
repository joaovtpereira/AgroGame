import React from 'react';
import {TextProps} from 'react-native';
import {Text} from './styles';

interface TypographyProps extends TextProps {
	variant: string;
	color?: string;
	paddingVertical?: number;
	paddingHorizontal?: number;
}

const Typography: React.FC<TypographyProps> = ({
	variant,
	color,
	paddingVertical,
	paddingHorizontal,
	children,
	...props
}) => {
	return (
		<Text
			variant={variant}
			color={color}
			as={Text}
			paddingVertical={paddingVertical}
			paddingHorizontal={paddingHorizontal}
			{...props}>
			{children}
		</Text>
	);
};

export default Typography;
