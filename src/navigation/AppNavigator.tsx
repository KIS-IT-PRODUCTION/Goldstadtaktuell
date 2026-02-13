import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { AuthContext } from "../context/AuthContext";

import SplashScreen from "../screens/Splash/SplashScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeSreen";
import RegisterScreen from "../screens/Register/RegisterScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import MainScreen from "../screens/Main/MainScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    const { isLoading, token } = useContext(AuthContext);

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            {token !== null ? (
            <Stack.Screen name="Main" component={MainScreen} />
             ) : (
                <>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                </>
             )}
        </Stack.Navigator>
    )
}

export default AppNavigator;