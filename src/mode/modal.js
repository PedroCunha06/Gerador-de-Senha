import { View, StyleSheet, Text, TouchableOpacity, Pressable, ToastAndroid, TextInput } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../hooks/useStorage"
import { useState } from "react";

export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

    const [name, setName] = useState("")


    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password)
        ToastAndroid.show("Senha copiada", ToastAndroid.SHORT)
    }

    async function SalveDate() {
        const dates = {name, password}
        await saveItem("@pass", dates)
        alert("Senha salva com Sucesso")
        handleClose();
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                Generated password
                </Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>
                <TextInput
                    style={styles.innerName}
                    placeholderTextColor="gray"
                    placeholder="Enter your password name"
                    onChangeText={(text) => setName(text)}
                />
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleClose}
                    >
                        <Text style={styles.buttonText}>
                            Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.button, styles.buttonSave]}
                    onPress={SalveDate}
                    >
                        <Text style={styles.buttonSaveText}>
                            Save Password
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        backgroundColor: "white",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: "black",
        width: "90%",
        padding: 14,
        borderRadius: 8
    },
    innerName: {
        backgroundColor: "black",
        width: "90%",
        padding: 14,
        marginTop: 14,
        height: 50,
        borderRadius: 8,
        color: "white",
    },
    text: {
        color: "white",
        textAlign: "center"
    },
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
    },
    buttonSave: {
        backgroundColor: "gray",
        paddingTop: 14,
        paddingBottom: 14,
        borderRadius: 8,
        borderColor: "black",
        borderWidth: 2
    },
    buttonSaveText: {
        color: "white",
        fontWeight: "bold",
    }
})