import React, {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
	signed: boolean;
	user: User | null;
	signOut: () => void;
	signIn: (data: User) => void;
}

interface User {
	email: string;
	user_name: string;
	user_image: string;
	time_course: string;
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

	return (
		<AuthContext.Provider
			value={{
				signed: !!user,
				user: user,
				signOut,
				signIn,
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
