import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthGuard from "../screens/AuthGuard";
import TotpScreen from "../screens/Totp";

type TotpRoutes = {
    qrreader: undefined;
    totp: undefined;

}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<TotpRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<TotpRoutes>();

export function TotpRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>

            <Screen
                name="qrreader"
                component={AuthGuard}
            />

            <Screen
                name="totp"
                component={TotpScreen}
            />
            
        </Navigator>
    )

}
