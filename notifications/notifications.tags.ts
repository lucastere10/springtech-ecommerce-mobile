import { OneSignal } from "react-native-onesignal";

export function tagUserEmailCreate(login:string){
    OneSignal.User.addTag("user_login", login)
}

