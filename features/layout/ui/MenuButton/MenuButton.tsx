import { Pressable, PressableProps, Text, StyleSheet, View, ActivityIndicator } from "react-native";

import { Radius, Colors, Fonts } from "../tokens";

export function MenuButton({ navigation, ...props }: PressableProps & { navigation: any }) {
    return (
        <Pressable {...props} onPressIn={} onPressOut={}>
            <View style={styles.button}>
                <MenuIcon />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});