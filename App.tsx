import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, StatusBar } from '@gluestack-ui/themed';
import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';
import { OneSignal } from 'react-native-onesignal';
import { ONE_SIGNAL_SECRET } from '@env';

OneSignal.initialize(ONE_SIGNAL_SECRET)
OneSignal.Notifications.requestPermission(true)

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