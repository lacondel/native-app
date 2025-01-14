import { View, Text } from "react-native";
import { useSetAtom } from "jotai";

import { Button } from "../../shared/Button/Button";
import { logoutAtom } from "../../entities/auth/model/auth.state";

export default function CoursePage() {
    const logout = useSetAtom(logoutAtom);
    return (
        <View>
            <Text>index</Text>
            <Button text="Выход" onPress={logout}/>
        </View>
    );
}