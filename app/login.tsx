import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { Input } from "../shared/input/Input";
import { Colors, Gaps } from '../shared/tokens';
import { Button } from "../shared/Button/Button";
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { loginAtom } from '../entities/auth/model/auth.state';
import { router } from 'expo-router';

export default function Login() {
	const [localError, setLocalError] = useState<string | undefined>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);

	const submit = () => {
		if (!email) {
			setLocalError('Не введён email');
			return;
		}
		if (!password) {
			setLocalError('Не введён пароль');
			return;
		}
		login({ email, password });
	};

	useEffect(() => {
		if (error) {
			setLocalError(error);
		}
	}, [error]);

	useEffect(() => {
		if (access_token) {
			router.replace('/(app)');
		}
	}, [access_token]);

  return (
    <View style={styles.container}>
      <ErrorNotification error={localError} />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode='contain'
        />
        <View style={styles.form}>
          <Input placeholder='Email' onChangeText={setEmail} />
          <Input isPassword placeholder='Пароль' onChangeText={setPassword} />
          <Button text='Войти' onPress={submit} isLoading={isLoading}/>
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
