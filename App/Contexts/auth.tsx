import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
	signed: boolean;
	user: User | null;
	signOut: () => void;
	signIn: (data: User) => void;
	startQuestions: () => void;
}

interface Questions {
	start: Date;
	finish: true | false;
	questions: any[];
	asnwer_corrects: number;
	response: any[];
}

interface User {
	email: string;
	user_name: string;
	user_image: string;
	time_course: string;
	questions?: Questions;
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

	async function startQuestions() {
		let newUser = user;

		if (newUser !== null) {
			newUser.questions = {
				start: new Date(),
				finish: false,
				questions: [],
				asnwer_corrects: 0,
				response: [],
			};
			await AsyncStorage.setItem('@AgroGamer:user', JSON.stringify(newUser));
		}
	}

	return (
		<AuthContext.Provider
			value={{
				signed: !!user,
				user: user,
				signOut,
				signIn,
				startQuestions,
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
