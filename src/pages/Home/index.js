import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';

export default function Home({ navigation, route }) {

  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});

  const _getTransaction = async () => {

    await getData('user').then(u => {
      setUser(u);
    })

    await axios.post(apiURL + 'company').then(res => {

      setComp(res.data.data);

    });

    await axios.post(apiURL + 'menu').then(res => {

      console.log(res.data);
      setData(res.data);

    });
  }


  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const __renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(item.modul, item)}>
        <View style={{
          flex: 1,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.secondary,
          // backgroundColor: colors.white,
          margin: 5,
          height: windowHeight / 8,
        }}>

          <Image source={{
            uri: item.image
          }} style={{
            // flex: 1,
            width: 40,
            height: 40,
            resizeMode: 'contain'
          }} />
          <Text style={{
            marginTop: 10,
            fontFamily: fonts.secondary[600],
            fontSize: 8,
            color: colors.secondary,
            textAlign: 'center'
          }}>{item.judul}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }


  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <View style={{
        padding: 20,
        backgroundColor: colors.primary,
        flexDirection: 'row'
      }}>
        <View style={{
          flex: 1,
        }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 16,
            color: colors.white
          }}>Hi, {user.nama_lengkap}</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: 16,
            color: colors.white
          }}>Selamat datang di Budaya K3</Text>
        </View>
        <View>
          <Image source={require('../../assets/logo.png')} style={{
            width: 50,
            height: 50
          }} />
        </View>
      </View>
      <View style={{ flex: 0.5, backgroundColor: colors.primary, padding: 20, }}>
        <View style={{
          flex: 1,
          backgroundColor: colors.primary,
          borderRadius: 10,
        }}>
          {/* <View style={{
            marginHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: colors.primary
          }}>
            <Image
              source={require('../../assets/piksi.png')}
              style={
                {
                  marginVertical: 10,
                  width: 60,
                  height: 60,
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
                  height: 60,
                  resizeMode: 'contain'
                }
              }
            />





          </View>
          <View style={{
            marginHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: colors.primary
          }}>

            <Image
              source={require('../../assets/tutwuri.png')}
              style={
                {
                  marginVertical: 10,
                  width: 60,
                  height: 60,
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




          </View> */}
        </View>
      </View>
      <View style={{
        flex: 1,
        padding: 10,
        justifyContent: 'center',


        backgroundColor: colors.primary
      }}>



        <FlatList data={data} renderItem={__renderItem} numColumns={4} />


      </View>







      {/* navigation bottom */}
      <View style={{
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        justifyContent: 'space-around'
      }}>
        <TouchableOpacity style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='home-outline' color={colors.primary} size={20} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            color: colors.primary
          }}>Beranda</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Ulasan')} style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='options-outline' color={colors.primary} size={20} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            color: colors.primary
          }}>Testimoni</Text>

        </TouchableOpacity>



        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='person-outline' color={colors.primary} size={20} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            color: colors.primary
          }}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({})