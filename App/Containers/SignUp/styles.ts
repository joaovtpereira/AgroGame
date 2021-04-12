import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	background: #fff;
	width: 100%;
	justify-content: center;
	align-content: center;
`;

export const ScrollContent = styled.ScrollView`
	flex: 1;
	margin-bottom: 8px;
	width: 100%;
	padding: 16px 16px;

	/* justify-content: center; */
`;

export const TitleWrapper = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;

	margin-top: 16px;
	margin-bottom: 24px;
`;

export const WrapperPhoto = styled.View`
	width: 100%;
	margin-bottom: 24px;
	align-items: center;
`;
