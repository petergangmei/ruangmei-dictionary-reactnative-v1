import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const createStyles = (theme) =>
    StyleSheet.create({
    container: {
      flex: 1,
    },
    navBar: {
      width: wp('100%'),
      height: hp('5%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: wp('5%'),
      alignItems: 'center',
    },
  
    textAccount: {
      fontSize: 20,
    },
  
    textDone: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'blue',
    },
  
    profileSection: {
      height: hp('13%'),
      backgroundColor: theme.colors.background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp('8%'),
      marginVertical:hp('1%'),
      marginHorizontal: wp('5%'),
  
    },
    userLogo: {
      width: wp('15%'),
      height: wp('15%'),
    },
    subSection:{
      width: wp('55%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    signInText:{
      fontSize: wp('4%'),
      fontWeight: 'bold',
    },
    settingSection:{
      height:hp('50%'),
      backgroundColor: theme.colors.background,
      marginVertical:hp('1%'),
      marginHorizontal: wp('5%'),
    },
  })