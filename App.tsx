import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import getValidationErrors from './App/utils/getValidationErrors';
import * as yup from 'yup';
import Input from './App/Components/Input';
import Typography from './App/Components/Typography';
import Button from './App/Components/Button';
import PhotoUpload from './App/Components/PhotoUpload';

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
			<SafeAreaView
				style={{
					paddingVertical: 8,
					paddingHorizontal: 8,
					backgroundColor: ' #FFF',
				}}>
				<PhotoUpload />
				<Typography variant="title" color="#125629">
					FarmGamer
				</Typography>
				<Form onSubmit={handleSignIn} ref={formRef}>
					<Input
						name="Email"
						icon="ios-mail-outline"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Email"
						returnKeyType="next"
						color="#125629"
						error={formRef.current?.getErrors}
					/>
					<Input
						name="Password"
						placeholder="Senha"
						icon="ios-key-outline"
						secureTextEntry
						returnKeyType="send"
						color="#125629"
						error={formRef.current?.getErrors}
						onSubmitEditing={() => {
							formRef.current?.submitForm();
						}}
					/>
					<Button label="Cadastrar" />
					<Typography variant="subtitle" color="#125629">
						Quero me cadastrar
					</Typography>
				</Form>
			</SafeAreaView>
		</>
	);
};

export default App;
