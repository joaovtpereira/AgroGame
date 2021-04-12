import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import React, {useRef, useState} from 'react';
import Button from '../../Components/Button';
import database from '@react-native-firebase/database';

import * as yup from 'yup';

import Input from '../../Components/Input';
import PhotoUpload from '../../Components/PhotoUpload';
import Typography from '../../Components/Typography';
import getValidationErrors from '../../utils/getValidationErrors';

import {Container, ScrollContent, TitleWrapper, WrapperPhoto} from './styles';
import {showMessage} from 'react-native-flash-message';

interface FormData {
	Name: string;
	Email: string;
	Password: string;
	ConfirmPassword: string;
}

interface Props {
	navigation: any;
}

const SignUp: React.FC<Props> = ({navigation}) => {
	const formRef = useRef<FormHandles>(null);
	const [photo, setPhoto] = useState();

	async function handleSignUp(data: FormData) {
		try {
			formRef?.current?.setErrors({});
			const validationSchema = yup.object().shape({
				Email: yup
					.string()
					.email('Digite um e-mail válido.')
					.required('Nome obrigatório.'),
				Name: yup.string().required('E-mail obrigatório.'),
				time_course: yup.string().required('Período obrigatório.'),
				Password: yup
					.string()
					.required('Senha é obrigatória')
					.min(8, 'Mínimo de 8 caracteres'),
				ConfirmPassword: yup
					.string()
					.required('Confirmação de senha é obrigatória')
					.oneOf([yup.ref('Password'), null], 'As senhas não correspondem'),
			});

			await validationSchema.validate(data, {
				abortEarly: false,
			});

			database()
				.ref('/users/')
				.push()
				.set({
					user_name: formRef.current?.getFieldValue('Name'),
					email: formRef.current?.getFieldValue('Email'),
					password: formRef.current?.getFieldValue('Password'),
					time_course: formRef.current?.getFieldValue('time_course'),
					user_image: photo.fileName,
				})
				.then(() => {
					showMessage({
						message: 'Cadastro realizado com sucesso!',
						type: 'success',
					});
					navigation.navigate('SignIn');
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
					<PhotoUpload photo={photo} setPhoto={setPhoto} />
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
					/>
					<Input
						name="Email"
						icon="ios-mail-outline"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Email"
						returnKeyType="next"
						color="#125629"
					/>
					<Input
						name="time_course"
						icon="ios-book-outline"
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Período"
						keyboardType={'numeric'}
						returnKeyType="next"
						color="#125629"
					/>
					<Input
						name="Password"
						placeholder="Senha"
						icon="ios-key-outline"
						secureTextEntry
						returnKeyType="send"
						color="#125629"
					/>
					<Input
						name="ConfirmPassword"
						placeholder="Confirmar senha"
						icon="ios-key-outline"
						secureTextEntry
						returnKeyType="send"
						color="#125629"
					/>
					<Button
						label="Cadastrar"
						style={{marginTop: 24}}
						onPress={() => formRef.current?.submitForm()}
					/>
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
