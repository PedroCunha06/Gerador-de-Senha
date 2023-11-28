import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Password } from "./pages/passwords";
import { Config } from "./pages/config";
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons size={size} color="black" name="home" />
                        }

                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />

            <Tab.Screen
                name="Password"
                component={Password}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons size={size} color="black" name="lock-closed" />
                        }

                        return <Ionicons size={size} color={color} name="lock-closed-outline" />
                    }
                }}
            />

<Tab.Screen
                name="Config"
                component={Config}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused) {
                            return <Ionicons size={size} color="black" name="md-settings" />
                        }

                        return <Ionicons size={size} color={color} name="md-settings-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    );
}