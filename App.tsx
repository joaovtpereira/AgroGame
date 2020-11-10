import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import getValidationErrors from './App/utils/getValidationErrors';
import * as yup from 'yup';
import Input from './App/Components/Input';

interface Teste {
	email: string;
}

const App: React.FC = () => {
	const formRef = useRef<FormHandles>(null);

	async function handleSignIn(data: Teste) {
		try {
			formRef?.current?.setErrors({});
			const validationSchema = yup.object().shape({
				Email: yup
					.string()
					.email('Digite um e-mail válido.')
					.required('E-mail obrigatório.'),
			});

			await validationSchema.validate(data, {
				abortEarly: false,
			});
		} catch (err) {
			if (err instanceof yup.ValidationError) {
				const errors = getValidationErrors(err);
				formRef?.current?.setErrors(errors);
			}
		}
	}
	return (
		<>
			<SafeAreaView style={{paddingVertical: 8, paddingHorizontal: 8}}>
				<Form onSubmit={handleSignIn} ref={formRef}>
					<Input
						name="Email"
						icon="ios-mail-outline"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Email"
						returnKeyType="next"
						error={formRef.current?.getErrors}
					/>
					<Input
						name="Password"
						placeholder="Senha"
						icon="ios-key-outline"
						secureTextEntry
						returnKeyType="send"
						error={formRef.current?.getErrors}
						onSubmitEditing={() => {
							formRef.current?.submitForm();
						}}
					/>
				</Form>
			</SafeAreaView>
		</>
	);
};

export default App;
