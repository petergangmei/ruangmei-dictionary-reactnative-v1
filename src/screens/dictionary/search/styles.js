import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const createStyles = (theme) =>
  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp('2%'),
        borderWidth: 1,
        backgroundColor: theme.colors.surface, // Dynamic surface color
        borderColor: theme.colors.surface,
        paddingHorizontal: wp('2%'),
        marginHorizontal: wp('4%'),
    },
    searchInput: {
      height: hp('6%'),
      width: '95%',
      borderRadius: wp('2%'),
      fontSize:wp('4.2%'),
      backgroundColor: theme.colors.surface,
      paddingHorizontal: 10,
      color: theme.colors.text,
    },
    searchIcon:{
        color: theme.colors.textLight,
    },
    listItem: {
      padding: wp('4.5%'),
      borderBottomWidth: 1,
      borderColor: theme.colors.textSecondary,
    },
    listItemText: {
      fontSize: wp('3.8%'),
      color: theme.colors.text,
    },
  })
