import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {banner1} from '../../assets';
import Logo from '../../assets/img/MaybankFinance.png';
import {News} from '../../assets';

const Home = () => {
  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem('@email');
      alert(JSON.stringify(value));
    } catch (e) {}
  });
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: '#FFCC00',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={Logo}
            style={{
              height: 70,
              width: 170,
              position: 'absolute',
              zIndex: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <View>
            <Icon
              name={'bell'}
              size={20}
              color={'#000000'}
              style={{
                height: 20,
                width: 20,
                position: 'absolute',
                zIndex: 2,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={banner1}
          style={{
            height: 150,
            width: 360,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
      <View
        style={{backgroundColor: '#FFCC00', width: 400, height: 170}}></View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={News} style={{width: 400, height: 200}} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
