import React from "react";
import { View, ImageBackground, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./WelcomeScreen.style";
import SplashLogo2 from "../../../assets/UI/splash-logo2.png";
import WelcomeBackground from "../../../assets/UI/background-welcome.png";

const WelcomeScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <ImageBackground
                source={WelcomeBackground} 
                style={styles.backgroundImage}
                >
                    <Image source={SplashLogo2} style={styles.image} />
                </ImageBackground>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.buttonText}>Anmelden</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonText}>Einloggen</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}

export default WelcomeScreen;