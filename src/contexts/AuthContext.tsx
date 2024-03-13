import React, { createContext, useState, useEffect, useContext } from "react";
import { loginUser } from "../service/api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

interface AuthContextType {
    isLoading: boolean;
    isSignedIn: boolean;
    signIn: (data: LoginRequest) => Promise<void>;
    signOut: () => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const checkSignInStatus = async () => {
            const token = await AsyncStorage.getItem("token");
            setIsSignedIn(!!token);
            setIsLoading(false);
        };
        checkSignInStatus();
    }, []);

    const signIn = async (data: LoginRequest) => {
        setIsLoading(true);
        const loginSuccessful = await loginUser(data);
        setIsSignedIn(loginSuccessful);
        setIsLoading(false);
    };

    const signOut = async () => {
        try {
            await AsyncStorage.removeItem('token');
            ToastAndroid.show('Sessão finalizada', ToastAndroid.TOP);
            console.log('Logout successful!');
            setIsSignedIn(false);
        } catch (e) {
            console.error('Logout failed!');
        }
    };
    

    return (
        <AuthContext.Provider value={{ isLoading, isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
