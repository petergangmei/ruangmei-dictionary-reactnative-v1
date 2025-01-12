import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../config/context/ThemeContext'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = ({active}) => {
    const navigation = useNavigation();

    const { theme } = useTheme();
    const styles = StyleSheet.create({
        container: {
            width: wp('100%'),
            minHeight: hp('6.5%'),
            // paddingHorizontal: wp('5%'),
            backgroundColor: theme.colors.background,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        navItem: {
            padding: wp('4%'),
            paddingHorizontal: wp('15%'),
            alignItems: 'center',
        },
        textActive: {
            color: theme.colors.text,
            marginTop:hp('1%'),
            fontSize: wp('4%'),
            alignSelf: 'center',
        },
        text: {
            color: theme.colors.placeholder,
            marginTop:hp('1%'),
            fontSize: wp('4%'),
            alignSelf: 'center',
        },
        active:{
            color: theme.colors.primary,
        },
        inactive:{
            color: theme.colors.placeholder,
        }
    })
  
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem} onPress={()=> navigation.navigate('Dictionary')} >
                <Ionicons name="home" size={wp('6.5%')} style={[active==0 ? styles.active: styles.inactive]}  />
                <Text style={[active == 0 ? styles.textActive : styles.text]}>Dictionary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={()=> navigation.navigate('Favorites')} >
                <Ionicons name="bookmark" size={wp('6.5%')} style={[active==1 ? styles.active: styles.inactive]} />
                <Text style={[active == 1 ?styles.textActive : styles.text]}>Favorites</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNavigation

