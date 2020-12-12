import React from 'react';

import {
	Container,
	DataWrapper,
	ImageBackground,
	PageContent,
	UserWrapper,
	UserImage,
	TutorialWrapper,
	ActionWrapper,
} from './styles';

import Background from '../../Assets/Images/farmer.png';
import Header from '../../Components/Header';
import Typography from '../../Components/Typography';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Text} from 'react-native';

const Home: React.FC = () => {
	return (
		<Container>
			<ImageBackground source={Background} resizeMode="contain">
				<PageContent>
					<Header />
					<DataWrapper
						style={{borderTopLeftRadius: 100, borderTopRightRadius: 100}}>
						<UserImage
							source={{
								uri:
									'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nUwuXB6XWMNuMo0OeWUav35g-1AGKTkd8w&usqp=CAU',
							}}
						/>

						<UserWrapper>
							<Typography variant="primary" color="#FEF0C1">
								Rafael Santos Pereira
							</Typography>
							<Typography variant="subtitle" color="#FFF">
								Estudante do 7º Período
							</Typography>
						</UserWrapper>

						<TutorialWrapper>
							<Typography variant="primary" color="#000">
								Vamos Jogar?
							</Typography>
							<Typography variant="subtitle" color="#000">
								Embarque em uma experiência completa por todo o processo
								envolvendo a colheita de milho.
							</Typography>
						</TutorialWrapper>

						<ActionWrapper
							style={{borderTopLeftRadius: 40, borderBottomLeftRadius: 40}}>
							<Text
								style={{
									fontSize: 24,
									fontWeight: 'bold',
									paddingRight: 16,
									paddingBottom: 4,
								}}>
								Começar
							</Text>
							<Icon name="play" size={32} color="#000" />
						</ActionWrapper>
					</DataWrapper>
				</PageContent>
			</ImageBackground>
		</Container>
	);
};

export default Home;
