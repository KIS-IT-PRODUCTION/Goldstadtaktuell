import React, { use, useState, useContext } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, Alert, ActivityIndicator } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { Feather } from "@expo/vector-icons"
import { colors } from "../../../types/pallete";
import { LinearGradient } from "expo-linear-gradient";
import { AppleBg, GoogleBg, FacebookBg, Arrow } from "../../../assets/UI/export.image";
import { styles } from "./LoginScreen.style";

type RootStackParamList = {
    Main: undefined;
    Register: undefined;
};

const LoginScreen: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [  , setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const { login, isLoading } = useContext(AuthContext);

    const handleLogin = async () => {

        if (!validate()) {
            return;
        }

        if (!email || !password) {
            alert("Помилка: Всі поля повинні бути заповнені.");
            return;
        }

        setIsLoading(true);
        await login(email, password);
    }

    const validate = (): boolean => {
            let isValid = true;
    
            setEmailError("");
            setPasswordError("");
    
            if (!email) {
                setEmailError("Введіть електронну адресу.");
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                setEmailError("Невірний формат електронної адреси.");
                isValid = false;
            }
    
            if (!password) {
                setPasswordError("Введіть пароль.");
                isValid = false;
            } else if (password.length < 6) {
                setPasswordError("Пароль має бути не менше 6 символів.");
                isValid = false;
            }
    
            return isValid;
        };
    

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
                <View style={[styles.inputWrapper,focusedInput === 'email' && { borderColor: colors.border[0]}, emailError && { borderColor: colors.inputEror }]}>
                    <Feather name="mail" size={24} color={focusedInput === 'email' ? colors.border[0] : colors.secondary} style={styles.iconInput} />
                    <TextInput 
                        placeholder="E-Mail Adresse" 
                        style={styles.input} 
                        keyboardType="email-address" 
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            if (emailError) {
                                setEmailError("");
                            }
                        }}
                        onFocus={() => setFocusedInput("email")}
                        onBlur={() => setFocusedInput(null)}>
                    </TextInput>
                </View>
                <View style={styles.errorContainer}>
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                </View>
                <View style={[styles.inputWrapper,focusedInput === 'password' && { borderColor: colors.border[0]}, passwordError && { borderColor: colors.inputEror }]}>
                    <Feather name="lock" size={24} color={focusedInput === 'password' ? colors.border[0] : colors.secondary} style={styles.iconInput} />
                    <TextInput 
                        placeholder="Passwort" 
                        style={styles.input} 
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                            if (passwordError) {
                                setPasswordError("");
                            }
                        }}
                        onFocus={() => setFocusedInput('password')}
                        onBlur={() => setFocusedInput(null)}>
                    </TextInput>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Feather name={isPasswordVisible ? "eye" : "eye-off"} size={24} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.errorContainer}>
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                </View>
                <LinearGradient colors={['#D4AF37', '#B8860B']} 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.buttonRegister}
                >
                    <TouchableOpacity 
                        onPress={handleLogin}
                        disabled={isLoading}>
                        {isLoading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : <Text style={styles.textRegisterBtn}>Konto erstellen</Text>
                        }
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