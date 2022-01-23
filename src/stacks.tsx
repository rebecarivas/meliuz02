import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import SignIn from './screens/signin';
import SignUp from './screens/signup';
import Dash from './screens/dash';

const {Navigator, Screen} = createStackNavigator();

const Stack: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="Cadastre-se" component={SignUp} />
          <Screen name="Logar" component={SignIn} />
          <Screen name="dash" component={Dash} />
        </Navigator>
      </Provider>
    </NavigationContainer>
  );
}
export default Stack;
