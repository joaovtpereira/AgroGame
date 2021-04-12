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

const CustomDrawer: React.FC = () => {
	const {signOut, user} = useAuth();

	function SignOutUser() {
		signOut();
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
					<Icon name="navicon" size={32} color="#322805" />
				</UserData>
			</HeaderWrapper>

			<MenuContainer>
				<MenuItem>
					<Typography variant="subtitle">Início</Typography>
				</MenuItem>

				<MenuItem>
					<Typography variant="subtitle">Configurações</Typography>
				</MenuItem>

				<MenuItem>
					<Typography variant="subtitle">Termos de uso</Typography>
				</MenuItem>

				<MenuItem>
					<Typography variant="subtitle">Vídeo de ajuda</Typography>
				</MenuItem>

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
