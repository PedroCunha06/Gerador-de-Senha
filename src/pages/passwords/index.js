import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { PasswordItem } from "./components/passwordItem";

export function Password() {
    const [listPassword, setListPassword] = useState([])
    const focused = useIsFocused();
    const { getItem, deleteItem, updateItem, deleteAllItems } = useStorage();

    async function exemploDeDeleteAllItems() {
        try {
            const passwordsRemovidos = await deleteAllItems("@pass");

            console.log("Todos os itens removidos com sucesso.");
            console.log("Itens removidos:", passwordsRemovidos);
        } catch (error) {
            console.error("Erro ao excluir todos os itens:", error);
        }
    }

    useEffect(() => {
        async function loadPassword() {
            const passwords = await getItem("@pass");
            setListPassword(passwords);
        }
        loadPassword();
    }, [focused])


    async function handleDeletePassword(item) {
        const passwords = await deleteItem("@pass", item)

        setListPassword(passwords);
    }

    async function handleUpdatePasswordName(item, newName) {
        var updatedItem = {
            password: item.password,
            name: item.name
        };
        updatedItem.name = newName;
        const passwords = await updateItem("@pass", updatedItem);
        setListPassword(passwords)
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={styles.header}>
                <Text
                    style={styles.title}
                >My Passwords</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{ paddingTop: 14, flex: 1 }}
                    data={listPassword}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => (
                        <PasswordItem
                            data={item}
                            removePassword={() => handleDeletePassword(item)}
                            updatePassowordName={(newName) => handleUpdatePasswordName(item, newName)}
                        />)}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "black",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14
    }
})