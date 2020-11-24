import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import * as yup from 'yup';
import Input from '../../Components/Input';
import Typography from '../../Components/Typography';
import Button from '../../Components/Button';
import PhotoUpload from '../../Components/PhotoUpload';

interface Teste {
	email: string;
}

interface Props {
	navigation: any;
}

import {Container, TitleWrapper} from './styles';

const App: React.FC<Props> = ({navigation}) => {
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
		<Container>
			<TitleWrapper>
				<Typography variant="title" color="#125629">
					FarmGamer
				</Typography>
			</TitleWrapper>
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
				<TitleWrapper>
					<Typography
						variant="subtitle"
						color="#125629"
						onPress={() => navigation.navigate('SignUp')}>
						Quero me cadastrar
					</Typography>
				</TitleWrapper>
			</Form>
		</Container>
	);
};

export default App;
