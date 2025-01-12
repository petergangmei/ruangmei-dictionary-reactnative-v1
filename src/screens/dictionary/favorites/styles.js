import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const createStyles =(theme)=> StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    headerText: {
        fontSize: wp('6.5%'),
        color: theme.colors.text,
        fontWeight: 'bold',
        margin: 20,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp('2%'),
        borderWidth: 1,
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.surface,
        paddingHorizontal: wp('2%'),
        marginHorizontal: wp('4%'),
    },
    searchInput: {
        height: hp('6%'),
        width: '95%',
        borderRadius: wp('2%'),
        fontSize: wp('4.2%'),
        backgroundColor: theme.colors.surface,
        paddingHorizontal: 10,
        color: theme.colors.text,
    },
    searchIcon: {
        color: theme.colors.textLight,
    },

    // Empty State Styles
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('10%'),
    },
    emptyIcon: {
        fontSize: wp('20%'),
        color: theme.colors.textLight,
    },
    heartIcon: {
        fontSize: wp('8%'),
        color: theme.colors.primary,
        position: 'absolute',
        bottom: hp('-2%'), // Slightly overlaps the document icon
        right: wp('6%'),
    },
    emptyText: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: theme.colors.text,
        marginTop: hp('2%'),
    },
    emptySubText: {
        fontSize: wp('4%'),
        color: theme.colors.textLight,
        marginTop: hp('1%'),
        textAlign: 'center',
        paddingHorizontal: wp('10%'),
    },
})
