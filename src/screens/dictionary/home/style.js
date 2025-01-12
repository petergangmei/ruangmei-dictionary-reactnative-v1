import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: wp('5%'),
    },
    header: {
      fontSize: wp('6.5%'),
      fontWeight: 'bold',
      color: theme.colors.text, 
    },
    subHeader: {
      fontSize: 16,
      color: theme.colors.placeholder,
      marginTop: 4,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: hp('2%'),
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: theme.colors.surface, 
      borderColor: theme.colors.surface,
      paddingHorizontal: 10,
    },
    searchInput: {
      flex: 1,
      paddingVertical: hp('1.5%'),
      fontSize: wp('4%'),
      color: theme.colors.textLight, 
    },
    icon: {
      marginHorizontal: 5,
    },
    seactionHeaderContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionHeader: {
      fontSize: wp('4%'),
      fontWeight: 'bold',
      marginVertical: 10,
      color: theme.colors.textLight,
    },
    viewAllText:{
      color: theme.colors.textLight,
      fontSize: 14,
    },
    wordContainer: {
      padding: 12,
      backgroundColor: theme.colors.surface, // Dynamic surface color
      borderRadius: 8,
    },
    date: {
      color: theme.colors.placeholder,
      fontSize: 12,
    },
    word: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.primary, // Primary color for important text
    },
    definition: {
      fontSize: 14,
      color: theme.colors.textLight,
      marginTop: 4,
    },
    banner: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal:wp('5%'),
      paddingVertical:hp('3%'),
      borderRadius: wp('3%'),
      marginVertical:hp('3%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bannerText: {
      color: theme.colors.textPrimary, // White text for primary background
      fontSize: wp('4%'),
      marginBottom:wp('1%'),
      fontWeight: 'bold',
    },
    bannerSubText: {
      color: theme.colors.textPrimary,
      fontSize: wp('3.5%'),
    },
    recentItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
      marginTop: 8,
    },
    flag: {
      fontSize: 18,
      marginRight: 8,
    },
    recentWord: {
      fontSize: 16,
      color: theme.colors.text,
    },
    dictionaryBanner: {
      padding: 16,
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
      marginTop: 12,
    },
  });
