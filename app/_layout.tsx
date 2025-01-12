import { Stack } from 'expo-router';

import { Colors } from "../shared/tokens";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootLayout() {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
        <StatusBar style="light" />
        <Stack
            screenOptions={{
                statusBarBackgroundColor: Colors.black,
                contentStyle: {
                    backgroundColor: Colors.black,
                    paddingTop: insets.top
                }
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="restore"
                options={{
                    title: 'Восстановить пароль',
                    presentation: 'modal'
                }} />
        </Stack>
        </SafeAreaProvider>
    );
}