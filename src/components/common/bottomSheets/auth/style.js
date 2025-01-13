import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const createStyles = (theme) =>
    StyleSheet.create({
          container:{
            paddingHorizontal: wp('10%'),
            paddingVertical: hp('2%'),
          },
          navBar:{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal:wp('5%'),
            paddingVertical: hp('2%'),
          },
          navBarWithEmail:{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal:wp('5%'),
            paddingVertical: hp('2%'),
          },
          registerLoginText:{
            fontSize: wp('4.5%'),
            fontWeight: 'bold',
            marginLeft: wp('5%'),
          },
          logoImage:{
            width: wp('30%'),
            height: wp('30%'),
            marginVertical: hp('5%'),
          },
          logoSection:{
            alignItems: 'center',
            marginTop: hp('2%'),
          },
          welcomeText:{
            fontSize: wp('9%'),
            fontWeight: 'bold',
          },
          descritpion:{
            alignItems: 'center',
            marginTop: hp('2%'),
            textAlign: 'center',
          },
          loginMethodsContainer:{
            alignItems: 'center',
            marginTop: hp('2%'),
          },
          continueWithEmail:{
            marginVertical: hp('2%'),
            width: wp('80%'),
            height: hp('6%'),
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: wp('10%'),
          },
          signWithEmailText:{
            color: theme.colors.textPrimary,
            fontSize: wp('4%'),
            fontWeight: 'bold', 
          },

          // continue with email section
          emailInput:{
            width: '100%',
            height: hp('6%'),
            backgroundColor: theme.colors.background,
            borderRadius: wp('5%'),
            paddingHorizontal: wp('5%'),
            marginVertical: hp('2%'),
          },
          continueBtnContainer:{
            flexDirection: 'row',
            justifyContent: 'center',
          },
          continueBtn:{
            width:'80%',
            height: hp('6%'),
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: wp('10%'),
            marginVertical: hp('2%'),
          },
          continueBtnText:{
            color: theme.colors.textPrimary,
            fontSize: wp('4%'),
            fontWeight: 'bold',
          },
  })