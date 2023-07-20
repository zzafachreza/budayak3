import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking } from 'react-native';
import { fonts, windowWidth, colors, windowHeight } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';


export default function Login({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    username: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});





  const masuk = () => {


    if (kirim.username == null && kirim.password == null) {
      Alert.alert(MYAPP, 'Username dan Password tidak boleh kosong !');
    } else if (kirim.username == null) {
      Alert.alert(MYAPP, 'Username tidak boleh kosong !');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password tidak boleh kosong !');
    } else {


      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('Home')
          }

        });



    }




  }

  useEffect(() => {

    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, [])

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.primary, position: 'relative' }}>

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

        <View style={{
          padding: 20,
        }}>
          <Text style={{
            fontFamily: fonts.secondary[800],
            color: colors.white,
            fontSize: 25,
          }}>Mari Belajar Bersama kami</Text>
          <Text style={{
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: 15,
          }}>Keselamatan dan Kesehatan Kerja (K3) merupakan hal yang penting dalam suatu pengerjaan proyek. Yuk pelajari dan pahami bersama kami . . .</Text>



        </View>


        <View style={{
          padding: 20, flex: 1, backgroundColor: colors.tertiary, margin: 20,
          borderRadius: 10,
        }}>
          <MyInput label="Username" onChangeText={val => setKirim({
            ...kirim,
            username: val
          })}
            iconname="at" placeholder="Masukan username" />
          <MyGap jarak={20} />
          <MyInput
            onChangeText={val => setKirim({
              ...kirim,
              password: val
            })}
            secureTextEntry={true}
            label="Password"
            iconname="lock-closed"
            placeholder="Masukan kata sandi"
          />
          <MyGap jarak={40} />
          {!loading &&


            <View style={{
              flexDirection: 'row'
            }}>
              <View style={{
                flex: 1,
                paddingRight: 5
              }}>
                <MyButton
                  onPress={masuk}
                  title="Log in"


                  Icons="log-in-outline"
                />
              </View>
              <View style={{
                flex: 1,
                paddingLeft: 5,
              }}>
                <MyButton
                  onPress={() => navigation.navigate('Register')}
                  title="Register"
                  warna={colors.primary}
                  iconColor={colors.white}
                  colorText={colors.white}

                  Icons="create-outline"
                />
              </View>
            </View>

          }

        </View>

        <View style={{
          padding: 20,
        }}>
          <View style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.white,
            marginVertical: 20,
            width: '30%'
          }} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: 15,
          }}>Aplikasi ini merupakan program kerjasama antara Politeknik Piksi Ganesha Indonsia dan CV. Astoetik dalam program <Text style={{
            fontFamily: fonts.secondary[800],
            color: colors.secondary,
            fontStyle: 'italic'
          }}>Matching Found</Text></Text>

        </View>
        {loading && <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>}
      </ScrollView>


    </>
  );
}

const styles = StyleSheet.create({});
