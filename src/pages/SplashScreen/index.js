import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {SplashBackground, Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginPage');
    }, 5000);
  }, [navigation]);
  return (
    <>
      <ImageBackground source={SplashBackground} style={styles.background}>
        <Image source={Logo} style={styles.Logo} />
      </ImageBackground>
      <View style={styles.view}>
        <Text style={styles.copyright}>
          MaybankFinance Indonesia Copyright 2022
        </Text>
      </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    width: 350,
    height: 133,
  },
  view: {
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingStart: 100,
    backgroundColor: '#FFBF00',
  },

  copyright: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
  },
});
