import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput, Switch, Alert, ActivityIndicator } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons"
import { styles } from "./RegisterScreen.style";
import { colors } from "../../../types/pallete";
import { LinearGradient } from "expo-linear-gradient";
import { AppleBg, GoogleBg, FacebookBg, Arrow } from "../../../assets/UI/export.image";

type RootStackParamList = {
    Login: undefined;
};

const RegisterScreen: React.FC = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [enabledError, setEnabledError] = useState(false);

    const handleRegister = async () => {

        if (!validate()) {
            return;
        }

        if (!email || !password) {
            alert("Всі поля повинні бути заповнені.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:4004/api/auth/register", {
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

            if (response.status === 201) {
                Alert.alert("Успішно", "Користувача успішно зареєстровано.");
                console.log("Token:", data.token);
                navigation.navigate("Login");
            } else {
                Alert.alert("Помилка", data.message || "Помилка реєстрації. Спробуйте ще раз.");
            }
        } catch (error) {
            Alert.alert("Помилка", "Виникла помилка. Спробуйте ще раз.");
            console.error("Помилка реєстрації:", error);
        } finally {
            setIsLoading(false);
        }
    };

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

        if (!isEnabled) {
            Alert.alert("Умови використання", "Ви повинні прийняти умови використання, щоб зареєструватися.");
            isValid = false;
            setEnabledError(true);
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
                <Text style={styles.textRegister}>Registrierung</Text>
                <Text style={styles.textRegisterDescribe}>Werden Sie Teil der Community und lesen Sie exklusive Berichte.</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={[styles.inputWrapper,focusedInput === 'email' && { borderColor: colors.border[0]}, emailError ? styles.inputError : null]}>
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
                <View style={[styles.inputWrapper,focusedInput === 'password' && { borderColor: colors.border[0]}, passwordError ? styles.inputError : null]}>
                    <Feather name="lock" size={24} color={focusedInput === 'password' ? colors.border[0] : colors.secondary} style={styles.iconInput} />
                    <TextInput 
                        placeholder="Passwort" 
                        style={styles.input} 
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        onChangeText={setPassword}
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
                    onPress={handleRegister}
                    disabled={isLoading}
                    style={styles.buttonRegisterTouchable}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color={colors.buttonText} />
                    ) : (
                        <Text style={styles.textRegisterBtn}>Registrieren</Text>
                    )}
                </TouchableOpacity>
                </LinearGradient>
                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#D4AF37" }}
                        thumbColor={isEnabled ? "#B8860B" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={[styles.textSwitch, isEnabled ? styles.textSwitchEnabled : styles.textSwitchDisabled, enabledError ? styles.textSwitchError : null]}>Durch Klicken auf «Registrieren» akzeptieren Sie unsere AGB</Text>
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