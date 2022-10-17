import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Profile = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
      <View style={{flex: 0.5, backgroundColor: '#212121'}} />
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1664516918198-e7ddd1bade3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: '#ffffff',
              position: 'absolute',
              zIndex: 2,
            }}
          />
        </View>
        <View style={{marginTop: 60, justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
            Nicholas
          </Text>
          <Text style={{textAlign: 'center'}}>Front End Dev</Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="mobile-alt" size={25} color="#212121" />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>+62-812-8218-4540</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="location-arrow" size={25} color="#212121" />
              </View>

              <View style={{justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>Jl.TSS GG.PancaKrida 1</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <Icon name="envelope" size={25} color="#212121" />
              </View>

              <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>
                  Nicholas@MaybankFinance.com
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 20}}>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name="facebook-square"
              size={25}
              color="#4079FF"
              onPress={() => Linking.openURL('https://id-id.facebook.com/')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name="linkedin"
              size={25}
              color="#033E8C"
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/nicho-las-b1b655206/',
                )
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name="whatsapp"
              size={25}
              color="#00984B"
              onPress={() => Linking.openURL('https://wa.me/6281282184540/')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => Linking.openURL('https://www.instagram.com/')}>
            <Icon
              name="instagram"
              size={25}
              color="#D90BA2"
              onPress={() => Linking.openURL('https://www.instagram.com/')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Profile;
