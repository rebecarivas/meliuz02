import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  StyleSheet,
} from 'react-native';

import {IAuth, IConfirmationText} from '../../types';

import api from '../../services';

interface IPasswordChange {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

const IsAuth: React.FC = () => {
  const globalState = useSelector((state: IAuth) => state.auth);
  const [password, setPassword] = useState<IPasswordChange>(
    {} as IPasswordChange,
  );
  const [confirmMessage, setConfirmMessage] = useState<IConfirmationText>(
    {} as IConfirmationText,
  );

  const handleUpdatePassword = () => {
    api
      .put('users', password, {
        headers: {
          ContentType: 'application/json',
          Authorization: 'Bearer ' + globalState.token,
        },
      })
      .then(res => {
        if (res.status === 200) {
          showToastSucsess();
          setConfirmMessage({
            result: true,
            confirmationText: 'Alterada com sucesso',
          });
        }
      })
      .catch(err => {
        console.warn(err);
        showToastFailed();
        setConfirmMessage({
          result: false,
          confirmationText: 'Ocorreu um erro, tente novamente',
        });
      })
      .finally(() => {
        setPassword({
          oldPassword: '',
          password: '',
          confirmPassword: '',
        });
      });
  };

  const showToastSucsess = () => {
    ToastAndroid.showWithGravity(
      'Senha alterada corretamemte',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastFailed = () => {
    ToastAndroid.showWithGravity(
      'Ocorreu algum erro, tente novamente',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showConfirmationText = () => {
    if (confirmMessage.result) {
      return (
        <>
          <Text style={styles.confirmTrue}>
            {confirmMessage.confirmationText}
          </Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.confirmFalse}>
            {confirmMessage.confirmationText}
          </Text>
        </>
      );
    }
  };

  return (
    <View>
      <Text style={styles.titleText}>Olá {globalState?.user.name}!</Text>
      <TextInput
        placeholder="Old password"
        value={password.oldPassword}
        secureTextEntry={true}
        onChangeText={e => setPassword({...password, oldPassword: e})}
      />
      <TextInput
        placeholder="New password"
        value={password.password}
        secureTextEntry={true}
        onChangeText={e => setPassword({...password, password: e})}
      />
      <TextInput
        placeholder="Confirm new password"
        value={password.confirmPassword}
        secureTextEntry={true}
        onChangeText={e => setPassword({...password, confirmPassword: e})}
      />
      <Button
        title="Confirm"
        onPress={handleUpdatePassword}
        color="#2a2a2a"
        accessibilityLabel="Confirmar mudança de senha"
      />
      {showConfirmationText()}
    </View>
  );
};

const styles = StyleSheet.create({
  confirmTrue: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'green',
  },
  confirmFalse: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'red',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default IsAuth;