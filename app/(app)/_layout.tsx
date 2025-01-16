import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useAtomValue } from 'jotai';
import { Text } from 'react-native';

import { authAtom } from '../../entities/auth/model/auth.state';
import { Colors, Fonts } from '../../shared/tokens';

export default function AppLayout() {
    const { access_token } = useAtomValue(authAtom);
    if (!access_token) {
        return <Redirect href="/login" />
    }

    return (
        <Drawer
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: Colors.blackLight,
                    shadowColor: Colors.blackLight
                },
                headerLeft: () => {
                    return <Text>!</Text>;
                },
                headerTitleStyle: {
                    color: Colors.white,
                    fontFamily: Fonts.regular,
                    fontSize: Fonts.f20
                },
                headerTitleAlign: 'center',
                sceneContainerStyle: {
                    backgroundColor: Colors.black
                }
            })}
        >
            <Drawer.Screen
                name="index"
                options={{
                    title: 'Мои курсы'
                }}
            />
        </Drawer>
    );
}