import React from 'react';
import {Text} from 'react-native';

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
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../Contexts/auth';

const Home: React.FC = () => {
	const navigation = useNavigation();
	const {user} = useAuth();

	return (
		<Container>
			<ImageBackground source={Background} resizeMode="contain">
				<PageContent>
					<Header />
					<DataWrapper
						style={{borderTopLeftRadius: 100, borderTopRightRadius: 100}}>
						<UserImage
							source={{
								uri: `content://com.agrogame.provider/shared/Pictures/${user?.user_image}`,
							}}
						/>

						<UserWrapper>
							<Typography variant="primary" color="#FEF0C1">
								{user?.user_name ?? 'Aluno'}
							</Typography>
							<Typography variant="subtitle" color="#FFF">
								Estudante do {user?.time_course ?? '1'}° Período
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
							style={{borderTopLeftRadius: 40, borderBottomLeftRadius: 40}}
							onPress={() => navigation.navigate('Question')}>
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
