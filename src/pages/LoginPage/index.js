import React, {useState, useEffect} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Logo, OJKLogo} from '../../assets/';

const LoginPage = () => {
  const [email, useEmail] = useState('');
  const [password, usePassword] = useState('');
  const navigation = useNavigation();
  const onLogin = async () => {
    await AsyncStorage.setItem('@email', email);
    navigation.navigate('MainApp');
  };
  return (
    <View style={{backgroundColor: '#FFBF00', flex: 1}}>
      <StatusBar backgroundColor={'#ffbf00'} barStyle="dark-content" />
      <View style={{alignItems: 'center', marginVertical: 110}}>
        <Image source={Logo} style={{width: 340, height: 120}} />

        <View
          style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 20}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              width: 50,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}>
            <Icon name="at" size={25} color="#212121" />
          </View>
          <TextInput
            value={email}
            placeholder="Masukkan Email"
            onChangeText={value => useEmail(value)}
            style={{
              backgroundColor: '#ffffff',
              flex: 1,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 15,
              paddingVertical: 15,
              elevation: 5,
              paddingLeft: 10,
            }}
          />
        </View>
        <View
          style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              width: 50,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}>
            <Icon name="key" size={25} color="#212121" />
          </View>
          <TextInput
            value={password}
            placeholder="Masukkan Password"
            onChange={text => usePassword(text)}
            secureTextEntry={true}
            style={{
              backgroundColor: '#ffffff',
              flex: 1,
              paddingVertical: 15,
              elevation: 5,
              paddingLeft: 10,
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              width: 50,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <Icon name="eye" size={15} color="#212121" />
          </View>
        </View>
        <TouchableOpacity
          onPress={onLogin}
          style={{
            backgroundColor: '#ffffff',
            paddingHorizontal: 60,
            paddingVertical: 7,
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 10,
            elevation: 5,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#000000',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity style={{marginHorizontal: 10}}>
            <Text style={{color: 'green'}}>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 10}}>
            <Text style={{color: 'red'}}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginVertical: 50,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'roboto',
              fontSize: 12,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#000000',
            }}>
            Terdaftar dan diawasi Oleh OJK
          </Text>
        </View>
        <View style={{alignContent: 'center'}}>
          <Image source={OJKLogo} style={{width: 150, height: 65}} />
        </View>

        <Text
          style={{
            fontFamily: 'roboto',
            fontSize: 10,
            fontWeight: 'normal',
            color: '#000000',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          MaybankFinance Indonesia Copyright 2022
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
