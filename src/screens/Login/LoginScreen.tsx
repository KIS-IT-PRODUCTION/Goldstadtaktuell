import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons"
import { colors } from "../../../types/pallete";
import { LinearGradient } from "expo-linear-gradient";
import { AppleBg, GoogleBg, FacebookBg, Arrow } from "../../../assets/UI/export.image";
import { styles } from "./LoginScreen.style";


const LoginScreen: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
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
                <Text style={styles.textRegister}>Willkommen zurück!</Text>
                <Text style={styles.textRegisterDescribe}>Melden Sie sich an, um fortzufahren.</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={[styles.inputWrapper,focusedInput === 'email' && { borderColor: colors.border[0]}]}>
                    <Feather name="mail" size={24} color={focusedInput === 'email' ? colors.border[0] : colors.secondary} style={styles.iconInput} />
                    <TextInput 
                        placeholder="E-Mail Adresse" 
                        style={styles.input} 
                        keyboardType="email-address" 
                        autoCapitalize="none"
                        onFocus={() => setFocusedInput("email")}
                        onBlur={() => setFocusedInput(null)}>
                    </TextInput>
                </View>
                <View style={[styles.inputWrapper,focusedInput === 'password' && { borderColor: colors.border[0]}]}>
                    <Feather name="lock" size={24} color={focusedInput === 'password' ? colors.border[0] : colors.secondary} style={styles.iconInput} />
                    <TextInput 
                        placeholder="Passwort" 
                        style={styles.input} 
                        secureTextEntry={!isPasswordVisible}
                        onFocus={() => setFocusedInput('password')}
                        onBlur={() => setFocusedInput(null)}>
                    </TextInput>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Feather name={isPasswordVisible ? "eye" : "eye-off"} size={24} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                <LinearGradient colors={['#D4AF37', '#B8860B']} 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.buttonRegister}
                >
                <TouchableOpacity>
                    <Text style={styles.textRegisterBtn}>Konto erstellen</Text>
                </TouchableOpacity>
                </LinearGradient>
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
    );
}

export default LoginScreen;