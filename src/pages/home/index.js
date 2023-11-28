import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import { useState } from 'react'
import { ModalPassword } from "../../mode/modal"
import { usePasswordContext } from '../config/passwordGenerate'


export function Home() {

    const { numberPass, charPass } = usePasswordContext();
    const [caracteres, setCaracteres] = useState(12)
    const [password, setPassword] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    function typePassword(numbers, char) {
        let charset;
        if(numbers) {
            charset = '1234567890'
        }
        else if(char) {
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(numbers && char) {
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        } 
        return charset
    }

    function generatePassword() {
        let password = "";
        for (let i = 0, n = typePassword(numberPass, charPass).length; i < caracteres; i++) {
            password += typePassword(numberPass, charPass).charAt(Math.floor(Math.random() * n));
        }

        setPassword(password);
        setModalVisible(true);
    }


    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../images/Logo.png")}
            />

            <Text style={styles.title}>
                {caracteres} characters
            </Text>

            <View style={styles.area}>
                <Slider
                    style={{ height: 40 }}
                    minimumValue={4}
                    maximumValue={20}
                    maximumTrackTintColor='gray'
                    minimumTrackTintColor='black'
                    thumbTintColor='black'
                    value={caracteres}
                    onValueChange={(value) => setCaracteres(value.toFixed(0))}
                />
            </View>


            <TouchableOpacity
                style={styles.button}
                onPress={generatePassword}
            >
                <Text
                    style={styles.buttonText}
                >Generate Password</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
            >
                <ModalPassword
                    password={password}
                    handleClose={() => setModalVisible(false)}
                />
            </Modal>


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
    title: {
        fontSize: 20,
        fontStyle: "italic",
        fontWeight: "bold"
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: "gray",
        width: "70%",
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