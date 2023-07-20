import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { windowWidth, fonts } from '../../utils/fonts';
import { getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

export default function EReport({ navigation, route }) {
    const [user, setUser] = useState({});
    const [com, setCom] = useState({});
    const isFocused = useIsFocused();
    const [wa, setWA] = useState('');
    const [open, setOpen] = useState(false);



    useEffect(() => {


        if (isFocused) {
            getData('user').then(res => {

                setOpen(true);
                setUser(res);

            });
        }




    }, [isFocused]);




    const MyList = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 3,
                    padding: 5,
                    backgroundColor: colors.white,
                    borderRadius: 5,
                }}>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: '#8E99A2',
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: colors.black,
                    }}>
                    {value}
                </Text>
            </View>
        )
    }

    const MyList2 = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 3,
                    padding: 5,
                    backgroundColor: colors.white,
                    borderRadius: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.zavalabs,
                    flexDirection: 'row',
                    backgroundColor: colors.zavalabs,
                    alignItems: 'center'
                }}>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: colors.black,
                        fontSize: 12,
                        flex: 1,
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                        backgroundColor: colors.primary,
                        fontFamily: fonts.primary[800],
                        color: colors.white,
                        paddingHorizontal: 10,
                        fontSize: 15
                    }}>
                    {value}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F4F6FF'
        }}>

            {!open && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}


            {open &&
                <>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: colors.white,
                            padding: 5,
                            height: 80,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{
                                padding: 5,
                            }}>
                                <Icon type='ionicon' name='arrow-back-outline' size={windowWidth / 13} color={colors.black} />
                            </TouchableOpacity>
                            <Text style={{
                                flex: 1,
                                textAlign: 'center',
                                fontFamily: fonts.secondary[600],
                                fontSize: 20,

                                color: colors.black
                            }}>E - REPORT</Text>

                        </View>

                        <View style={{
                            backgroundColor: colors.white,
                            margin: 10,
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 1
                            }}>
                                <Text style={{
                                    padding: 10,
                                    backgroundColor: colors.primary,
                                    color: colors.white,
                                    fontFamily: fonts.secondary[800]
                                }}>IDENTITAS PESERTA</Text>
                                <View style={{ padding: 10, }}>

                                    <MyList label="Nama Lengkap" value={user.nama_lengkap} />
                                    <MyList label="NIK/NIS/NIM/NIDN" value={user.nik} />

                                    <MyList label="Tempat, Tanggal/Lahir" value={user.tempat_lahir + ', ' + moment(user.tanggal_lahir).format('DD MMMM YYYY')} />
                                    <MyList label="Status/Jabata" value={user.jabatan} />
                                    <MyList label="Instansi/Perusahaan" value={user.instansi} />
                                    <MyList label="Nomor Whatsapp" value={user.telepon} />


                                </View>
                            </View>

                            <View style={{
                                flex: 1,
                            }}>
                                <Text style={{
                                    padding: 10,
                                    backgroundColor: colors.primary,
                                    color: colors.white,
                                    fontFamily: fonts.secondary[800]
                                }}>SKOR</Text>
                                <View style={{ padding: 10, flex: 1, justifyContent: 'space-around' }}>

                                    <MyList2 label="DASAR-DASAR K3" value={80} />
                                    <MyList2 label="ALAT PELINDUNG DIRI" value={80} />
                                    <MyList2 label="RAMBU-RAMBU K3" value={80} />
                                    <MyList2 label="5R" value={80} />
                                    <MyList2 label="TOTAL NILAI" value={80} />
                                    <MyList2 label="NILAI RATA-RATA" value={80} />



                                </View>


                            </View>
                        </View>

                        <View style={{
                            padding: 20,
                        }}>
                            <MyButton title="Download E-REPORT" warna={colors.primary} />
                        </View>

                    </View>

                </>
            }

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
