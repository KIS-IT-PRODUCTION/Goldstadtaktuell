import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RegisterScreen.style";
import { LinearGradient } from "expo-linear-gradient";
import { AppleBg, GoogleBg, FacebookBg, Arrow } from "../../../assets/UI/export.image";

const RegisterScreen: React.FC = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();

    const hadleGoBack = () => {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <View style={styles.arrowIconContainer}>
                <TouchableOpacity onPress={hadleGoBack}>
                    <Image source={Arrow} style={styles.arrowIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textRegister}>Registrierung</Text>
                <Text style={styles.textRegisterDescribe}>Werden Sie Teil der Community und lesen Sie exklusive Berichte.</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="E-Mail Adresse" style={styles.input} keyboardType="email-address"></TextInput>
                <TextInput placeholder="Passwort" style={styles.input} secureTextEntry={true}></TextInput>
                <LinearGradient colors={['#D4AF37', '#B8860B']} 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.buttonRegister}
                >
                <TouchableOpacity>
                    <Text style={styles.textRegisterBtn}>Konto erstellen</Text>
                </TouchableOpacity>
                </LinearGradient>
                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D4AF37" }}
                        thumbColor={isEnabled ? "#B8860B" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.textSwitch}>Durch Klicken auf «Registrieren» akzeptieren Sie unsere AGB</Text>
                </View>
                <View style={styles.line} />
                 <View style={styles.dividerContainer}>
                    <Text style={styles.dividerText}>oder fortfahren mit</Text>
                </View>
                <View style={styles.containerSocialMedia}>
                    <TouchableOpacity style={styles.buttonSocialMedia}>
                        <Image source={AppleBg} style={styles.iconSocialMedia} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSocialMedia}>
                        <Image source={GoogleBg} style={styles.iconSocialMedia} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSocialMedia}>
                        <Image source={FacebookBg} style={styles.iconSocialMedia} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegisterScreen;