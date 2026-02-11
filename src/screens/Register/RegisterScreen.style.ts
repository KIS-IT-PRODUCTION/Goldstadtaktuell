import { StyleSheet } from "react-native";
import { colors } from "../../../types/pallete";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background2,
    },
    arrowIcon: {
        width: 28,
        height: 28,
        margin: 16,
    },
    textRegister: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        justifyContent: 'center',
    },
    textRegisterDescribe: {
        fontSize: 16,
        fontWeight: 'regular',
        color: colors.text,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    inputContainer: {
        marginTop: 32,
    },
    input: {
        height: 56,
        borderColor: colors.borderInput,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        marginHorizontal: 20,
        marginTop: 24,
    },
    buttonRegister: {
        height: 56,
        borderRadius: 16,
        marginHorizontal: 20,
        marginTop: 32,
        justifyContent: 'center',
    },
    textRegisterBtn: {
        color: colors.buttonText,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        lineHeight: 56,
    },
})