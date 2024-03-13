import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed';
import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';


export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </GluestackUIProvider>
  );
}