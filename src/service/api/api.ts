import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: "http://10.0.2.2:8080/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchProducts = async () => {
  try {
    const response = await api.get(`/produtos`);
    return { data: response.data, error: null };
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching products:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
};

export const fetchUserData = async () => {
  try {
    const response = await api.get(`/auth/user`);
    console.log(response.data)
    return { data: response.data, error: null };
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching user:', err.response.status
      );
      return { data: null, error: err.response.status };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
};



export default api;
