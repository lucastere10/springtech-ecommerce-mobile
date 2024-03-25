import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Carrinho from "../screens/Carrinho/index.tsx";
import Produtos from "../screens/Produtos";
import Perfil from "../screens/Perfil";
import AuthGuard from "../screens/AuthGuard";
import { Box, Icon } from "@gluestack-ui/themed";
import { BoxIcon, CircleUser, HomeIcon, Mail, Shield, ShoppingCart } from "lucide-react-native";
import { TotpRoutes } from "./totp.routes";

type AppRoutes = {
    home: undefined;
    carrinho: undefined;
    auth: undefined;
    produtos: undefined;
    perfil: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                },
            }}
        >

            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box style={{
                            height: 60,
                            width: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopWidth: focused ? 4 : 0,
                            borderTopColor: "#0D47A1"
                        }}>
                            <Icon color={focused ? "$blue900" : "#E7DCDA"} size="xl" as={HomeIcon} />
                        </Box>
                    )
                }}
            />

            <Screen
                name='carrinho'
                component={Carrinho} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box style={{
                            height: 60,
                            width: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopWidth: focused ? 4 : 0,
                            borderTopColor: "#0D47A1"
                        }}>
                            <Icon color={focused ? "$blue900" : "#E7DCDA"} size="xl" as={ShoppingCart} />
                        </Box>
                    )
                }}
                />

            <Screen
                name='auth'
                component={TotpRoutes} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box style={{
                            height: 60,
                            width: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopWidth: focused ? 4 : 0,
                            borderTopColor: "#0D47A1"
                        }}>
                            <Icon color={focused ? "$blue900" : "#E7DCDA"} size="xl" as={Shield} />
                        </Box>
                    )
                }}
                />

            <Screen
                name='produtos'
                component={Produtos} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box style={{
                            height: 60,
                            width: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopWidth: focused ? 4 : 0,
                            borderTopColor: "#0D47A1"
                        }}>
                            <Icon color={focused ? "$blue900" : "#E7DCDA"} size="xl" as={BoxIcon} />
                        </Box>
                    )
                }}
                />

            <Screen
                name='perfil'
                component={Perfil} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box style={{
                            height: 60,
                            width: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopWidth: focused ? 4 : 0,
                            borderTopColor: "#0D47A1"
                        }}>
                            <Icon color={focused ? "$blue900" : "#E7DCDA"} size="xl" as={CircleUser} />
                        </Box>
                    )
                }}
                />

        </Navigator>
    )
}
