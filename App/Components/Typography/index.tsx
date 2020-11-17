import React from 'react';
import {Text} from './styles';

export interface TypographyProps {
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
}) => {
	return (
		<Text
			variant={variant}
			color={color}
			as={Text}
			paddingVertical={paddingVertical}
			paddingHorizontal={paddingHorizontal}>
			{children}
		</Text>
	);
};

export default Typography;
