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
}

interface InputValueReference {
	value: string;
}

interface InputRef {
	focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
	{name, icon, ...rest},
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
		<Container>
			<InputContainer hasError={!!error}>
				<Icon name={icon} size={20} color="black" />
				<TextInput
					ref={inputElementRef}
					keyboardAppearance="dark"
					placeholderTextColor="#666360"
					defaultValue={defaultValue}
					onChangeText={(value) => {
						inputValueRef.current.value = value.trim();
					}}
					onBlur={handleInputBlur}
					{...rest}
				/>
			</InputContainer>
			<Text hasError={!!error}>{error}</Text>
		</Container>
	);
};

export default forwardRef(Input);
