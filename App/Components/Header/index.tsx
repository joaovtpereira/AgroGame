import React from 'react';

import {Container, Title} from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';

interface Props {
	withoutMenu?: boolean;
}

const Header: React.FC<Props> = ({withoutMenu}) => {
	return (
		<Container>
			{!withoutMenu && (
				<Icon
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
