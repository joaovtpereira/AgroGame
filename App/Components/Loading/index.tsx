import React from 'react';
import {ActivityIndicator} from 'react-native';

interface LoadingProps {
	color?: string;
	size?: number;
}

const Loading: React.FC<LoadingProps> = ({color, size}) => {
	return <ActivityIndicator size={size ?? 32} color={color ?? '#000'} />;
};

export default Loading;
