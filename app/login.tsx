import { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { Input } from "../shared/input/Input";
import { Colors, Gaps } from '../shared/tokens';
import { Button } from "../shared/Button/Button";
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { CustomLink } from '../shared/CustomLink/CustomLink';

export default function Login() {
  const [error, setError] = useState<string | undefined>(undefined);

  const alert = () => {
    setError('Неверный логин или пароль.');
    setTimeout(() => {
      setError(undefined);
    }, 4000);
  }

  return (
    <View style={styles.container}>
      <ErrorNotification error={error} />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode='contain'
        />
        <View style={styles.form}>
          <Input placeholder='Email' />
          <Input isPassword placeholder='Пароль' />
          <Button text='Войти' onPress={alert} />
        </View>
        <CustomLink href={'/restore'} text="Восстановить пароль" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    padding: 55,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16
  },
  logo: {
    width: 220
  }
});
