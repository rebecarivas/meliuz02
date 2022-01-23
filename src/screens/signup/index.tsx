import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import IsAuth from '../../components/IsAuth';

import api from '../../services';
import {IUser} from '../../types';

const SignUp: React.FC = () => {
  const navigation: void | any = useNavigation();

  const [data, setData] = useState<IUser>({} as IUser);

  const handleLogin = () => {
    navigation.navigate('Logar');
  };

  const handleRegister = useCallback(() => {
    api
      .post('users', data)
      .then(() => {
        navigation.navigate('Logar');
        setData({
          name: '',
          email: '',
          password: '',
        });
      })
      .catch(err => console.warn(err))
      .finally(() => {
        setData({
          name: '',
          email: '',
          password: '',
        });
      });
  }, [data, navigation]);

  return (
    <SafeAreaView>
      <View style={styles.default}>
        <View style={styles.card}>
           <View style={styles.titleView}>
            <Text style={styles.title}>Cadastro</Text>
          </View>
          <View style={styles.sectionStyle}>
            <Image
                source={{
                  uri: 'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
                }}
                style={styles.imageStyle}
              />
            <TextInput
              placeholder="Informe seu nome"
              onChangeText={e => setData({...data, name: e})}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/free/png-256/email-2155119-1814289.png',
                }}
                style={styles.imageStyle}
              />
            <TextInput
              placeholder="Informe seu email"
              onChangeText={e => setData({...data, email: e.toLocaleLowerCase()})}
          />
          </View>
          <View style={styles.sectionStyle}>
            <Image
               source={{
                 uri: 'http://cdn.onlinewebfonts.com/svg/img_398183.png',
               }}
               style={styles.imageStyle}
             />
           <TextInput
             placeholder="Informe sua senha"
             secureTextEntry={true}
             onChangeText={e => setData({...data, password: e})}
           />
          </View>
          <Button title="Cadastrar" onPress={handleRegister} />
        </View>
        <View>
          <Text style={styles.outText}>Já possui cadastro?</Text>
          <TouchableOpacity onPress={handleLogin} style={styles.linkScreen}>
            <Text style={styles.innerText}>Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', //Dimensions.get('window').height,
  },
  card: {
    backgroundColor: '#FECAD6',
    paddingHorizontal: 45,
    paddingVertical: 45,
    borderRadius: 12,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222222',
    paddingBottom: 20,
  },
  titleView: {
    alignItems: 'center',
  },
  linkScreen: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  innerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  outText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1.0,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    minWidth: 190,
  },
  imageStyle: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 25,
    width: 25,
    alignItems: 'flex-start',
    resizeMode: 'stretch',
  }
  // imageView: {
  //   height: 150,
  //   width: 210,
  // },
  // titleImage: {
  //   height: 150,
  //   width: 210,
  //   resizeMode: 'center',
  // },
});