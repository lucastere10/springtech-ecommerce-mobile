import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Carrinho from "../screens/Carrinho/index.tsx";
import Produtos from "../screens/Produtos";
import Perfil from "../screens/Perfil";

type AppRoutes = {
    home: undefined;
    carrinho: undefined;
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
        }}
        >

            <Screen
                name='home'
                component={Home} />

            <Screen
                name='carrinho'
                component={Carrinho} />

            <Screen
                name='produtos'
                component={Produtos} />

            <Screen
                name='perfil'
                component={Perfil} />

        </Navigator>
    )
}