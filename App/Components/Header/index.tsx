import React from 'react';

import {Container, Title} from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';

const Header: React.FC = () => {
	return (
		<Container>
			<Icon
				name="navicon"
				size={32}
				color="#322805"
				style={{position: 'absolute', left: 8}}
			/>
			<Title>FarmGamer</Title>
		</Container>
	);
};

export default Header;
