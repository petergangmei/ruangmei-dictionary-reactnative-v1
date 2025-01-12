import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '../../../config/context/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; 



const NavBar = ({backEnabled}) => {
  const navigation = useNavigation(); 
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        minHeight: hp('6.5%'),
        paddingTop:hp('1.5%'),
        paddingHorizontal: wp('4%'),
        backgroundColor: theme.colors.background,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text:{
        color: theme.colors.text,
        fontSize: wp('5a%'),
        fontWeight:'bold',
        opacity:backEnabled? 1:0,
        alignSelf:'center',
    },
    backIcon:{
        alignSelf:'center',
        opacity:backEnabled? 1:0,
    },
    userIcon:{
        alignSelf:'center',
    }
})

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={()=> navigation.goBack()}>
      <Ionicons name="chevron-back"  size={wp('6.5%')} color={theme.colors.primary} />
      </TouchableOpacity>
      <Text style={styles.text}>Ruangmei Dictionary</Text>
      <EvilIcons name="user" style={styles.userIcon} size={wp('7%')} color={theme.colors.text} />
    </View>
  )
}
export default NavBar
