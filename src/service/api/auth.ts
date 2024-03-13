import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import api from './api';

export const registerUser = async (data: RegisterRequest) => {
    try {
        const res = await api.post('/auth/register', {
            nome: data.nome,
            login: data.login,
            senha: data.senha,
            role: data.role,
        });
        console.log(res.data);
        Alert.alert('Usuário registrado com sucesso!');
    } catch (error) {
        console.error(error);
        Alert.alert('Um erro ocorreu ao tentar registrar o usuário');
    }
};


export const loginUser = async (data: LoginRequest) => {
    try {
        const response = await api({
            method: 'post',
            url: '/auth/login',
            data: {
                login: data.login,
                senha: data.senha,
            }
        });
        await AsyncStorage.setItem("token", response.data.token);
        console.log(`token: ${response.data.token}`)
        return true; // Login was successful
    } catch (err: any) {
        if (err.response && err.response.data && err.response.data.userMessage) {
            Alert.alert(err.response.data.userMessage);
        } else {
            console.error('Error:', err.message);
        }
        return false; // Login failed
    }
}

