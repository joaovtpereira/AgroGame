import styled from 'styled-components/native';

export const DrawerContainer = styled.View`
	padding: 16px 16px;
	flex: 1;
	background: #fff;
`;

export const HeaderWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
`;

export const UserData = styled.View`
	flex-direction: row;
	width: 100%;
	margin-bottom: 16px;
	align-items: center;
	justify-content: space-between;
`;

export const MenuContainer = styled.View`
	flex-direction: column;
	flex: 1;
`;

export const MenuItem = styled.TouchableOpacity`
	background: #fff;
	margin-bottom: 24px;
`;

export const UserDetails = styled.View`
	justify-content: center;
	margin-left: 16px;
`;

export const UserRow = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`;

export const UserImage = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 20px;
`;
