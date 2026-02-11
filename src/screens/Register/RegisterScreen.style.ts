import { StyleSheet } from "react-native";
import { colors } from "../../../types/pallete";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background2,
    },
    arrowIconContainer: {
        position: 'absolute',
        top: 60,
        zIndex: 1,
    },
    arrowIcon: {
        width: 28,
        height: 28,
        margin: 16,
    },
    textContainer: {
        marginTop: 120,
        paddingHorizontal: 20,
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
        backgroundColor: colors.background,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        marginHorizontal: 20,
        marginTop: 16,
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
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 24,
        gap: 12,
    },
    textSwitch: {
        flex: 1,
        fontSize: 14,
        color: colors.text,
        lineHeight: 20,
        textAlign: 'left',
    },
    dividerContainer: { 
        marginHorizontal: 20,
        marginTop: 20,
    },
    line: {
        height: 1,
        backgroundColor: colors.line,
        marginHorizontal: 40,
        marginTop: 32,
    },
    dividerText: {
        color: colors.text,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 14,
    },
    containerSocialMedia: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonSocialMedia: {
        padding: 5,
        marginHorizontal: 5,
    },
    iconSocialMedia: {
        width: 100,
        height: 45,
    },

})