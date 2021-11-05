import React, { useState , useEffect } from 'react';
import { TouchableOpacity, View,Text , TextInput, Button, KeyboardAvoidingView  } from 'react-native';
import Styles from './LogInStyles.js';
import Logo from '../Logo';
import { theme } from '../../../core/theme.js';
import Title from '../../Texts/Title.js';
import Background from '../Background';
//import { AuthContext } from '../../context.js';

export const AuthContext = React.createContext();

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState({ value: ''})
  const [password, setPassword] = useState({ value: ''})

  const onLoginPressed = () => {
    fetch("http://192.168.1.108:4008/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: "HomePage",
                params: {
                  name: res.name,
                email: res.email
                },
              },
            ],
          });
        navigation.navigate("HomePage", {
            name: res.name,
      email:res.email
          });
        } else {
          alert(res.message);
        }
      })
      .done();
  };
  return (
    <>
       <Background>
       <View style={Styles.container}>
      <Logo />
      <Title color={{ color: theme.colors.primary }} size={{ fontSize: 20 }} fontFamily={{ fontFamily: 'FontThree' }}>Login</Title>
      <TextInput
        style={Styles.textInput}
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text })}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email" />
      <TextInput
        style={Styles.textInput}
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text})}
        placeholder="Password"
        secureTextEntry />
      <View style={Styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={Styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.button}>
        <TouchableOpacity onPress={()=> onLoginPressed } >
          <Text style={{color: theme.colors.surface, fontSize:20 , fontWeight: 'bold' , fontFamily:'FontTwo' }}>
            Login
          </Text>
        </TouchableOpacity>
          
          </View>
      <View style={Styles.row}>
        <Text style={{ color: theme.colors.primary, fontFamily: 'FontThree', fontSize:14 , marginTop:5 }}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={Styles.link}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
       </Background>
    </>
   
  )
}
