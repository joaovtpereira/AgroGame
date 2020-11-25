import React, {
	useState,
	useEffect,
	useRef,
	useCallback,
	forwardRef,
} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';
import Icon from 'react-native-vector-icons/Ionicons';

import {Container, InputContainer, TextInput, Text} from './styles';

interface InputProps extends TextInputProps {
	name: string;
	icon: string;
	color?: string;
}

interface InputValueReference {
	value: string;
}

interface InputRef {
	focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
	{name, icon, color, ...rest},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ref,
) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isFilled, setIsFilled] = useState(false);

	const inputElementRef = useRef<any>(null);
	const {registerField, defaultValue = '', fieldName, error} = useField(name);
	const inputValueRef = useRef<InputValueReference>({value: defaultValue});

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputValueRef.current,
			path: 'value',
			setValue(ref: any, value: string) {
				inputValueRef.current.value = value;
				inputElementRef.current?.setNativeProps({text: value});
			},
			clearValue() {
				inputValueRef.current.value = '';
				inputElementRef.current?.clear();
			},
		});
	}, [fieldName, registerField]);

	const handleInputBlur = useCallback(() => {
		setIsFilled(!!inputValueRef.current?.value);
	}, []);

	return (
		<>
			<Container hasError={!!error}>
				<InputContainer>
					<Icon
						name={icon}
						size={20}
						color={error ? '#c53030' : color ? color : '#000'}
					/>
					<TextInput
						ref={inputElementRef}
						color={color}
						keyboardAppearance="dark"
						placeholderTextColor={error ? '#c53030' : color ? color : '#666360'}
						defaultValue={defaultValue}
						onChangeText={(value) => {
							inputValueRef.current.value = value.trim();
						}}
						onBlur={handleInputBlur}
						{...rest}
					/>
				</InputContainer>
			</Container>
			<Text hasError={!!error}>{error}</Text>
		</>
	);
};

export default forwardRef(Input);
