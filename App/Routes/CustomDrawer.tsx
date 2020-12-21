import React from 'react';
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
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Typography from '../Components/Typography';

const CustomDrawer: React.FC = () => {
	return (
		<DrawerContainer>
			<HeaderWrapper>
				<UserData>
					<UserRow>
						<UserImage
							source={{
								uri:
									'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nUwuXB6XWMNuMo0OeWUav35g-1AGKTkd8w&usqp=CAU',
							}}
						/>
						<UserDetails>
							<Typography variant="subtitle" color="#000">
								Rafael Santos
							</Typography>
							<Typography variant="label" color="#000">
								Aluno do 7º período
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
					<Typography variant="subtitle">Sair</Typography>
				</MenuItem>
			</MenuContainer>
		</DrawerContainer>
	);
};

export default CustomDrawer;
