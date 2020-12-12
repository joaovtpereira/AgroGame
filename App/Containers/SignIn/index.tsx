import React, {useRef} from 'react';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import * as yup from 'yup';
import Input from '../../Components/Input';
import Typography from '../../Components/Typography';
import Button from '../../Components/Button';

import database from '@react-native-firebase/database';

interface FormData {
	email: string;
	Password: string;
}

interface Props {
	navigation: any;
}

import {Container, TitleWrapper} from './styles';
import {showMessage} from 'react-native-flash-message';

const App: React.FC<Props> = ({navigation}) => {
	const formRef = useRef<FormHandles>(null);

	async function handleSignIn(data: FormData) {
		try {
			formRef?.current?.setErrors({});
			const validationSchema = yup.object().shape({
				email: yup
					.string()
					.email('Digite um e-mail válido.')
					.required('E-mail obrigatório.'),
				Password: yup.string().required('Senha obrigatória.'),
			});

			await validationSchema.validate(data, {
				abortEarly: false,
			});

			database()
				.ref('users')
				.once('value')
				.then((snapshot) => {
					for (var key in snapshot.val()) {
						if (
							data.email === snapshot.val()[key].email &&
							data.Password === snapshot.val()[key].password
						) {
							navigation.navigate('Home');
						} else {
							showMessage({
								message: 'Email ou senha incorretas!',
								type: 'danger',
							});
						}
					}
				})
				.catch((error) => console.log(error));
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
					name="email"
					icon="ios-mail-outline"
					autoCapitalize="none"
					autoCorrect={false}
					placeholder="Email"
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
				<Button
					label="Entrar"
					style={{marginTop: 16}}
					onPress={() => formRef.current?.submitForm()}
				/>
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
