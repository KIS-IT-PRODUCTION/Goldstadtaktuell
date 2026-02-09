import { StyleSheet } from 'react-native';
import { colors } from "../../../types/pallete";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    containerLogo: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    },
     image: {
        width: 305,
        height: 150,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
    },
    buttonRegister: {
        backgroundColor: colors.buttonBackground,
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 16,
    },
    buttonLogin: {
        backgroundColor: colors.buttonBackground,
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 16,
        marginTop: 20,
    },
    buttonText: {
        color: colors.buttonText,
        fontSize: 24,
        fontWeight: 'medium',
    },
});