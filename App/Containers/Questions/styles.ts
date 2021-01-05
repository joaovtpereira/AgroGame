import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
	width: 100%;
	background: #fef0c1;
	align-items: center;
	border-radius: 16px;
	padding: 8px 0;
`;

export const ButtonStep = styled.TouchableOpacity`
	width: 100%;
	background: #db826e;
	align-items: center;
	border-radius: 16px;
	padding: 8px 0;
	margin-top: 8px;
`;

export const Container = styled.View`
	flex: 1;
	background: #fef0c1;
`;

export const WrapperTitle = styled.View`
	flex-direction: row;
	margin-top: 8px;
	justify-content: space-between;
	padding-left: 16px;
	align-items: flex-start;
`;

export const Image = styled.Image`
	width: 60%;
	height: 260px;
`;

export const DataWrapper = styled.View`
	flex-direction: column;
	width: 100%;
	background: #6e5d5e;
	position: absolute;
	bottom: 0;
	height: 70%;
	padding: 24px 32px;
`;

export const Row = styled.View`
	width: 100%;
	justify-content: center;
	flex-direction: row;
	align-items: center;
`;

export const QuestionWrapper = styled.View`
	flex-direction: column;
	width: 100%;
	background: #fff;
	padding: 8px 16px;
	border-radius: 16px;
	margin-top: 16px;
	margin-bottom: 16px;
	padding-bottom: 24px;
`;
