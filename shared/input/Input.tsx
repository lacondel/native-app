import { TextInput, TextInputProps, StyleSheet, Pressable, View } from "react-native";
import { useState } from "react";

import { Colors, Radius, Fonts } from '../tokens'
import EyeOpenedIcon from "../../assets/icons/eye-opened";
import EyeClosedIcon from "../../assets/icons/eye-closed";

export function Input({ isPassword, ...props}: TextInputProps & { isPassword?: boolean }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    return (
        <View>
            <TextInput
                style={styles.input}
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholderTextColor={'Colors.gray'}
                {...props}
            />
            {isPassword &&
                <Pressable onPress={() => setIsPasswordVisible(state => !state)} style={styles.eyeIcon}>
                    {isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
                </Pressable>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: Fonts.f16,
        color: Colors.gray,
        fontFamily: Fonts.regular
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18,
    }
});