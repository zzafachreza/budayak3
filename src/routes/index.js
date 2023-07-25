import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Pengaturan,
  InfoPdf,
  RumahSakit,
  Janji,
  WebInfo,

  MenuRuangK3,
  MenuDasarK3,
  MenuApd,
  Menu5R,
  MenuKyt,
  MenuKuisK3,
  MenuEReport,
  InfoYT,
  InfoSoal,
  Ulasan,
  MenuDownload,



} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import MenuRambuK3 from '../pages/RambuK3';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen name="MenuRuangK3" component={MenuRuangK3} options={{ headerShown: false }} />
      <Stack.Screen name="MenuDasarK3" component={MenuDasarK3} options={{ headerShown: false }} />
      <Stack.Screen name="MenuApd" component={MenuApd} options={{ headerShown: false }} />
      <Stack.Screen name="MenuRambuK3" component={MenuRambuK3} options={{ headerShown: false }} />
      <Stack.Screen name="Menu5R" component={Menu5R} options={{ headerShown: false }} />
      <Stack.Screen name="MenuKyt" component={MenuKyt} options={{ headerShown: false }} />
      <Stack.Screen name="MenuKuisK3" component={MenuKuisK3} options={{ headerShown: false }} />
      <Stack.Screen name="MenuEReport" component={MenuEReport} options={{ headerShown: false }} />





      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />





      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />










      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="WebInfo"
        component={WebInfo}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="InfoPdf"
        component={InfoPdf}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="InfoYT"
        component={InfoYT}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="InfoSoal"
        component={InfoSoal}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Ulasan"
        component={Ulasan}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="MenuDownload"
        component={MenuDownload}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="RumahSakit"
        component={RumahSakit}
        options={{
          headerShown: false,
          headerTitle: 'Janji Temu',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000000',
        }}
      />

      <Stack.Screen
        name="Janji"
        component={Janji}
        options={{
          headerShown: false,
          headerTitle: 'Janji Temu',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000000',
        }}
      />



    </Stack.Navigator>
  );
}
