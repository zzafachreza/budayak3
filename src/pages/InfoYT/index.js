import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData, webURL } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import YoutubePlayer from "react-native-youtube-iframe";
import Pdf from 'react-native-pdf';
export default function InfoYT({ navigation, route }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.primary
        }}>
            <View style={{
                backgroundColor: colors.white,
                height: 60,
                paddingVertical: 10,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>


                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 15,
                    flex: 1,
                }}>{route.params.nama_materi}</Text>
            </View>
            <YoutubePlayer
                height={300}

                videoId={route.params.link_youtube}

            />
            <View style={{
                flex: 1,

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
                                height: 100,
                                resizeMode: 'contain'
                            }
                        }
                    />
                    <Image
                        source={require('../../assets/asto.png')}
                        style={
                            {
                                marginVertical: 10,
                                width: 140,
                                height: 100,
                                resizeMode: 'contain'
                            }
                        }
                    />





                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    backgroundColor: colors.primary
                }}>
                    <Image
                        source={require('../../assets/tutwuri.png')}
                        style={
                            {
                                marginVertical: 10,
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }
                        }
                    />
                    <Image
                        source={require('../../assets/kedai.png')}
                        style={
                            {
                                marginVertical: 10,
                                width: 140,
                                height: 100,
                                resizeMode: 'contain'
                            }
                        }
                    />





                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})