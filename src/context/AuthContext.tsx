import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

interface UserData {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    userInfo: any;
    isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    token: null,
    login: async () => {},
    logout: async () => {},
    userInfo: null,
    isLoading: false,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState<any>(null);

    const login = async (email: string, password: string) => {
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:4004/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });
            const data = await response.json();

            if (response.status === 200) {
                setToken(data.token);
                await AsyncStorage.setItem('userToken', data.token);
                await AsyncStorage.setItem('userInfo', JSON.stringify(data.user));
                setToken(data.token);
                setUserInfo(data.user);
                Alert.alert("Успішно", "Ви успішно увійшли в систему.");
            } else {
                Alert.alert("Помилка", data.message || "Помилка входу. Спробуйте ще раз.");
            }
        } catch (error) {
            Alert.alert("Помилка", "Сталася помилка при спробі увійти. Спробуйте ще раз.");
        } finally {
            setIsLoading(false);
        }
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfoString = await AsyncStorage.getItem('userInfo');

            if (userToken && userInfoString) {
                setToken(userToken);
                setUserInfo(JSON.parse(userInfoString));
            }
        } catch (error) {
            console.error("Помилка при перевірці автентифікації:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        }
    }

     React.useEffect(() => {
        isLoggedIn();
    }, []);


    const logout = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userInfo');
            setToken(null);
            setUserInfo(null);
        } catch (error) {
            Alert.alert("Помилка", "Сталася помилка при спробі вийти з системи.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{ token, login, logout, userInfo, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;