import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ToastAndroid, TextInput } from "react-native";


export function ModalName({ namePass, handleClose , onUpdateName}) {

    const [newName, setNewName] = useState(namePass)

    async function SalveName() {
        try{
            await onUpdateName(newName)
           ToastAndroid.show("Salve name", ToastAndroid.SHORT) 
        } catch {
            console.log("Save name error");
        }
        
        handleClose();
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    style={styles.innerName}
                    placeholderTextColor="gray"
                    placeholder="Enter your password name"
                    value={newName}
                    onChangeText={(text) => setNewName(text)}
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
                        onPress={SalveName}
                    >
                        <Text style={styles.buttonSaveText}>
                            Save name
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
    innerName: {
        backgroundColor: "black",
        width: "90%",
        padding: 14,
        borderRadius: 8,
        color: "white"
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