import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {



  useEffect(() => {
    setTimeout(() => {
      getData('user').then(res => {
        if (!res) {
          navigation.replace('Login')
        } else {
          // navigation.replace('GetStarted')
          navigation.replace('Home')
        }
      })
    }, 1500)
  }, []);


  return (
    <ImageBackground style={{
      flex: 1,
      backgroundColor: colors.primary,
      justifyContent: 'center',
    }}>




      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/logo.png')} style={{
          width: windowWidth,
          height: windowWidth / 2,
          resizeMode: 'contain'
        }} />

        <View style={{
          marginTop: 10,
          padding: 10,
        }}>
          <ActivityIndicator color={colors.secondary} size="large" />
        </View>
      </View>
      <View style={{
        padding: 10,
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: colors.primary
        }}>
          <Image
            source={require('../../assets/piksi.png')}
            style={
              {
                marginVertical: 10,
                width: 100,
                height: 50,
                resizeMode: 'contain'
              }
            }
          />
          <Image
            source={require('../../assets/asto.png')}
            style={
              {
                marginVertical: 10,
                width: 100,
                height: 50,
                resizeMode: 'contain'
              }
            }
          />
          <Image
            source={require('../../assets/tutwuri.png')}
            style={
              {
                marginVertical: 10,
                width: 100,
                height: 50,
                resizeMode: 'contain'
              }
            }
          />
          <Image
            source={require('../../assets/kedai.png')}
            style={
              {
                marginVertical: 10,
                width: 100,
                height: 50,
                resizeMode: 'contain'
              }
            }
          />




        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
