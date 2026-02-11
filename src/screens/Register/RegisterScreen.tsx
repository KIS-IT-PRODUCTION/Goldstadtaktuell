import React from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import { styles } from "./RegisterScreen.style";
import { LinearGradient } from "expo-linear-gradient";
import { AppleBg, GoogleBg, FacebookBg, Arrow } from "../../../assets/UI/export.image";

const RegisterScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Image source={Arrow} style={styles.arrowIcon} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.textRegister}>Registrierung</Text>
                <Text style={styles.textRegisterDescribe}>Werden Sie Teil der Community und lesen Sie exklusive Berichte.</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="E-Mail Adresse" style={styles.input}></TextInput>
                <TextInput placeholder="Passwort" style={styles.input}></TextInput>
                <LinearGradient colors={['#D4AF37', '#B8860B']} 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.buttonRegister}
                >
                <TouchableOpacity>
                    <Text style={styles.textRegisterBtn}>Konto erstellen</Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )
}

export default RegisterScreen;