import styled from 'styled-components/native';

interface ContainerProps {
	selected: true | false;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
	background: ${({selected}) => (selected ? '#6e5d5e' : '#fff')};
	padding: 8px 4px;
	border-radius: 8px;
	margin-top: 8px;
`;
