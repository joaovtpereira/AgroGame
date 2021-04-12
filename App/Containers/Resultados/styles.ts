import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	background: #fff;
	padding: 16px;
`;

export const Row = styled.TouchableOpacity`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: flex-end;
	padding: 8px 16px;
	background: #fff;
	border-radius: 8px;
	margin-top: 24px;
`;
