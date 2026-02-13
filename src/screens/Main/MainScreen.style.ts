import { StyleSheet } from "react-native";
import { colors } from "../../../types/pallete";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});