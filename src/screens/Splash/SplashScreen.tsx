import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./SplashScreen.style";
import SplashLogo from "../../../assets/UI/welcome-splash/splash-logo.png";

const SplashScreen: React.FC = () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Welcome");
        }, 3000);
        console.log("Splash go => Welcome");
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={SplashLogo} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.text}>von Igor Myroshnichenko</Text>
        </View>
    )
}

export default SplashScreen;