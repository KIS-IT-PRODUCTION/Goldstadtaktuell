import { StyleSheet } from 'react-native';
import { colors } from "../../../types/pallete";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    containerLogo: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        marginBottom: 20,
    },
     image: {
        width: 335,
        height: 180,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        width: '100%',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 50,
        gap: 15,
    },
    buttonRegister: {
        borderColor: colors.borderColor[1],
        borderWidth: 2,
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 16,
    },
    buttonLogin: {
        backgroundColor: colors.buttonBackground[0],
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 16,
        marginTop: 20,
    },
    buttonText: {
        color: colors.buttonText,
        fontSize: 24,
        fontWeight: 'medium',
        justifyContent: 'center',
        textAlign: 'center',
    },
    buttonTextRegister: {
        color: colors.textGradient[1],
        fontSize: 24,
        fontWeight: 'medium',
        justifyContent: 'center',
        textAlign: 'center',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.line,
    },
    orText: {
        marginHorizontal: 10,
        color: colors.text,
        fontSize: 16,
    },
    containerSocialMedia: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
        
    },
    buttonSocialMedia: {
        padding: 15,
        marginHorizontal: 10,
    },
    socialMediaIcon: {
        width: 34,
        height: 34,
    },
    
});