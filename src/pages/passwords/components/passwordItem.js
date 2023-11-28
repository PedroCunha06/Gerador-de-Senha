import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"
import { ModalName } from "../../../mode/modalName";

export function PasswordItem({ data, removePassword, updatePassowordName }) {

    const [visible, setVisible] = useState(false)
    const [visiblePass, setVisiblePass] = useState("")
    const [modalVisible, setModalVisible] = useState(false)


    const onVisible = () => {
        setVisible(!visible)

        dataVisible()
    }

    const dataVisible = () => {
        if (visible) {
            setVisiblePass("")
        } else {
            setVisiblePass(data.password)
        }
    }


    return (
        <View style={styles.content}>
            <Text
                style={{ color: 'white', paddingBottom: 10 }}
            >
                {data.name}
            </Text>

            <View style={styles.container}>

                <Text style={
                    {
                        color: "white",
                        backgroundColor: visible ? "black" : "white",
                        width: "50%",
                        borderRadius: 10
                    }
                }>
                    {visiblePass}
                </Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={{ paddingLeft: 10 }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Ionicons
                            name="create-outline"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={removePassword}
                        style={{ paddingLeft: 10 }}
                    >
                        <Ionicons
                            name="remove-circle"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ paddingLeft: 10 }}
                        onPress={onVisible}
                    >
                        <Ionicons
                            name={visible ? "eye" : "eye-off"}
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
            >
                <ModalName
                    handleClose={() => {
                        setModalVisible(false)
                    }}
                    namePass={data.name}
                    onUpdateName={(data, newName) => {
                        updatePassowordName(data, newName);
                    }}
                />
            </Modal>
        </View>


    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: "black",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flexDirection: "row",
        paddingRight: 14
    }
})