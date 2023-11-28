import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { PasswordProvide, usePasswordContext } from "./passwordGenerate";

export function Config() {

    const { numberPass, setNumberPass, charPass, setCharPass } = usePasswordContext();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text
                    style={styles.title}
                >Configurations</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.topic}>
                    Generate Password
                </Text>
                <View style={styles.box}>
                    <View style={{
                        width: "45%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <Text>
                            Numbers:
                        </Text>
                        <Checkbox
                            value={numberPass}
                            onValueChange={setNumberPass}
                        />
                    </View>
                    <View style={{
                        width: "45%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <Text>
                            Letters:
                        </Text>
                        <Checkbox
                            value={charPass}
                            onValueChange={setCharPass}
                        />
                    </View>

                </View>
                <View>

                </View>
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
    },
    topic: {
        color: "black",
        fontSize: 16,
        paddingTop: 14,
        borderBottomWidth: 2,
        borderBottomColor: "black"
    },
    box: {
        marginTop: 14,
        flexDirection: "row",
        paddingLeft: 14,
        alignItems: "center",
        justifyContent: "space-between"
    }
})