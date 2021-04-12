import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import {
	DrawerContainer,
	MenuContainer,
	MenuItem,
	HeaderWrapper,
	UserData,
	UserImage,
	UserRow,
	UserDetails,
} from './styles';
import Typography from '../Components/Typography';
import {useAuth} from '../Contexts/auth';
import {useNavigation} from '@react-navigation/core';

const CustomDrawer: React.FC = () => {
	const {signOut, user} = useAuth();
	const navigation = useNavigation();
	function SignOutUser() {
		signOut();
	}

	function handleConfiguration() {
		navigation.navigate('Configuration');
	}

	function handleResults() {
		navigation.navigate('Results');
	}

	function handleMain() {
		navigation.navigate('Main');
	}

	return (
		<DrawerContainer>
			<HeaderWrapper>
				<UserData>
					<UserRow>
						<UserImage
							source={{
								uri: `content://com.agrogame.provider/shared/Pictures/${user?.user_image}`,
							}}
						/>
						<UserDetails>
							<Typography variant="subtitle" color="#000">
								{user?.user_name ?? 'Aluno'}
							</Typography>
							<Typography variant="label" color="#000">
								Aluno do {user?.time_course ?? '1'} período
							</Typography>
						</UserDetails>
					</UserRow>
				</UserData>
			</HeaderWrapper>

			<MenuContainer>
				<MenuItem>
					<Typography variant="subtitle" onPress={handleMain}>
						Início
					</Typography>
				</MenuItem>

				<MenuItem>
					<Typography variant="subtitle" onPress={handleResults}>
						Resultados
					</Typography>
				</MenuItem>

				<MenuItem>
					<Typography variant="subtitle" onPress={handleConfiguration}>
						Configurações
					</Typography>
				</MenuItem>

				{/* <MenuItem>
					<Typography variant="subtitle">Termos de uso</Typography>
				</MenuItem>

				<MenuItem>
					<Typography variant="subtitle">Vídeo de ajuda</Typography>
				</MenuItem> */}

				<MenuItem style={{position: 'absolute', bottom: 0}}>
					<Typography variant="subtitle" onPress={SignOutUser}>
						Sair
					</Typography>
				</MenuItem>
			</MenuContainer>
		</DrawerContainer>
	);
};

export default CustomDrawer;
