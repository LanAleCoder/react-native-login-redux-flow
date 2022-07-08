import { Button, SafeAreaView, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../redux/context'

const Login = ({navigation}) => {
  const [{}, {signIn}] = useContext(LoginContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = () => {
    signIn(email + password)
    navigation.replace('Login', {screen: 'Home'})
  }
    return (
        <SafeAreaView>
      <View>
       <TextInput placeholder='Ingresa tu correo' onChangeText={text => setEmail(text)} value={email} />
       <TextInput placeholder='Ingresa tu contraseña' secureTextEntry={true} onChangeText={text => setPassword(text)} value={password} />
       <Button title='Iniciar sesión' onPress={onLogin}/>
      </View>
      </SafeAreaView>
    )
}

export default Login;