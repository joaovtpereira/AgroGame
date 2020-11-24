import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import React, {useRef} from 'react';
import Button from '../../Components/Button';
import * as yup from 'yup';

import Input from '../../Components/Input';
import PhotoUpload from '../../Components/PhotoUpload';
import Typography from '../../Components/Typography';
import getValidationErrors from '../../utils/getValidationErrors';

import {Container, ScrollContent, TitleWrapper, WrapperPhoto} from './styles';

interface Teste {
	email: string;
}

interface Props {
	navigation: any;
}

const SignUp: React.FC<Props> = ({navigation}) => {
	const formRef = useRef<FormHandles>(null);

	async function handleSignUp(data: Teste) {
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
			<ScrollContent>
				<WrapperPhoto>
					<PhotoUpload />
				</WrapperPhoto>
				<Form onSubmit={handleSignUp} ref={formRef}>
					<Input
						name="Name"
						icon="person-outline"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Nome completo"
						returnKeyType="next"
						color="#125629"
						error={formRef.current?.getErrors}
					/>
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
					<Input
						name="Password"
						placeholder="Confirmar senha"
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
							onPress={() => navigation.navigate('SignIn')}>
							Já tenho cadastro
						</Typography>
					</TitleWrapper>
				</Form>
			</ScrollContent>
		</Container>
	);
};

export default SignUp;
