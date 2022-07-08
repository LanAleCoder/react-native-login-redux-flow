/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useEffect, useMemo, useReducer } from 'react';
import {AuthProvider, LoginContext} from './src/redux/context';
import Login from './src/views/login';
import LoginSucces from './src/views/loginSuccefully';

const Stack = createNativeStackNavigator();
const App = () => {
  const [{userToken}, {persistLogin}] = useContext(LoginContext)
  useEffect(() =>{
    persistLogin();
  }, [])
  return (
    <NavigationContainer>
     <Stack.Navigator>
      {userToken == null ? 
      <>
      <Stack.Screen name='Login' component={Login} />
      </>
      :
      <>
      <Stack.Screen name='Home' component={LoginSucces} />
      </>
      }
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => <AuthProvider><App /></AuthProvider>;