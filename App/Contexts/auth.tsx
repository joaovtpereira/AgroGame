import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import database from '@react-native-firebase/database';

interface AuthContextData {
	signed: boolean;
	inEvidence: boolean;
	user: User | null;
	signOut: () => void;
	signIn: (data: User) => void;
	startQuestions: (questions: any) => void;
	updadeStepQuestion: (questionNumber: number) => void;
}

interface Questions {
	start: Date;
	finish: true | false;
	questions: any[];
	steps: number;
	asnwer_corrects: number;
	response: any[];
}

interface User {
	token: string;
	email: string;
	user_name: string;
	user_image: string;
	time_course: string;
	questions: Questions[] | [];
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		async function loadStorageData() {
			const storageUser = await AsyncStorage.getItem('@AgroGamer:user');

			if (storageUser) {
				setUser(JSON.parse(storageUser));
			}
		}
		loadStorageData();
	}, []);

	async function signOut() {
		AsyncStorage.clear().then(() => {
			setUser(null);
		});
	}

	async function signIn(data: User) {
		let newUser = data;
		setUser(data);
		await AsyncStorage.setItem('@AgroGamer:user', JSON.stringify(newUser));
	}

	async function startQuestions(questions: any) {
		let newUser = user;

		if (newUser !== null) {
			newUser.questions = [
				{
					start: new Date(),
					finish: false,
					questions: questions,
					steps: 1,
					asnwer_corrects: 0,
					response: [],
				},
			];
			database()
				.ref(`/users/${user.token}`)
				.update({
					questions: newUser.questions,
				})
				.then(() => console.log('Data updated.'));
			await AsyncStorage.setItem('@AgroGamer:user', JSON.stringify(newUser));
		}
	}

	async function updadeStepQuestion(questionNumber: number) {
		let newUser = user;

		newUser.questions[newUser.questions.length - 1].steps = 0;

		database()
				.ref(`/users/${user.token}/questions/${newUser.questions.length - 1}`)
				.update({
					steps: 0,
				})
				.then(() => console.log('Data updated.'));
			// await AsyncStorage.setItem('@AgroGamer:user', JSON.stringify(newUser));

		newUser.questions[newUser.questions.length - 1].questions = [
			newUser?.questions[newUser.questions.length - 1].questions.slice(0, questionNumber),
			newUser?.questions[newUser.questions.length - 1].questions.slice(questionNumber + 1),
		];

		database()
				.ref(`/users/${user.token}/questions/${newUser.questions.length - 1}`)
				.update({
					questions: newUser?.questions,
				})
				.then(() => console.log('Data updated.'));

		await AsyncStorage.setItem('@AgroGamer:user', JSON.stringify(newUser));
	}

	return (
		<AuthContext.Provider
			value={{
				signed: !!user,
				inEvidence: user?.questions?.length > 0 
					? user?.questions[user.questions.length - 1].finish === false 
						? true 
						: false 
					: false,
				user: user,
				signOut,
				signIn,
				startQuestions,
				updadeStepQuestion,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export default AuthContext;
