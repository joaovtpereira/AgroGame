import React from 'react';

import {Container, Title} from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';

interface Props {
	withoutMenu?: boolean;
	navigation: any;
}

const Header: React.FC<Props> = ({withoutMenu, navigation}) => {
	return (
		<Container>
			{!withoutMenu && (
				<Icon
					onPress={() => navigation.toggleDrawer()}
					name="navicon"
					size={32}
					color="#322805"
					style={{position: 'absolute', left: 8}}
				/>
			)}
			<Title>FarmGamer</Title>
		</Container>
	);
};

export default Header;
