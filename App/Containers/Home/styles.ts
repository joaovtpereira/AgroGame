import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background: #fef0c1;
`;

export const ImageBackground = styled.ImageBackground`
	flex: 1;
	width: 100%;
`;

export const PageContent = styled.View`
	flex: 1;
	justify-content: space-between;
`;

export const DataWrapper = styled.View`
	flex-direction: column;
	width: 100%;
	background: #6e5d5e;
	height: 400px;
`;

export const UserWrapper = styled.View`
	align-items: flex-start;
	position: absolute;
	top: 60px;
	padding-left: 72px;
`;

export const UserImage = styled.Image`
	width: 62px;
	height: 62px;
	border-radius: 31px;
	margin-left: 72px;
	position: absolute;
	top: -31px;
`;

export const TutorialWrapper = styled.View`
	position: absolute;
	bottom: 16px;
	margin: 0 32px;
	padding: 32px 32px;
	padding-bottom: 128px;
	background: #fff;
	border-radius: 32px;
`;

export const ActionWrapper = styled.TouchableOpacity`
	position: absolute;
	bottom: 20px;
	right: 0;

	background: #fef0c1;
	padding: 16px 0;
	padding-left: 16px;
	width: 50%;

	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;
