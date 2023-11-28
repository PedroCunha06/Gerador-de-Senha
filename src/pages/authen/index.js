import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication"

export function Authentication({ successAuthentication }) {

    const [isAuthenticated, setIsAuthenticated]= useState(false);

    async function verifyAvailableAuthentication(){
        const compatible = await LocalAuthentication.hasHardwareAsync();
        console.log(compatible);

        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log(types.map(type => LocalAuthentication.AuthenticationType[type]))
    }

    async function handleAuthentication() {
        const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (!isBiometricEnrolled) {
            return Alert.alert('Authentication', 'No biometrics found. Please register in your device');
        }

        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login with Biometric',
            fallbackLabel: 'Biometric not found'
        });

        setIsAuthenticated(auth.success);

        if (auth.success) {
            successAuthentication(); 
        }

        return isAuthenticated;
    }

    useEffect(() => {
        verifyAvailableAuthentication();
    })


    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../images/Logo.png")}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleAuthentication}
            >
                <Text
                    style={styles.buttonText}
                >
                    Enter
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(209, 209, 209)",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        marginBottom: 60,
        maxWidth: "30%",
        maxHeight: "20%"
    },
    button: {
        backgroundColor: "gray",
        width: "40%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    buttonText: {
        color: "black",
        fontSize: 15,
    }
})