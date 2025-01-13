import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font'

import { Colors } from "../shared/tokens";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
        FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf')
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    useEffect(() => {
        if(error) {
            throw error;
        }
    }, [error]);

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
        <StatusBar style="light" />
        <Stack
            screenOptions={{
                statusBarBackgroundColor: Colors.black,
                contentStyle: {
                    backgroundColor: Colors.black
                }
            }}
        >
            <Stack.Screen name="login" />
            <Stack.Screen name="restore"
                options={{
                    title: 'Восстановить пароль',
                    presentation: 'modal'
                }} />
        </Stack>
        </SafeAreaProvider>
    );
}