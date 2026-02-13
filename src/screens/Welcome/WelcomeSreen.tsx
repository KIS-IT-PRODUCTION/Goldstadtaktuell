import React from "react";
import { View, ImageBackground, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./WelcomeScreen.style";
import { LinearGradient } from "expo-linear-gradient";
import { Apple, Google, Facebook } from "../../../assets/UI/export.image";
import SplashLogo2 from "../../../assets/UI/welcome-splash/welcome-logo.png";
import WelcomeBackground from "../../../assets/UI/welcome-splash/background-welcome.png";

const WelcomeScreen: React.FC = () => {
    const navigation = useNavigation<any>();

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
                <LinearGradient
                    colors={['#D4AF37', '#B8860B']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.buttonLogin}
                >
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Anmelden</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.buttonTextRegister}>Registrieren</Text>
                </TouchableOpacity>
                <View style={styles.dividerContainer}>
                    <View style={styles.line} />
                        <Text style={styles.orText}>oder</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.containerSocialMedia}>
                    <TouchableOpacity style={styles.buttonSocialMedia}>
                        <Image source={Apple} style={styles.socialMediaIcon} resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSocialMedia}>
                        <Image source={Google} style={styles.socialMediaIcon} resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSocialMedia}>
                        <Image source={Facebook} style={styles.socialMediaIcon} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default WelcomeScreen;